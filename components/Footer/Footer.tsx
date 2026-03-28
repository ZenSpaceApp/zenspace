// src/components/Footer/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.scss';


import ZenspaceLogo from '../ui/ZenspaceLogo';

const LINKS = {
  Ecosystem: [
    { label: 'Find a Therapist',   href: '/' },
    { label: 'For Therapists', href: '/therapists' },
    { label: 'ZenNotes', href: '/zennotes' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' }
  ],
  "Trust and Support": [
    { label: 'Security & Privacy',          href: '/security' },
    { label: 'HIPAA Compliance ',  href: '/hipaa-compliance' },
    { label: 'FAQ', href: '/careers' },
    { label: 'Support', href: '/support' },
    { label: 'Accessibility', href: '/accessibility' }
  ],
  Company: [
    { label: 'About',        href: '/pricing' },
    { label: 'Careers',       href: '/security' },
    { label: 'Contact', href: '/hipaa-compliance' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press', href: '/press' },
    { label: 'Donate', href: '/donate-hours' }
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service',        href: '/contact-us' },
    { label: 'Cookie Settings',          href: '/service-terms' },
  ],
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>

        <div className={styles.brand}>
          <ZenspaceLogo />
          {/* <p className={styles.tagline}>
            Your session ends.<br />Your notes are already done.
          </p> */}
          <p className={styles.copy}>©{new Date().getFullYear()} ZenspaceApp Inc.</p>
        </div>

        <nav className={styles.links}>
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className={styles.group}>
              <p className={styles.groupLabel}>{group}</p>
              <ul>
                {items.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

      </div>
    </footer>
  );
}
