import React from 'react';

const articles = [
  {
    id: '01', tag: 'ChatGPT', tagClass: 'chatgpt', main: true,
    title: 'GPT-4o vs GPT-4 Turbo: A Full Technical Breakdown of Architecture, Speed & Reasoning',
    excerpt: 'We put both models through 200+ benchmark tests — mathematical reasoning, code generation, multimodal tasks, and latency under load. The results are more nuanced than the release notes suggest.',
    date: 'Feb 22, 2026', readTime: '14 min read', type: 'Analysis',
  },
  {
    id: '02', tag: 'Image AI', tagClass: 'image',
    title: "Midjourney v7's New Structural Control Explained",
    excerpt: 'How the new --structure parameter changes prompt engineering fundamentally.',
    date: 'Feb 18, 2026', readTime: '8 min read', type: 'Deep Dive',
  },
  {
    id: '03', tag: 'Coding AI', tagClass: 'code',
    title: 'GitHub Copilot vs Cursor vs Windsurf: Which Wins in 2026?',
    excerpt: 'Real dev workflow testing across 5 project types. We measured output quality and time saved.',
    date: 'Feb 15, 2026', readTime: '11 min read', type: 'Comparison',
  },
];

const tagColors = {
  chatgpt: { border: 'var(--accent)', color: 'var(--accent)' },
  image: { border: '#a78bfa', color: '#a78bfa' },
  code: { border: 'var(--accent3)', color: 'var(--accent3)' },
};

export default function Articles() {
  return (
    <section id="articles" style={{ padding: '100px 60px', position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'DM Mono', monospace" }}>
        Featured Analysis
        <span style={{ flex: '0 0 40px', height: '1px', background: 'var(--accent2)', display: 'block' }} />
      </div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '2px', lineHeight: 1, marginBottom: '60px' }}>
        Latest Deep Dives
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '2px',
      }}>
        {articles.map((a, i) => (
          <ArticleCard key={a.id} article={a} index={i} />
        ))}
      </div>
    </section>
  );
}

function ArticleCard({ article: a, index }) {
  const [hovered, setHovered] = React.useState(false);
  const tc = tagColors[a.tagClass];
  const isMain = a.main;

  return (
    <div
      style={{
        background: 'var(--card)',
        padding: '40px',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s',
        gridRow: isMain ? '1 / 3' : 'auto',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, var(--accent), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      {/* Big number */}
      <div style={{
        position: 'absolute', top: '40px', right: '40px',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '80px', color: 'var(--border)', lineHeight: 1,
        pointerEvents: 'none',
      }}>{a.id}</div>

      {/* Tag */}
      <div style={{
        display: 'inline-block', padding: '4px 10px',
        fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase',
        border: `1px solid ${tc.border}`, color: tc.color,
        marginBottom: '20px', fontFamily: "'DM Mono', monospace",
      }}>{a.tag}</div>

      <h2 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: isMain ? 'clamp(22px, 3vw, 36px)' : '22px',
        fontWeight: 700, lineHeight: 1.2, marginBottom: '16px',
      }}>
        <a href="#" style={{ color: hovered ? 'var(--accent)' : 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }}>
          {a.title}
        </a>
      </h2>

      <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '20px', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>
        {a.excerpt}
      </p>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '10px', letterSpacing: '1px', color: 'var(--muted)', textTransform: 'uppercase', flexWrap: 'wrap' }}>
        <span>{a.date}</span>
        <span style={{ width: '4px', height: '4px', background: 'var(--muted)', borderRadius: '50%', display: 'inline-block' }} />
        <span>{a.readTime}</span>
        <span style={{ width: '4px', height: '4px', background: 'var(--muted)', borderRadius: '50%', display: 'inline-block' }} />
        <span>{a.type}</span>
      </div>

      <a href="#" style={{
        display: 'inline-flex', alignItems: 'center', gap: hovered ? '14px' : '8px',
        color: 'var(--accent)', fontSize: '11px', letterSpacing: '2px',
        textTransform: 'uppercase', textDecoration: 'none',
        marginTop: '24px', transition: 'gap 0.2s',
        fontFamily: "'DM Mono', monospace",
      }}>
        Read Analysis →
      </a>
    </div>
  );
}
