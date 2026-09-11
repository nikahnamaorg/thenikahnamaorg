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
        <div className="hero-inner">
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

          <div className="hero-illustration">
            <img
              src="/images/hero-illustration.jpeg"
              alt="Illustration of a woman tangled in red tape being cut free, with the scales of justice behind her"
            />
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-features">
          <Reveal delay={0}>
            <div className="feature-card" onClick={() => onNavigate('clauses')}>
              <h3>Clause Library</h3>
              <p>Understand important nikahnama clauses in simple language</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="feature-card feature-card-inverse" onClick={() => onNavigate('team')}>
              <h3>Team</h3>
              <p>Meet our dedicated team working for your awareness</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="feature-card" onClick={() => onNavigate('queries')}>
              <h3>Get Answers</h3>
              <p>Ask questions and get clarifications about your rights</p>
            </div>
          </Reveal>
        </div>

        <div className="about-nikahnama">
          <Reveal className="about-nikahnama-text" as="div">
            <span className="section-kicker">Why It Matters</span>
            <h2>What Is a Nikahnama?</h2>
            <p>
              The Nikahnama isn't just a formality signed on your wedding day — it's a legal
              contract, recognized by Pakistan's courts, that spells out real rights and
              responsibilities for both parties.
            </p>
            <p>
              Yet most people sign it without ever reading it closely, let alone understanding
              every clause. That's the gap we're here to close: breaking each clause down in
              plain language, so no one enters a marriage without knowing exactly what they
              agreed to.
            </p>
            <p>
              Pakistani courts have said this plainly — the Nikahnama is a binding contract, not
              a symbolic paper. Knowing what's in it, before you sign, is how you protect your
              own rights from day one.
            </p>
            <button className="btn-secondary" onClick={() => onNavigate('clauses')}>
              Read the Clauses
            </button>
          </Reveal>
          <Reveal delay={0.15} className="about-nikahnama-image" as="div">
            <img
              src="/images/nikahnama-hero.jpeg"
              alt="Marble sculpture of a woman carving her way out of a clenched fist"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
