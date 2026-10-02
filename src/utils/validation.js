/**
 * validation.js — Contact form validation schema.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the contact form payload.
 * Returns an errors object. If empty, the form is valid.
 *
 * @param {object} values
 * @returns {{ [field: string]: string }}
 */
export function validateContactForm(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!values.email || !EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.service) {
    errors.service = "Please select the service you're interested in.";
  }

  if (!values.message || values.message.trim().length < 20) {
    errors.message = 'Please describe your project (at least 20 characters).';
  }

  return errors;
}
