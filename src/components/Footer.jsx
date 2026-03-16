import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', padding: 'var(--space-xl) 0', borderTop: '1px solid var(--divider)' }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--space-md)'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--white)' }}>
          Kishan.
        </div>
        
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Built with React & ❤️
        </div>
      </div>
    </footer>
  );
}
