import React, { useState } from 'react'
import './ClausesSection.css'
import Reveal from './Reveal'

const ClausesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'marriage', name: 'Marriage' },
    { id: 'rights', name: 'Rights' }
  ]

  const clauses = [
    {
      id: 1,
      title: "Example Clause",
      category: "marriage",
      description: "Short explanation of the clause.",
      content: "Full content of the clause.\nMultiple lines supported.",
      importance: "High",
      instaPost: ""
    }
  ]

  const filteredClauses = activeCategory === 'all' ? clauses : clauses.filter(c => c.category === activeCategory)

  return (
    <section className="section clauses-section">
      <span className="section-kicker">Know Before You Sign</span>
      <h2 className="section-title">Nikahnama Clauses Explained</h2>
      <div className="ornament">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" />
        </svg>
      </div>

      <div className="categories-filter">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={activeCategory === cat.id ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="clauses-grid">
        {filteredClauses.map((clause, i) => (
          <Reveal key={clause.id} delay={(i % 3) * 0.1}>
            <div className="clause-card">
              <div className="clause-header">
                <h3>{clause.title}</h3>
                <span className={`importance-badge ${clause.importance.toLowerCase()}`}>
                  {clause.importance} Importance
                </span>
              </div>
              <p className="clause-description">{clause.description}</p>
              <div className="clause-content">
                {clause.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
              {clause.instaPost && (
                <div className="clause-footer">
                  <a href={clause.instaPost} target="_blank" rel="noopener noreferrer">📱 View on Instagram</a>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="clauses-notes">
          <div className="note-card">
            <h4>💡 Important Notes</h4>
            <ul>
              <li>All clauses must comply with Islamic principles</li>
              <li>Consult with a knowledgeable scholar before adding custom clauses</li>
              <li>Ensure both parties fully understand each clause</li>
              <li>Keep a copy of your signed Nikahnama safe</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default ClausesSection
