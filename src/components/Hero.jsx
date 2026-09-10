import React from 'react'
import './Hero.css'
import Reveal from './Reveal'

const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0l-3 6a3 3 0 0 0 6 0l-3-6Z" />
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" />
    <path d="M4 19.5V6.5" />
  </svg>
)

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.6 2.7-6.3 6-6.3s6 2.7 6 6.3" />
    <path d="M15.5 7.3a3 3 0 0 1 0 5.9M21 20c0-3-2-5.3-4.5-6" />
  </svg>
)

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
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
              <div className="feature-icon"><BookIcon /></div>
              <h3>Clause Library</h3>
              <p>Understand important nikahnama clauses in simple language</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="feature-card feature-card-inverse" onClick={() => onNavigate('team')}>
              <div className="feature-icon"><PeopleIcon /></div>
              <h3>Team</h3>
              <p>Meet our dedicated team working for your awareness</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="feature-card" onClick={() => onNavigate('queries')}>
              <div className="feature-icon"><ChatIcon /></div>
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
