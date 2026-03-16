import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'Web', tech: ['React', 'Node.js', 'Stripe'], desc: 'A full-stack e-commerce solution with real-time inventory and seamless checkout.', github: '#', link: '#' },
    { id: 2, title: 'Task Manager App', category: 'App', tech: ['Swift', 'CoreData'], desc: 'Native iOS application for beautifully tracking daily habits and project milestones.', github: '#', link: '#' },
    { id: 3, title: 'AI Essay Grader', category: 'Open Source', tech: ['Next.js', 'OpenAI API'], desc: 'An ambitious open-source AI tool helping students get instant feedback on writing.', github: '#', link: '#' },
    { id: 4, title: 'Portfolio Template', category: 'Web', tech: ['React', 'CSS'], desc: 'A sleek Apple-inspired portfolio template built for computer science students.', github: '#', link: '#' },
    { id: 5, title: 'Fitness Tracker', category: 'App', tech: ['React Native', 'Firebase'], desc: 'Cross-platform app for logging workouts and tracking progress over time.', github: '#', link: '#' },
    { id: 6, title: 'React Router Animations', category: 'Open Source', tech: ['React', 'CSS'], desc: 'A lightweight library for adding page transitions to React Router applications.', github: '#', link: '#' },
  ];

  const categories = ['All', 'Web', 'App', 'Open Source'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <style>{`
        .filter-tab {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 17px;
          cursor: pointer;
          padding: 8px 16px;
          transition: color 0.2s ease;
          position: relative;
        }
        .filter-tab:hover {
          color: var(--white);
        }
        .filter-tab.active {
          color: var(--white);
          font-weight: 500;
        }
        .filter-tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background-color: var(--accent);
          border-radius: 2px;
        }
        
        .masonry-grid {
          column-count: 2;
          column-gap: var(--space-xl);
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: var(--space-xl);
        }

        @media (max-width: 768px) {
          .masonry-grid {
            column-count: 1;
          }
        }

        .project-card-large {
          position: relative;
          border-radius: var(--card-radius);
          overflow: hidden;
          background-color: #2C2C2E;
          aspect-ratio: 4/5;
          display: flex;
          align-items: flex-end;
        }

        .project-img-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.9) 100%);
          z-index: 1;
          transition: background 0.3s ease;
        }

        .project-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #3A3A3C; /* Placeholder for image */
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .project-card-large:hover .project-placeholder {
          transform: scale(1.03);
        }
        .project-card-large:hover .project-img-bg {
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.95) 100%);
        }

        .project-content {
          position: relative;
          z-index: 2;
          padding: var(--space-md);
          width: 100%;
        }

        .icon-link {
          color: var(--text-primary);
          transition: color 0.2s;
        }
        .icon-link:hover {
          color: var(--accent);
        }
      `}</style>

      {/* Hero */}
      <section className="section-dark" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <AnimatedSection className="container">
          <h1 className="h1" style={{ marginBottom: 'var(--space-md)', textAlign: 'center' }}>My Work.</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Grid */}
      <section className="section-dark" style={{ paddingTop: 0 }}>
        <AnimatedSection className="container">
          <div className="masonry-grid">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="masonry-item">
                <div className="project-card-large card">
                  <div className="project-placeholder"></div>
                  <div className="project-img-bg"></div>
                  <div className="project-content">
                    <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 'var(--space-xs)' }}>{proj.title}</h3>
                    <div style={{ display: 'flex', gap: 'var(--space-xs)', marginBottom: 'var(--space-sm)', flexWrap: 'wrap' }}>
                      {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                      {proj.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                      <a href={proj.github} className="icon-link"><Github size={20} /></a>
                      <a href={proj.link} className="icon-link"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
