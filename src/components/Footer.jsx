import React, { useState } from 'react';

// SVG Icons
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Deepakbisht010/deepakbisht010',
    icon: <GithubIcon />,
    color: '#e8e8f0',
    desc: 'See my code & projects',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepak-singh-a05583328/',
    icon: <LinkedinIcon />,
    color: '#0a66c2',
    desc: 'Connect professionally',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/deepak_bisht.001/',
    icon: <InstagramIcon />,
    color: '#e1306c',
    desc: 'Follow my journey',
  },
];

function SocialCard({ social }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        padding: '32px 24px',
        background: hovered ? 'rgba(255,255,255,0.04)' : 'transparent',
        border: `1px solid ${hovered ? social.color : 'var(--border)'}`,
        textDecoration: 'none',
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 0 30px ${social.color}22` : 'none',
      }}
    >
      <span style={{ color: hovered ? social.color : 'var(--muted)', transition: 'color 0.3s' }}>
        {social.icon}
      </span>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', letterSpacing: '3px', color: hovered ? social.color : 'var(--text)', transition: 'color 0.3s' }}>
        {social.label}
      </span>
      <span style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px', fontFamily: "'DM Mono', monospace", textAlign: 'center' }}>
        {social.desc}
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contact" style={{ position: 'relative', zIndex: 1 }}>
      {/* Contact Section */}
      <div style={{
        padding: '80px 60px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: "'DM Mono', monospace" }}>
          <span style={{ width: '30px', height: '1px', background: 'var(--accent2)', display: 'block' }} />
          Get In Touch
          <span style={{ width: '30px', height: '1px', background: 'var(--accent2)', display: 'block' }} />
        </div>

        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(48px, 8vw, 96px)',
          lineHeight: 0.95, marginBottom: '20px',
          letterSpacing: '2px',
        }}>
          Let's{' '}
          <em style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>
            Connect
          </em>
        </h2>

        <p style={{
          maxWidth: '500px', margin: '0 auto 50px',
          fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8,
          fontFamily: "'Fraunces', serif", fontWeight: 300,
        }}>
          Interested in collaboration, guest writing, or just want to talk AI? Find me across these platforms.
        </p>

        {/* Social Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px', maxWidth: '600px', margin: '0 auto 60px',
        }}>
          {socials.map(s => <SocialCard key={s.label} social={s} />)}
        </div>

        {/* Decorative divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '400px', margin: '0 auto 60px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '3px', fontFamily: "'DM Mono', monospace" }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <a href="mailto:deepakbisht4050@techparts.dev" style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          padding: '16px 40px',
          background: 'transparent', color: 'var(--accent)',
          fontFamily: "'DM Mono', monospace",
          fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
          border: '1px solid var(--accent)', textDecoration: 'none',
          transition: 'background 0.2s, box-shadow 0.2s',
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,170,0.08)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,170,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <span>✉</span> deepakbisht4050@techparts.dev
        </a>
      </div>

      {/* Footer Bottom */}
      <div style={{
        padding: '40px 60px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', letterSpacing: '6px', color: 'var(--border)', lineHeight: 1 }}>
            TECHPARTS
          </div>
          <p style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '8px', letterSpacing: '1px', fontFamily: "'DM Mono', monospace" }}>
            // AI Tools Decoded — Est. 2024
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'right' }}>
          {['About', 'Write for Us', 'Privacy Policy', 'RSS Feed'].map(link => (
            <a key={link} href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace", transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link}
            </a>
          ))}
          <p style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '8px', letterSpacing: '1px', fontFamily: "'DM Mono', monospace" }}>
            © 2026 TechParts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
