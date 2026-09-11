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
      title: "Clause 1 — Where It All Begins",
      category: "marriage",
      description: "The legal pin drop — the official starting point your whole marriage is mapped from.",
      content:
        "Every love story has a setting — and in legal terms, Clause 1 of your Nikahnama is exactly that. It's the official starting point, the pin your entire marriage is mapped from. It grounds your commitment in reality, aligns your documents, and protects your rights, now and for the future.\n" +
        "What it covers: Ward/Town/City, Union Council, Tehsil/Thana, District, Date of Marriage, and the name of the Nikah Registrar.\n" +
        "It's your legal location tag — with no Clause 1, there's no official record and no proof your marriage even happened. From CNICs to passports, everything traces back here, and courts, councils, and embassies all need it to do anything. Without it, your case is basically a ghost file.\n" +
        "It also protects your future kids' legal identity, nationality, and rights, and it's your answer if anyone ever tries to claim the marriage never existed. In a world of digital documents and red tape, this one line keeps your marriage valid, visible, and very real.\n" +
        "This clause also identifies exactly which Nikah Registrar and Union Council were responsible for officiating and registering your marriage — proving your marriage is valid and officially recognised under the Muslim Family Laws Ordinance, 1961, and securing your marital status for inheritance, pension, or other legal claims later on.\n" +
        "Marriage isn't just an emotional bond — it's a legal relationship that deserves care, clarity, and consent at every step. Clause 1 may feel like a formality, but it's one of the first bricks in the legal house you're building together. Make it count.",
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

      {filteredClauses.length === 0 && (
        <p className="clauses-empty">More clauses coming soon — check back shortly.</p>
      )}

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
