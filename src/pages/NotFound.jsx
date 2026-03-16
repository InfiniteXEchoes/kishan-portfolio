import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function NotFound() {
  return (
    <div className="not-found-page section-dark" style={{ minHeight: 'calc(100vh - 48px - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatedSection className="container" style={{ textAlign: 'center' }}>
        <div className="label" style={{ color: 'var(--accent)', marginBottom: 'var(--space-sm)' }}>
          404 ERROR
        </div>
        <h1 className="h1" style={{ marginBottom: 'var(--space-md)' }}>
          Page not found.
        </h1>
        <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-xl) auto' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </AnimatedSection>
    </div>
  );
}
