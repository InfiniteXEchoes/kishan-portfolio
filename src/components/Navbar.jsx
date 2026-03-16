import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(0,0,0,0.72)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
  };

  const innerStyles = {
    maxWidth: '980px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 var(--space-md)',
  };

  const linksStyles = {
    display: 'flex',
    gap: 'var(--space-md)',
  };

  const activeColor = 'var(--white)';
  const inactiveColor = 'var(--text-primary)';

  return (
    <nav style={navStyles}>
      <div style={innerStyles}>
        {/* Logo */}
        <Link to="/" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em' }}>
          Kishan.
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
          {[
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Experience', path: '/experience' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="nav-link"
              style={{
                color: location.pathname === link.path ? activeColor : inactiveColor,
                fontWeight: location.pathname === link.path ? 500 : 400
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="desktop-cta">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '6px 16px', fontSize: '14px', borderRadius: '980px', textDecoration: 'none' }}>
            Hire Me
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', display: 'none' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute',
            top: '48px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-primary)',
            padding: 'var(--space-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm)',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>
             {[
               { name: 'About', path: '/about' },
               { name: 'Projects', path: '/projects' },
               { name: 'Experience', path: '/experience' },
               { name: 'Contact', path: '/contact' },
             ].map((link) => (
               <Link
                 key={link.name}
                 to={link.path}
                 className="nav-link"
                 style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
               >
                 {link.name}
               </Link>
             ))}
             <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)', textAlign: 'center' }}>
               Hire Me
             </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
