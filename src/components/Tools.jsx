import React, { useState } from 'react';

const tools = [
  { icon: '🤖', name: 'ChatGPT', score: '9.4', desc: "OpenAI's flagship conversational AI. The industry benchmark for natural language understanding, code generation, and creative tasks. Supports GPT-4o with vision and voice." },
  { icon: '💎', name: 'Google Gemini', score: '9.1', desc: "Google DeepMind's multimodal powerhouse. Exceptional at integrating real-time search, document understanding, and long-context tasks with 1M+ token windows." },
  { icon: '🧠', name: 'Claude', score: '9.2', desc: "Anthropic's constitutional AI model. Best-in-class for nuanced writing, complex reasoning, and safety-aligned outputs. Claude 4 leads in extended document analysis." },
  { icon: '🎨', name: 'Midjourney', score: '9.0', desc: 'The gold standard for AI image generation. Version 7 brings unprecedented structural control, photorealism, and a new web-based interface with editing workflows.' },
  { icon: '💻', name: 'GitHub Copilot', score: '8.8', desc: "The developer's AI companion. Deeply integrated into VS Code and JetBrains IDEs, it now offers multi-file context, inline chat, and code review automation." },
  { icon: '🔍', name: 'Perplexity AI', score: '8.5', desc: 'AI-powered research engine that combines web search with LLM synthesis. Exceptional for technical research, literature reviews, and fact-grounded answers with citations.' },
];

export default function Tools() {
  return (
    <section id="tools" style={{ padding: '100px 60px', background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'DM Mono', monospace" }}>
        Tool Directory
        <span style={{ flex: '0 0 40px', height: '1px', background: 'var(--accent2)', display: 'block' }} />
      </div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '2px', lineHeight: 1, marginBottom: '60px' }}>
        Essential AI Tools
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
        {tools.map(tool => <ToolCard key={tool.name} tool={tool} />)}
      </div>
    </section>
  );
}

function ToolCard({ tool }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="hoverable"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1c1c28' : 'var(--card)',
        padding: '32px',
        border: '1px solid var(--border)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'background 0.3s, transform 0.3s',
        position: 'relative',
      }}
    >
      <span style={{ fontSize: '32px', marginBottom: '20px', display: 'block', filter: hovered ? 'grayscale(0)' : 'grayscale(1)', transition: 'filter 0.3s' }}>
        {tool.icon}
      </span>
      <div style={{ position: 'absolute', top: '32px', right: '32px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: 'var(--accent)' }}>
        {tool.score}<span style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: "'DM Mono', monospace" }}>/10</span>
      </div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', letterSpacing: '2px', marginBottom: '8px' }}>{tool.name}</div>
      <p style={{ fontSize: '12px', lineHeight: 1.7, color: 'var(--muted)', fontFamily: "'DM Mono', monospace" }}>{tool.desc}</p>
    </div>
  );
}
