import { useState } from 'react';
import { getImage, buildSrcSet, getSrc } from '../../data/images';
import GenerativeVisual from '../GenerativeVisual/GenerativeVisual';
import { useReveal } from '../../hooks/useReveal';
import { useParallax } from '../../hooks/useParallax';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './ImageBlock.module.css';

export default function ImageBlock({
  imageKey,
  ratio = '16/9',
  priority = false,
  sizes = '(min-width: 1200px) 50vw, 100vw',
  overlay = false,
  parallax = false,
  reveal = true,
  hoverZoom = false,
  framed = 'auto',
  caption,
  alt: altOverride,
  className = '',
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const reducedMotion = useReducedMotion();

  const entry = getImage(imageKey);
  const [revealRef, isVisible] = useReveal({ threshold: 0.15 });
  const parallaxRef = useParallax(0.6);

  const isDecorative = altOverride === '';
  const altText = isDecorative
    ? ''
    : altOverride ?? entry?.alt ?? 'Code Kompany showcase visual';

  // If entry is missing or onError was triggered
  const showFallback = !entry || hasError || !entry.widths?.length;

  const ratioClass = ratio !== 'auto' ? styles[`ratio_${ratio.replace('/', '_')}`] : '';

  const framedClass =
    framed === 'always'
      ? styles.framedAlways
      : framed === 'auto'
      ? styles.framedAuto
      : '';

  const isRevealed = !reveal || reducedMotion || isVisible;

  return (
    <figure
      ref={revealRef}
      className={[
        styles.frame,
        ratioClass,
        framedClass,
        overlay ? styles.hasOverlay : '',
        isRevealed ? styles.revealed : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={isDecorative ? 'true' : undefined}
      {...props}
    >
      {showFallback ? (
        <GenerativeVisual
          variant={entry?.fallback ?? 'generic'}
          aria-label={altText}
        />
      ) : (
        <>
          {/* Blur-up LQIP background */}
          {entry.lqip && (
            <div
              className={styles.lqip}
              style={{ backgroundImage: `url(${entry.lqip})` }}
              aria-hidden="true"
            />
          )}

          {/* Main responsive image */}
          <div
            ref={parallax ? parallaxRef : undefined}
            className={[
              styles.imageWrap,
              parallax ? styles.parallaxWrap : '',
              hoverZoom ? styles.hoverZoom : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <img
              src={getSrc(entry, 1024)}
              srcSet={buildSrcSet(entry)}
              sizes={sizes}
              alt={altText}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
              decoding={priority ? 'sync' : 'async'}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={[
                styles.img,
                isLoaded ? styles.loaded : styles.loading,
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ objectPosition: entry.focal || '50% 50%' }}
            />
          </div>

          {/* Overlay gradient */}
          {overlay && <div className={styles.overlay} aria-hidden="true" />}
        </>
      )}

      {caption && (
        <figcaption className={`label ${styles.caption}`}>{caption}</figcaption>
      )}
    </figure>
  );
}
