import React from 'react'

export default function SectionTitle({ number, title, center = false }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left' }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        color: 'var(--accent)', letterSpacing: '0.15em',
      }}>{number}.</span>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
        letterSpacing: '-0.02em',
        display: 'inline', marginLeft: '0.6rem',
      }}>{title}</h2>
      <div style={{
        height: '1px', marginTop: '0.75rem',
        background: 'linear-gradient(to right, var(--accent), transparent)',
        maxWidth: center ? '120px' : '300px',
        margin: center ? '0.75rem auto 0' : '0.75rem 0 0',
      }} />
    </div>
  )
}
