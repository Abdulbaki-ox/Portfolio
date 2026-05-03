import React, { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
        color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.05em',
      }}>
        {'<ABS />'}
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
            color: 'var(--text-muted)', textDecoration: 'none',
            letterSpacing: '0.08em', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {l}
          </a>
        ))}
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', background: 'none', border: 'none',
          color: 'var(--text)', cursor: 'pointer', fontSize: '1.3rem',
        }}
        className="hamburger"
      >☰</button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0,
          background: 'var(--bg-card)', borderBottom: '1px solid var(--border)',
          padding: '1rem',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.75rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                color: 'var(--text-muted)', textDecoration: 'none',
              }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
