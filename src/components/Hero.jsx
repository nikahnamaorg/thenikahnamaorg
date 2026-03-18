import React from 'react'
import './Hero.css'

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>The NikahNama Org</h1>
          <p className="hero-subtitle">
            A youth-led initiative focused on simplifying the clauses of the Nikah Nama and raising awareness about the traditions, rituals, and cultural practices surrounding it, enabling young people to make informed and responsible decisions.
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
        
        <div className="hero-features">
          <div className="feature-card" onClick={() => onNavigate('clauses')}>
            <div className="feature-icon">📜</div>
            <h3>Clause Library</h3>
            <p>Understand important nikahnama clauses in simple language</p>
          </div>
          
          <div className="feature-card" onClick={() => onNavigate('team')}>
            <div className="feature-icon">👥</div>
            <h3> Team</h3>
            <p>Meet our dedicated team working for your awareness</p>
          </div>
          
          <div className="feature-card" onClick={() => onNavigate('queries')}>
            <div className="feature-icon">💬</div>
            <h3>Get Answers</h3>
            <p>Ask questions and get clarifications about your rights</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero