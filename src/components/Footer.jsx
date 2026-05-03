import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
        Designed & Built by <span style={{ color: 'var(--accent)' }}>Abdulbaki Salawu</span>
        {' · '}
        Deployed on <span style={{ color: 'var(--accent2)' }}>Azure Static Web Apps</span>
      </p>
    </footer>
  )
}
