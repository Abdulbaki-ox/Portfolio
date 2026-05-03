import React from 'react'
import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 2rem', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
      <SectionTitle number="05" title="Get In Touch" center />

      <p style={{
        color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8,
        marginTop: '2rem', marginBottom: '2.5rem',
      }}>
        Currently open to DevOps and SRE opportunities. Whether you have a role,
        a project, or just want to connect — my inbox is open.
      </p>

      <a href="mailto:salawuabdulbaki@gmail.com" style={{
        display: 'inline-block',
        padding: '1rem 2.5rem',
        fontFamily: 'var(--font-mono)', fontSize: '0.88rem',
        letterSpacing: '0.12em',
        color: 'var(--accent)', border: '1px solid var(--accent)',
        borderRadius: '2px', textDecoration: 'none',
        transition: 'all 0.2s',
        background: 'transparent',
      }}
      onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)' }}
      onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
      >
        SAY HELLO →
      </a>

      <div style={{
        display: 'flex', justifyContent: 'center', gap: '2rem',
        marginTop: '3rem', flexWrap: 'wrap',
      }}>
        {[
          { label: 'Email', value: 'salawuabdulbaki@gmail.com', href: 'mailto:salawuabdulbaki@gmail.com' },
          { label: 'Phone', value: '+234 906 892 4442', href: 'tel:+2349068924442' },
          { label: 'Location', value: 'Lagos, Nigeria', href: null },
        ].map(({ label, value, href }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>{label}</div>
            {href ? (
              <a href={href} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{value}</a>
            ) : (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
