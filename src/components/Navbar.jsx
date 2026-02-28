import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, width: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 60px',
    background: 'rgba(10,10,15,0.92)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid var(--border)',
    zIndex: 100,
    transition: 'padding 0.3s',
  },
  navScrolled: {
    padding: '14px 60px',
    boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '28px',
    letterSpacing: '4px',
    color: 'var(--accent)',
    textShadow: '0 0 20px var(--glow)',
    textDecoration: 'none',
  },
  logoSpan: { color: 'var(--text)' },
  navLinks: {
    display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center',
  },
  navLink: {
    color: 'var(--muted)', textDecoration: 'none',
    fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
    transition: 'color 0.2s',
    fontFamily: "'DM Mono', monospace",
    position: 'relative',
    paddingBottom: '4px',
  },
  navLinkActive: {
    color: 'var(--accent)',
  },
  badge: {
    background: 'var(--accent2)',
    color: '#fff', fontSize: '9px', letterSpacing: '1px',
    padding: '4px 10px', borderRadius: '2px', textTransform: 'uppercase',
    fontFamily: "'DM Mono', monospace",
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column', gap: '5px', background: 'none',
    border: 'none', padding: '4px',
  },
  hamburgerLine: {
    width: '24px', height: '2px', background: 'var(--text)',
    transition: 'all 0.3s',
  },
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'AI Tools', href: '#tools' },
  { label: 'Updates', href: '#updates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <a href="#home" style={styles.logo}>
        
        Tech<span style={styles.logoSpan}>More</span>
      </a>

      <ul style={styles.navLinks}>
        {navItems.map(item => (
          <li key={item.label}>
            <a
              href={item.href}
              style={{
                ...styles.navLink,
                ...(active === item.label ? styles.navLinkActive : {}),
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = active === item.label ? 'var(--accent)' : 'var(--muted)'}
              onClick={() => setActive(item.label)}
            >
              {item.label}
              {active === item.label && (
                <span style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '1px', background: 'var(--accent)',
                  boxShadow: '0 0 8px var(--accent)',
                }} />
              )}
            </a>
          </li>
        ))}
        <li><span style={styles.badge}>Live Coverage</span></li>
      </ul>
    </nav>
  );
}
