import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

type ImageProp = { src: any; alt?: string } | null;

export default function Hero({
  eyebrow,
  title,
  children,
  cta,
  image,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  cta?: React.ReactNode;
  image?: ImageProp;
}) {
  return (
    <section className={`${styles.hero} full-bleed`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
            <h1 className={styles.title}>{title}</h1>
            {children && <div className={styles.lead}>{children}</div>}
            {cta && <div className={styles.cta}>{cta}</div>}
          </div>

          {image && (
            <div className={styles.media}>
              <Image src={image.src} alt={image.alt || ''} fill style={{ objectFit: 'cover' }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
