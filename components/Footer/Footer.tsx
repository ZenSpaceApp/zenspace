// src/components/Footer/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.scss';


import ZenspaceLogo from '../ui/ZenspaceLogo';

const LINKS = {
  Solutions: [
    { label: 'For Therapists', href: '/therapists' },
    { label: 'ZenNotes',       href: '/zennotes' },
    { label: 'For Patients',   href: '/#for-clients' },
  ],
  Company: [
    { label: 'About',          href: '/about' },
    { label: 'Planet Health',  href: '/planet-health' },
    { label: 'Careers',        href: '/careers' },
  ],
  Resources: [
    { label: 'Pricing',        href: '/pricing' },
    { label: 'Security',       href: '/security' },
    { label: 'HIPAA',          href: '/hipaa-compliance' },
    { label: 'FAQ',            href: '/faqs' },
  ],
  Support: [
    { label: 'Contact',        href: '/contact-us' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms',          href: '/service-terms' },
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
