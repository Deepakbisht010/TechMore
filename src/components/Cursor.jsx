import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px';
        ringRef.current.style.top = e.clientY + 'px';
      }
    };

    const growCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '20px';
        cursorRef.current.style.height = '20px';
      }
    };
    const shrinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '12px';
        cursorRef.current.style.height = '12px';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .hoverable').forEach(el => {
      el.addEventListener('mouseenter', growCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{
        width: '12px', height: '12px',
        background: 'var(--accent)',
        borderRadius: '50%',
        position: 'fixed', top: 0, left: 0,
        pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%,-50%)',
        transition: 'width 0.2s, height 0.2s',
        mixBlendMode: 'difference',
      }} />
      <div ref={ringRef} style={{
        width: '36px', height: '36px',
        border: '1px solid var(--accent)',
        borderRadius: '50%',
        position: 'fixed', top: 0, left: 0,
        pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%,-50%)',
        transition: 'left 0.15s ease, top 0.15s ease',
        opacity: 0.5,
      }} />
    </>
  );
}
