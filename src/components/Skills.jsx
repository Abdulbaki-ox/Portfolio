import React from 'react'
import SectionTitle from './SectionTitle'

const categories = [
  {
    label: 'Languages & Scripting',
    items: ['Python (Basic)', 'Bash', 'SQL'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    label: 'Cloud & Infrastructure',
    items: ['Azure CLI', 'Azure Resource Provisioning', 'AWS CLI'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Git', 'Linux', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    label: 'Payment & Standards',
    items: ['ISO 8583', 'Postilion Switch', 'PCI-DSS', 'ATM/POS Operations'],
  },
  {
    label: 'Engineering Concepts',
    items: ['Incident Management', 'System Monitoring', 'Distributed Systems (Basic)', 'Observability'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionTitle number="03" title="Skills" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem', marginTop: '3rem',
      }}>
        {categories.map(cat => (
          <div key={cat.label} style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '4px', padding: '1.5rem',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <h4 style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              color: 'var(--accent)', letterSpacing: '0.12em',
              marginBottom: '1rem',
            }}>
              {cat.label.toUpperCase()}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.items.map(item => (
                <span key={item} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                  color: 'var(--text)', background: 'rgba(255,255,255,0.04)',
                  padding: '0.3rem 0.7rem', borderRadius: '2px',
                  border: '1px solid var(--border)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
