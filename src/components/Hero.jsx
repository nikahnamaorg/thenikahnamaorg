import React from 'react'
import './Hero.css'
import Reveal from './Reveal'

const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0l-3 6a3 3 0 0 0 6 0l-3-6Z" />
  </svg>
)

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-text">
          <span className="section-kicker">A Youth-Led Initiative</span>
          <h1>The NikahNama Org</h1>
          <div className="ornament"><ScaleIcon /></div>
          <p className="hero-subtitle">
            Simplifying the clauses of the Nikah Nama and raising awareness about the traditions,
            rituals, and cultural practices surrounding it — enabling young people to make
            informed and responsible decisions.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => onNavigate('clauses')}
            >
              Explore Clauses
            </button>
            <button
              className="btn-secondary"
              onClick={() => onNavigate('queries')}
            >
              Ask Questions
            </button>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-features">
          <Reveal delay={0}>
            <div className="feature-card" onClick={() => onNavigate('clauses')}>
              <div className="feature-icon">📜</div>
              <h3>Clause Library</h3>
              <p>Understand important nikahnama clauses in simple language</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="feature-card feature-card-inverse" onClick={() => onNavigate('team')}>
              <div className="feature-icon">👥</div>
              <h3>Team</h3>
              <p>Meet our dedicated team working for your awareness</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="feature-card" onClick={() => onNavigate('queries')}>
              <div className="feature-icon">💬</div>
              <h3>Get Answers</h3>
              <p>Ask questions and get clarifications about your rights</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
