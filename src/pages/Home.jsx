import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const projects = [
    { id: 1, title: 'E-Commerce Platform', tech: ['React', 'Node.js', 'Stripe'], desc: 'A full-stack e-commerce solution with real-time inventory and seamless checkout.' },
    { id: 2, title: 'Task Manager App', tech: ['Swift', 'CoreData'], desc: 'Native iOS application for beautifully tracking daily habits and project milestones.' },
    { id: 3, title: 'AI Essay Grader', tech: ['Next.js', 'OpenAI API'], desc: 'An ambitious open-source AI tool helping students get instant feedback on writing.' },
  ];

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Swift', 'Figma', 'Git', 'Docker'];

  return (
    <div className="home-page">
      <style>{`
        .hero-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(41,151,255,0.15) 0%, rgba(0,0,0,0) 70%);
          z-index: 0;
          pointer-events: none;
          animation: pulse 8s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }

        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          border-top: 1px solid var(--divider);
          border-bottom: 1px solid var(--divider);
          padding: var(--space-md) 0;
          background-color: var(--bg-primary);
        }

        .marquee-content {
          display: inline-block;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Scrolls half because we duplicate content */
        }

        .hero-text-content {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* Hero Section */}
      <section className="section-dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-orb"></div>
        <AnimatedSection className="container" style={{ textAlign: 'center' }}>
          <div className="hero-text-content">
            <div className="label" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              AVAILABLE FOR INTERNSHIPS & FREELANCE
            </div>
            <h1 className="h1" style={{ marginBottom: 'var(--space-md)' }}>
              I build things<br />for the web & mobile.
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-xl) auto' }}>
              CS student. Full-stack developer. I craft fast, beautiful digital experiences using React, Node, and Swift.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center' }}>
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <a href="#" className="btn btn-ghost">Download CV</a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Projects */}
      <section className="section-light">
        <AnimatedSection className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <div className="label" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xs)' }}>SELECTED WORK</div>
            <h2 className="h2">Projects that ship.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
            {projects.map((proj) => (
              <div key={proj.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Mockup Image Area */}
                <div style={{ height: '220px', backgroundColor: '#2C2C2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>[ Project Mockup ]</div>
                </div>
                
                <div style={{ padding: 'var(--space-md)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="h3" style={{ marginBottom: 'var(--space-xs)' }}>{proj.title}</h3>
                  <div style={{ display: 'flex', gap: 'var(--space-xs)', marginBottom: 'var(--space-sm)', flexWrap: 'wrap' }}>
                    {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', flex: 1 }}>
                    {proj.desc}
                  </p>
                  <Link to="/projects" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                    View Project &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Marquee */}
      <section style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="marquee-container">
           {/* Duplicate array for seamless looping */}
          <div className="marquee-content h3" style={{ color: 'var(--white)', opacity: 0.8 }}>
             {[...skills, ...skills, ...skills].map((skill, index) => (
               <React.Fragment key={index}>
                 <span style={{ margin: '0 var(--space-md)' }}>{skill}</span>
                 <span style={{ color: 'var(--text-secondary)' }}>•</span>
               </React.Fragment>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-dark" style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
        <AnimatedSection className="container">
          <h2 className="h2" style={{ marginBottom: 'var(--space-lg)' }}>Let's build something great.</h2>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Get in Touch
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
