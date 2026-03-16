import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Coffee, Code, Zap, BookOpen, Terminal, Smartphone, Database, PenTool, Layout, Server, Settings, Figma, Github, ChevronDown } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Frontend', items: [{ name: 'React', level: 'Proficient', icon: <Layout size={24}/> }, { name: 'Next.js', level: 'Proficient', icon: <Terminal size={24}/> }, { name: 'TypeScript', level: 'Proficient', icon: <Code size={24}/> }] },
    { category: 'Backend', items: [{ name: 'Node.js', level: 'Proficient', icon: <Server size={24}/> }, { name: 'PostgreSQL', level: 'Familiar', icon: <Database size={24}/> }, { name: 'GraphQL', level: 'Familiar', icon: <Zap size={24}/> }] },
    { category: 'Mobile', items: [{ name: 'Swift (iOS)', level: 'Proficient', icon: <Smartphone size={24}/> }, { name: 'React Native', level: 'Familiar', icon: <Smartphone size={24}/> }] },
    { category: 'Tools', items: [{ name: 'Figma', level: 'Proficient', icon: <Figma size={24}/> }, { name: 'Git', level: 'Proficient', icon: <Github size={24}/> }, { name: 'Docker', level: 'Familiar', icon: <Settings size={24}/> }] },
  ];

  const values = [
    { title: 'Clean Code', icon: <Code size={32} color="var(--accent)"/>, desc: 'Writing maintainable, scalable, and self-documenting code is my priority.' },
    { title: 'Ship Fast', icon: <Zap size={32} color="var(--accent)"/>, desc: 'I bias toward action. Build, measure, learn, and iterate rapidly.' },
    { title: 'Learn Always', icon: <BookOpen size={32} color="var(--accent)"/>, desc: 'Technology evolves fast. I stay curious and constantly expand my toolkit.' }
  ];

  return (
    <div className="about-page">
      <style>{`
        .headshot {
          background-color: #2C2C2E;
          border-radius: var(--card-radius);
          height: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          filter: grayscale(100%);
          transition: filter 0.4s ease, transform 0.4s ease;
        }
        .headshot:hover {
          filter: grayscale(0%);
          transform: scale(1.02);
        }
        .trait-row {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-sm);
          color: var(--text-secondary);
        }
        .grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-md);
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-md);
        }
        .hero-split {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--space-xl);
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-split {
             grid-template-columns: 1fr;
          }
        }
        @keyframes bounce-down {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-15px) translateX(-50%); }
          60% { transform: translateY(-7px) translateX(-50%); }
        }
      `}</style>

      {/* Hero */}
      <section className="section-dark" style={{ minHeight: 'calc(100vh - 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
        <AnimatedSection className="container hero-split">
          <div className="headshot">
            [ Portrait Placeholder ]
          </div>
          <div>
            <h2 className="h2" style={{ marginBottom: 'var(--space-md)' }}>Hey, I'm Kishan.</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
              I’m a senior CS student deeply passionate about bridging the gap between engineering and design. 
              I specialize in creating pixel-perfect web and mobile experiences.
            </p>
            <div className="traits">
              <div className="trait-row"><Coffee size={20} /> <span>Fueled by espresso</span></div>
              <div className="trait-row"><PenTool size={20} /> <span>Design-minded engineer</span></div>
              <div className="trait-row"><Zap size={20} /> <span>Obsessed with performance</span></div>
            </div>
          </div>
        </AnimatedSection>
        
        <div style={{ position: 'absolute', bottom: 'var(--space-xl)', left: '50%', color: 'var(--text-secondary)', animation: 'bounce-down 2s infinite', opacity: 0.6 }}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Skills */}
      <section className="section-light">
        <AnimatedSection className="container">
          <h2 className="h2" style={{ marginBottom: 'var(--space-xl)' }}>Technical Arsenal.</h2>
          <div className="grid-4">
            {skills.map((cat, idx) => (
              <div key={idx}>
                <h3 className="h3" style={{ marginBottom: 'var(--space-md)', fontSize: '20px' }}>{cat.category}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {cat.items.map((item, i) => (
                    <div key={i} className="card" style={{ padding: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', backgroundColor: 'var(--white)', color: 'var(--text-dark)' }}>
                      <div style={{ color: 'var(--text-secondary)' }}>{item.icon}</div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{item.name}</div>
                        <div className="caption" style={{ color: 'var(--text-secondary)' }}>{item.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Education */}
      <section className="section-dark">
        <AnimatedSection className="container">
          <h2 className="h2" style={{ marginBottom: 'var(--space-xl)' }}>Academics.</h2>
          <div className="card" style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
              <div>
                <h3 className="h3" style={{ color: 'var(--white)' }}>University of Technology</h3>
                <div className="body-large" style={{ color: 'var(--text-secondary)' }}>B.S. in Computer Science</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="body-large" style={{ color: 'var(--white)' }}>2021 — 2025</div>
                <div className="body-regular" style={{ color: 'var(--text-secondary)' }}>GPA: 3.9/4.0</div>
              </div>
            </div>
            <div className="divider" style={{ margin: 'var(--space-sm) 0' }}></div>
            <div>
              <div className="label" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>RELEVANT COURSEWORK</div>
              <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                {['Data Structures', 'Algorithms', 'Web Development', 'Mobile App Dev', 'Database Systems', 'Machine Learning'].map(c => (
                  <span key={c} className="tag tag-dark">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Values */}
      <section className="section-light">
        <AnimatedSection className="container">
          <h2 className="h2" style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>My Philosophy.</h2>
          <div className="grid-3">
            {values.map((v, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(41,151,255,0.1)', marginBottom: 'var(--space-md)' }}>
                  {v.icon}
                </div>
                <h3 className="h3" style={{ marginBottom: 'var(--space-sm)' }}>{v.title}</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
