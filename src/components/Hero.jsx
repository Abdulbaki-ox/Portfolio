import React, { useEffect, useState } from 'react'

const roles = [
  'Application Support Engineer',
  'SRE Practitioner',
  'DevOps Engineer',
  'Payment Systems Specialist',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    let i = displayed.length

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '6rem 2rem 4rem',
      maxWidth: '1100px', margin: '0 auto',
      position: 'relative',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,160,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,160,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Status badge */}
      <div className="fade-up fade-up-1" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '1.5rem', zIndex: 1,
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--accent)', display: 'inline-block',
          boxShadow: '0 0 0 0 var(--accent)',
          animation: 'pulse-ring 1.8s ease-out infinite',
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          color: 'var(--accent)', letterSpacing: '0.12em',
          background: 'rgba(0,229,160,0.06)', padding: '0.25rem 0.75rem',
          border: '1px solid rgba(0,229,160,0.2)', borderRadius: '2px',
        }}>
          OPEN TO OPPORTUNITIES
        </span>
      </div>

      <h1 className="fade-up fade-up-2" style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
        lineHeight: 1.05, letterSpacing: '-0.02em',
        zIndex: 1, marginBottom: '0.3rem',
      }}>
        Abdulbaki
      </h1>
      <h1 className="fade-up fade-up-3" style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
        lineHeight: 1.05, letterSpacing: '-0.02em',
        zIndex: 1,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundImage: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        backgroundClip: 'text',
        marginBottom: '1.5rem',
      }}>
        Salawu.
      </h1>

      <div className="fade-up fade-up-4" style={{
        fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
        color: 'var(--text-muted)', zIndex: 1, marginBottom: '2rem',
        minHeight: '1.8em',
      }}>
        <span style={{ color: 'var(--accent2)' }}>$ </span>
        {displayed}
        <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent)' }}>▊</span>
      </div>

      <p className="fade-up fade-up-5" style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.15rem)',
        color: 'var(--text-muted)', maxWidth: '560px', zIndex: 1,
        marginBottom: '3rem', lineHeight: 1.7,
      }}>
        SRE-focused engineer at <strong style={{ color: 'var(--text)' }}>Access Bank</strong>, specialising in
        high-availability payment systems, ISO 8583, and Postilion switch operations.
        Building expertise in cloud-native DevOps on Azure.
      </p>

      <div className="fade-up fade-up-6" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', zIndex: 1 }}>
        <a href="#contact" style={btnStyle('solid')}>Get in Touch</a>
        <a href="#experience" style={btnStyle('outline')}>View My Work</a>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />
      </div>
    </section>
  )
}

function btnStyle(variant) {
  const base = {
    padding: '0.8rem 2rem', fontFamily: 'var(--font-mono)',
    fontSize: '0.82rem', letterSpacing: '0.1em',
    textDecoration: 'none', borderRadius: '2px', transition: 'all 0.2s',
    display: 'inline-block',
  }
  return variant === 'solid'
    ? { ...base, background: 'var(--accent)', color: 'var(--bg)', border: '1px solid var(--accent)' }
    : { ...base, background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)' }
}
