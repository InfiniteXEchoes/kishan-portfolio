import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Briefcase, Star, Github } from 'lucide-react';

export default function Experience() {
  const experiences = [
    { id: 1, role: 'Software Engineering Intern', company: 'Apple', date: 'May 2024 — Aug 2024', points: ['Optimized core rendering pipeline, improving frame rates by 15%.', 'Built internal developer tools using Swift and SwiftUI.', 'Collaborated cross-functionally with design and QA teams.'], tech: ['Swift', 'Objective-C', 'XCode'] },
    { id: 2, role: 'Full-Stack Freelancer', company: 'Self-Employed', date: 'Jan 2023 — Present', points: ['Designed and developed 5+ custom web applications for local businesses.', 'Integrated Stripe for payments and Auth0 for secure authentication.', 'Maintained 100% client satisfaction and project delivery rates.'], tech: ['React', 'Node.js', 'PostgreSQL'] },
    { id: 3, role: 'Frontend Developer Intern', company: 'TechNova', date: 'Jun 2022 — Dec 2022', points: ['Migrated legacy Angular dashboard to React and Next.js.', 'Implemented responsive component library utilizing styled-components.', 'Wrote comprehensive unit and E2E tests.'], tech: ['React', 'TypeScript', 'Jest'] },
  ];

  const repos = [
    { id: 1, name: 'react-router-animations', stars: '1.2k', desc: 'Lightweight library for adding page transitions and scroll reveals to React Router.', lang: 'TypeScript', lgColor: '#3178c6' },
    { id: 2, name: 'swift-data-sync', stars: '840', desc: 'CoreData wrapper that automatically syncs local data with Firebase backend.', lang: 'Swift', lgColor: '#F05138' },
    { id: 3, name: 'minimal-portfolio-cli', stars: '450', desc: 'CLI tool to scaffold an Apple-inspired minimal developer portfolio in seconds.', lang: 'JavaScript', lgColor: '#f1e05a' },
  ];

  return (
    <div className="experience-page">
      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background-color: var(--divider);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
        }
        .timeline-item.left { left: 0; }
        .timeline-item.right { left: 50%; }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 48px;
          height: 48px;
          right: -24px;
          background-color: var(--bg-primary);
          border: 1px solid var(--divider);
          top: 0;
          border-radius: 50%;
          z-index: 1;
        }
        .timeline-item.right::after {
          left: -24px;
        }
        
        .timeline-icon {
          position: absolute;
          top: 12px;
          right: -12px;
          z-index: 2;
          color: var(--text-secondary);
        }
        .timeline-item.right .timeline-icon {
          left: -12px;
        }

        .timeline-content {
          padding: var(--space-md);
          background-color: var(--bg-card);
          border-radius: var(--card-radius);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }

        @media screen and (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 0;
            margin-bottom: var(--space-lg);
          }
          .timeline-item.right { left: 0; }
          .timeline-item.left::after, .timeline-item.right::after {
            left: 7px;
          }
          .timeline-item.left .timeline-icon, .timeline-item.right .timeline-icon {
            left: 19px;
          }
        }
      `}</style>

      {/* Hero & Timeline */}
      <section className="section-dark">
        <AnimatedSection className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
             <h1 className="h1" style={{ marginBottom: 'var(--space-md)' }}>Experience.</h1>
             <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
               A timeline of my professional journey, internships, and freelance adventures.
             </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
                  <Briefcase size={24} className="timeline-icon" />
                  <AnimatedSection>
                    <div className="timeline-content">
                      <h3 className="h3" style={{ marginBottom: 'var(--space-xs)' }}>{exp.role}</h3>
                      <div className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                        <span style={{ color: 'var(--white)' }}>{exp.company}</span> &nbsp;•&nbsp; {exp.date}
                      </div>
                      <ul style={{ paddingLeft: 'var(--space-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                        {exp.points.map((p, i) => <li key={i} style={{ marginBottom: '8px' }}>{p}</li>)}
                      </ul>
                      <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                        {exp.tech.map(t => <span key={t} className="tag tag-dark">{t}</span>)}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* Open Source */}
      <section className="section-light">
        <AnimatedSection className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <h2 className="h2" style={{ marginBottom: 'var(--space-sm)' }}>Open Source.</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>Giving back to the developer community.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
            {repos.map(repo => (
              <div key={repo.id} className="card" style={{ padding: 'var(--space-md)', backgroundColor: 'var(--white)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                    <Github size={20} />
                    <h3 className="h3" style={{ fontSize: '20px' }}>{repo.name}</h3>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}>
                    <Star size={16} /> <span className="caption">{repo.stars}</span>
                  </div>
                </div>
                <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', flex: 1 }}>
                  {repo.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: repo.lgColor }}></div>
                  <span className="caption" style={{ color: 'var(--text-secondary)' }}>{repo.lang}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
