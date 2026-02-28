import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" style={{ padding: '100px 60px', background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'DM Mono', monospace" }}>
            Stay Sharp
            <span style={{ flex: '0 0 40px', height: '1px', background: 'var(--accent2)', display: 'block' }} />
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 0.95, marginBottom: '20px' }}>
            The{' '}
            <em style={{ fontFamily: "'Fraunces', serif", color: 'var(--accent)', fontStyle: 'italic' }}>Weekly</em>
            <br />AI Brief
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, fontFamily: "'Fraunces', serif", fontWeight: 300 }}>
            Every Wednesday: one tool breakdown, one benchmark result, one technique to try. No noise, no affiliate links. Just technical depth for people who build with AI.
          </p>
        </div>

        <div>
          {submitted ? (
            <div style={{ padding: '40px', border: '1px solid var(--accent)', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', color: 'var(--accent)', marginBottom: '12px' }}>You're In ✓</div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: "'DM Mono', monospace" }}>First issue lands next Wednesday.</p>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: 1, padding: '16px 20px',
                    background: 'var(--bg)', border: '1px solid var(--border)', borderRight: 'none',
                    color: 'var(--text)', fontFamily: "'DM Mono', monospace", fontSize: '12px',
                    outline: 'none',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: '16px 30px',
                    background: 'var(--accent)', color: '#000',
                    fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '2px',
                    textTransform: 'uppercase', border: 'none',
                  }}
                  onMouseEnter={e => e.target.style.boxShadow = '0 0 20px rgba(0,255,170,0.3)'}
                  onMouseLeave={e => e.target.style.boxShadow = 'none'}
                >
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '12px', letterSpacing: '1px', fontFamily: "'DM Mono', monospace" }}>
                // No spam. Unsubscribe anytime. 4,200+ developers already reading.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
