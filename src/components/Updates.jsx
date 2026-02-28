import React, { useState } from 'react';

const topics = [
  { num: '01', name: 'Large Language Models (LLMs)', tag: 'Core' },
  { num: '02', name: 'AI Image & Video Generation', tag: 'Creative' },
  { num: '03', name: 'AI Coding Assistants', tag: 'Dev Tools' },
  { num: '04', name: 'Prompt Engineering', tag: 'Techniques' },
  { num: '05', name: 'AI Agents & Automation', tag: 'Emerging' },
  { num: '06', name: 'Benchmarks & Comparisons', tag: 'Research' },
];

const updates = [
  { date: 'Feb 27, 2026', title: 'OpenAI announces GPT-5 training completion', tag: 'Breaking', color: 'var(--accent2)' },
  { date: 'Feb 25, 2026', title: 'Google Gemini 2.5 Ultra surpasses GPT-4o on MMLU benchmark', tag: 'Research', color: 'var(--accent3)' },
  { date: 'Feb 22, 2026', title: 'Midjourney v7 web editor enters public beta', tag: 'Tools', color: 'var(--accent)' },
  { date: 'Feb 20, 2026', title: 'Anthropic releases Claude for Enterprise with custom memory', tag: 'Product', color: '#a78bfa' },
  { date: 'Feb 17, 2026', title: 'Meta LLaMA 4 leaked benchmarks show near-GPT-4 performance', tag: 'Open Source', color: '#fb923c' },
];

export default function Updates() {
  return (
    <section id="updates" style={{ padding: '100px 60px', position: 'relative', zIndex: 1 }}>
      {/* Topics */}
      <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'DM Mono', monospace" }}>
        Categories
        <span style={{ flex: '0 0 40px', height: '1px', background: 'var(--accent2)', display: 'block' }} />
      </div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '2px', lineHeight: 1, marginBottom: '40px' }}>
        Browse by Topic
      </div>

      <div style={{ marginBottom: '80px' }}>
        {topics.map(t => <TopicRow key={t.num} topic={t} />)}
      </div>

      {/* Latest Updates */}
      <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'DM Mono', monospace" }}>
        Latest Updates
        <span style={{ flex: '0 0 40px', height: '1px', background: 'var(--accent2)', display: 'block' }} />
      </div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: '2px', lineHeight: 1, marginBottom: '40px' }}>
        AI News Feed
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {updates.map((u, i) => <UpdateRow key={i} update={u} />)}
      </div>
    </section>
  );
}

function TopicRow({ topic: t }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="hoverable"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '40px',
        padding: `28px 0 28px ${hovered ? '20px' : '0px'}`,
        borderBottom: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        transition: 'padding-left 0.3s, border-color 0.3s',
      }}
    >
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '14px', color: 'var(--muted)', minWidth: '30px' }}>{t.num}</span>
      <a href="#" style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 700, flex: 1, color: hovered ? 'var(--accent)' : 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }}>{t.name}</a>
      <span style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 10px', border: '1px solid var(--border)', color: 'var(--muted)', fontFamily: "'DM Mono', monospace" }}>{t.tag}</span>
      <span style={{ color: hovered ? 'var(--accent)' : 'var(--muted)', transform: hovered ? 'translateX(8px)' : 'translateX(0)', transition: 'color 0.3s, transform 0.3s' }}>→</span>
    </div>
  );
}

function UpdateRow({ update: u }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '24px',
        padding: '22px 0',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.2s',
        cursor: 'none',
      }}
    >
      <span style={{ fontSize: '10px', color: 'var(--muted)', minWidth: '110px', fontFamily: "'DM Mono', monospace", letterSpacing: '1px' }}>{u.date}</span>
      <span style={{ display: 'inline-block', padding: '2px 8px', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', border: `1px solid ${u.color}`, color: u.color, fontFamily: "'DM Mono', monospace", whiteSpace: 'nowrap' }}>{u.tag}</span>
      <span style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', color: hovered ? 'var(--accent)' : 'var(--text)', transition: 'color 0.2s', flex: 1 }}>{u.title}</span>
      <span style={{ color: 'var(--muted)', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>→</span>
    </div>
  );
}
