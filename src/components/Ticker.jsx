import React from 'react';

const items = [
  'ChatGPT-5 Rumors', 'Gemini Ultra 2.0 Released', 'Claude 4 Benchmark Tests',
  'Midjourney v7 Preview', 'Sora vs. Kling Comparison', 'GitHub Copilot Update',
  'LLM Context Windows Grow', 'AI Code Assistants Showdown',
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div style={{
      background: 'var(--accent2)',
      padding: '12px 0', overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div style={{
        display: 'flex', gap: '60px',
        whiteSpace: 'nowrap',
        animation: 'ticker 30s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
            color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '20px',
            fontFamily: "'DM Mono', monospace",
          }}>
            {item}
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
