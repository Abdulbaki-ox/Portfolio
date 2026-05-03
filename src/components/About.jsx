import React from 'react'
import SectionTitle from './SectionTitle'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '99.9%', label: 'Uptime Target' },
  { value: 'PCI-DSS', label: 'Compliance' },
  { value: 'ISO 8583', label: 'Messaging Expert' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionTitle number="01" title="About Me" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
            I'm an Application Support Engineer at <span style={{ color: 'var(--accent)' }}>Access Bank Plc</span> in Lagos,
            maintaining critical payment infrastructure that processes millions of transactions across ATM, POS, and card channels daily.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
            My background combines a B.Eng in Biomedical Engineering (2nd Class Upper, University of Ilorin)
            with hands-on experience in incident management, SQL troubleshooting, and system observability.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            I'm actively building DevOps expertise — focusing on automation, cloud-native systems on Azure,
            and the observability practices that keep high-availability systems healthy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {stats.map(({ value, label }) => (
            <div key={label} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '4px', padding: '1.5rem',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 700,
                color: 'var(--accent)', marginBottom: '0.3rem',
              }}>{value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
