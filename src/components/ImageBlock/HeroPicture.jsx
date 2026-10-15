import { useState } from 'react';
import {
  heroDark,
  heroMobileDark,
  buildSrcSet,
  getSrc,
} from '../../data/images';
import GenerativeVisual from '../GenerativeVisual/GenerativeVisual';
import styles from './ImageBlock.module.css';

export default function HeroPicture({ className = '' }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const desktopEntry = heroDark;
  const mobileEntry  = heroMobileDark;

  const showFallback = hasError || !desktopEntry || !desktopEntry.widths?.length;

  return (
    <div className={`${styles.frame} ${styles.ratio_16_9} ${className}`}>
      {showFallback ? (
        <GenerativeVisual
          variant="generic"
          aria-label={desktopEntry?.alt ?? 'Code Kompany hero visual'}
        />
      ) : (
        <>
          {desktopEntry.lqip && (
            <div
              className={styles.lqip}
              style={{
                backgroundImage: `url(${desktopEntry.lqip})`,
                opacity: isLoaded ? 0 : 1,
              }}
              aria-hidden="true"
            />
          )}
          <picture className={styles.imageWrap}>
            {/* Mobile portrait image under 700px */}
            <source
              media="(max-width: 699px)"
              srcSet={buildSrcSet(mobileEntry)}
              sizes="100vw"
            />
            {/* Desktop landscape image 700px and above */}
            <source
              media="(min-width: 700px)"
              srcSet={buildSrcSet(desktopEntry)}
              sizes="100vw"
            />
            <img
              src={getSrc(desktopEntry, 1024)}
              alt={desktopEntry.alt}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`${styles.img} ${isLoaded ? styles.loaded : styles.loading}`}
              style={{ objectPosition: desktopEntry.focal || '50% 50%' }}
            />
          </picture>
          <div className={styles.overlay} aria-hidden="true" />
        </>
      )}
    </div>
  );
}
