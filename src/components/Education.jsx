import React from 'react'
import SectionTitle from './SectionTitle'

const certs = [
  { name: 'ITIL® V4 Foundation', body: 'IT Service Management', year: '2024', icon: '🏅' },
  { name: 'CBCI', body: 'Business Continuity Planning & Crisis Response — BCI Global Best Practices, London', year: '2026', icon: '🎖️' },
  { name: '7 Habits of Highly Effective People', body: 'FranklinCovey, Lagos', year: '2024', icon: '📘' },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionTitle number="04" title="Education & Certs" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        {/* Degree */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '4px', padding: '2rem',
          gridColumn: '1 / -1',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent2)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em',
              color: 'var(--accent2)', background: 'rgba(0,102,255,0.08)',
              padding: '0.2rem 0.6rem', border: '1px solid rgba(0,102,255,0.2)',
              borderRadius: '2px', display: 'inline-block', marginBottom: '0.75rem',
            }}>DEGREE</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.4rem' }}>
              B.Eng Biomedical Engineering
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              University of Ilorin · 2016 – 2022
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 700 }}>4.27</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>GPA / 5.0 · 2nd Class Upper</div>
          </div>
        </div>

        {/* Certs */}
        {certs.map(c => (
          <div key={c.name} style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '4px', padding: '1.5rem',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{c.icon}</div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.4rem' }}>{c.name}</h4>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{c.body}</p>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--accent)', background: 'rgba(0,229,160,0.06)',
              padding: '0.2rem 0.6rem', border: '1px solid rgba(0,229,160,0.2)', borderRadius: '2px',
            }}>{c.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
