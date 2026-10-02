/**
 * emailService.js — Sends form data via EmailJS.
 * All credentials are read from environment variables only.
 * NEVER hard-code keys, passwords or the client's email.
 */

const EMAILJS_SDK_URL = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
const SEND_TIMEOUT_MS = 12000;

let emailjsLoaded = false;
let loadPromise = null;

/** Lazy-load the EmailJS SDK from CDN (avoids bundle weight) */
function loadEmailJS() {
  if (emailjsLoaded) return Promise.resolve(window.emailjs);
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = EMAILJS_SDK_URL;
    script.onload = () => {
      emailjsLoaded = true;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (publicKey) {
        window.emailjs.init(publicKey);
      }
      resolve(window.emailjs);
    };
    script.onerror = () => reject(new Error('Failed to load EmailJS SDK.'));
    document.head.appendChild(script);
  });

  return loadPromise;
}

/**
 * sendEnquiry — sends an enquiry form payload via EmailJS.
 *
 * @param {object} payload - Form values matching your EmailJS template variables.
 * @returns {Promise<void>} Resolves on success, rejects with Error on failure.
 */
export async function sendEnquiry(payload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
    );
  }

  const emailjs = await loadEmailJS();

  // Race the send against a timeout
  const sendPromise = emailjs.send(serviceId, templateId, payload);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out. Please try again.')), SEND_TIMEOUT_MS)
  );

  await Promise.race([sendPromise, timeoutPromise]);
}
