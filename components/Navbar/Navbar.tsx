// src/components/Navbar/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import ZenspaceLogo from '../ZenspaceLogo';

const NAV_LINKS = [
  { label: 'Therapists', href: '/therapists' },
  { label: 'ZenNotes',   href: '/zennotes' },
  { label: 'Pricing',    href: '/pricing' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
      <nav className={styles.nav}>

        <Link href="/" className={styles.logo}>
          <ZenspaceLogo />
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/login" className={styles.signIn}>Sign in</Link>
          <Link href="/early-access" className={`${styles.cta} btn btn--primary`}>
            Get early access
          </Link>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span className={[styles.menuLine, menuOpen ? styles.menuLineOpen1 : ''].join(' ')} />
          <span className={[styles.menuLine, menuOpen ? styles.menuLineOpen2 : ''].join(' ')} />
        </button>

      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          <Link href="/login" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            Sign in
          </Link>
          <Link
            href="/early-access"
            className={`${styles.mobileCta} btn btn--primary`}
            onClick={() => setMenuOpen(false)}
          >
            Get early access
          </Link>
        </div>
      )}
    </header>
  );
}
