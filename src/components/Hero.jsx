import React from 'react';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '160px 60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.3,
        maskImage: 'radial-gradient(ellipse at 30% 60%, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 30% 60%, black 20%, transparent 70%)',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,255,170,0.08) 0%, transparent 70%)',
        top: '10%', right: '-100px',
        animation: 'pulse 4s ease-in-out infinite',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,60,110,0.06) 0%, transparent 70%)',
        bottom: '20%', left: '5%',
        animation: 'pulse 6s ease-in-out infinite reverse',
        borderRadius: '50%',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: '24px',
          display: 'flex', alignItems: 'center', gap: '12px',
          animation: 'fadeUp 0.6s ease 0.2s both',
        }}>
          <span style={{ display: 'block', width: '30px', height: '1px', background: 'var(--accent)' }} />
          The AI Intelligence Hub
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(72px, 12vw, 180px)',
          lineHeight: 0.9, letterSpacing: '2px',
          color: 'var(--text)',
          animation: 'fadeUp 0.8s ease 0.3s both',
        }}>
          Decode{' '}
          <em style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: 'italic', fontWeight: 300,
            color: 'var(--accent)',
            textShadow: '0 0 40px rgba(0,255,170,0.3)',
          }}>Every</em>
          <br />AI Tool
        </h1>

        <p style={{
          maxWidth: '500px', marginTop: '32px',
          fontSize: '13px', lineHeight: 1.8,
          color: 'var(--muted)',
          fontFamily: "'Fraunces', serif", fontWeight: 300,
          animation: 'fadeUp 0.6s ease 0.5s both',
        }}>
          Deep technical breakdowns of ChatGPT, Gemini, Claude, Midjourney, and every AI tool reshaping the tech landscape. No hype — just signal.
        </p>

        <div style={{
          marginTop: '40px', display: 'flex', gap: '20px', alignItems: 'center',
          animation: 'fadeUp 0.6s ease 0.6s both',
        }}>
          <a href="#articles" style={{
            padding: '14px 36px',
            background: 'var(--accent)', color: '#000',
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
            border: 'none', textDecoration: 'none',
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
            transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.target.style.boxShadow = '0 0 30px rgba(0,255,170,0.4)'}
            onMouseLeave={e => e.target.style.boxShadow = 'none'}
          >
            Explore Articles
          </a>
          <a href="#tools" style={{
            padding: '14px 36px',
            background: 'transparent', color: 'var(--text)',
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
            border: '1px solid var(--border)', textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)'; }}
          >
            Browse Tools
          </a>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        position: 'absolute', right: '60px', bottom: '80px',
        display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'right',
        animation: 'fadeUp 0.6s ease 0.8s both',
        zIndex: 1,
      }}>
        {[{ num: '50+', label: 'AI Tools Reviewed' }, { num: '12K', label: 'Readers Weekly' }].map(s => (
          <div key={s.label}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', color: 'var(--accent)', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
