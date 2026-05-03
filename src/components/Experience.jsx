import React, { useState } from 'react'
import SectionTitle from './SectionTitle'

const jobs = [
  {
    company: 'Access Bank Plc',
    role: 'Application Support Engineer',
    period: '2024 – Present',
    location: 'Lagos, Nigeria',
    tag: 'Current',
    bullets: [
      'Support and maintain critical payment systems ensuring high availability across ATM, POS, and card channels.',
      'Manage daily operations and stability of the Postilion payment switch for seamless transaction processing.',
      'Ensure compliance with PCI-DSS, ISO 8583, and other industry standards, safeguarding sensitive financial data.',
      'Analyse logs, metrics, and traces using monitoring tools to identify root causes and performance bottlenecks.',
      'Diagnose and resolve production issues using logs and SQL queries, improving system reliability.',
      'Collaborate with development teams to deploy fixes and enhancements, handling escalated transaction issues.',
    ],
  },
  {
    company: 'Bakangizo Pharmacy Ltd',
    role: 'Junior Software Engineer',
    period: 'Jan 2023 – Jan 2024',
    location: 'Abuja, Nigeria',
    tag: 'Previous',
    bullets: [
      'Maintained and debugged company website ensuring optimal performance.',
      'Resolved technical issues and improved system usability.',
      'Conducted user training sessions for internal staff.',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = jobs[active]

  return (
    <section id="experience" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionTitle number="02" title="Experience" />

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2rem', marginTop: '3rem' }}>
        {/* Tab list */}
        <div style={{ borderLeft: '1px solid var(--border)' }}>
          {jobs.map((j, i) => (
            <button key={j.company} onClick={() => setActive(i)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '0.9rem 1.25rem',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
              color: active === i ? 'var(--accent)' : 'var(--text-muted)',
              borderLeft: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              marginLeft: '-1px', transition: 'all 0.2s',
            }}>
              {j.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={active}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
              {job.role} <span style={{ color: 'var(--accent)' }}>@ {job.company}</span>
            </h3>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              background: job.tag === 'Current' ? 'rgba(0,229,160,0.1)' : 'rgba(255,255,255,0.05)',
              color: job.tag === 'Current' ? 'var(--accent)' : 'var(--text-muted)',
              padding: '0.2rem 0.6rem', border: '1px solid',
              borderColor: job.tag === 'Current' ? 'rgba(0,229,160,0.3)' : 'var(--border)',
              borderRadius: '2px',
            }}>{job.tag}</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {job.period} · {job.location}
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {job.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience > div > div:first-child { display: none !important; }
          #experience > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
