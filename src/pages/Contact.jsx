import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Github, Linkedin, Twitter, Dribbble, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-page section-dark" style={{ minHeight: 'calc(100vh - 48px - 80px)', display: 'flex', alignItems: 'center' }}>
      <style>{`
        .social-link {
          color: var(--text-secondary);
          transition: transform 0.2s ease, color 0.2s ease;
          display: inline-flex;
        }
        .social-link:hover {
          transform: translateY(-4px);
        }
      `}</style>
      <AnimatedSection className="container" style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
        
        <h2 className="h2" style={{ marginBottom: 'var(--space-md)' }}>Say Hello.</h2>
        <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-2xl)' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <div className="label" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>EMAIL</div>
          <a href="mailto:hello@example.com" style={{ 
            color: 'var(--white)', 
            fontSize: '32px', 
            textDecoration: 'none', 
            fontWeight: 600, 
            letterSpacing: '-0.02em', 
            transition: 'color 0.2s' 
          }} onMouseOver={e => e.currentTarget.style.color='var(--accent)'} onMouseOut={e => e.currentTarget.style.color='var(--white)'}>
            hello@example.com
          </a>
        </div>

        <div className="label" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>SOCIAL PROFILES</div>
        <div style={{ display: 'flex', gap: 'var(--space-xl)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="social-link" onMouseOver={e => e.currentTarget.style.color='var(--white)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <Github size={32} />
          </a>
          <a href="#" className="social-link" onMouseOver={e => e.currentTarget.style.color='#E1306C'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <Instagram size={32} />
          </a>
          <a href="#" className="social-link" onMouseOver={e => e.currentTarget.style.color='var(--accent)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <Linkedin size={32} />
          </a>
          <a href="#" className="social-link" onMouseOver={e => e.currentTarget.style.color='var(--white)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <Twitter size={32} />
          </a>
          <a href="#" className="social-link" onMouseOver={e => e.currentTarget.style.color='#ea4c89'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
            <Dribbble size={32} />
          </a>
        </div>

      </AnimatedSection>
    </div>
  );
}
