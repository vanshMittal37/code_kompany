import { useEffect } from 'react';
import { siteUrl, brandName, description as siteDescription } from '../../config/site';

function updateMetaTag(selector, attr, attrValue, contentValue) {
  let element = document.querySelector(selector);
  if (!element && contentValue) {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  if (element) {
    if (contentValue) {
      element.setAttribute('content', contentValue);
    } else {
      element.remove();
    }
  }
}

function updateLinkTag(rel, hrefValue) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element && hrefValue) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  if (element) {
    if (hrefValue) {
      element.setAttribute('href', hrefValue);
    } else {
      element.remove();
    }
  }
}

export default function Seo({
  title,
  description = siteDescription,
  path = '',
  image = '/og-image.png',
  noindex = false,
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${brandName}`
      : `${brandName} — AI-Native Software Studio in Vadodara, India`;
    const fullUrl = `${siteUrl}${path}`;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Update document title
    document.title = fullTitle;

    // Standard meta tags
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateMetaTag('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Canonical link
    updateLinkTag('canonical', fullUrl);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImage);

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullImage);
  }, [title, description, path, image, noindex]);

  return null;
}
