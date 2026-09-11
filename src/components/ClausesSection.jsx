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
    },
    {
      id: 2,
      title: "Clause 2 — Who Is Getting Married",
      category: "marriage",
      description: "The groom's identity on record — no ambiguity, just clear, verifiable facts.",
      content:
        "Clause 2 tells us exactly who is getting married. It covers the name of the bridegroom, the name of the bridegroom's father, and their respective residence.\n" +
        "This clause ensures there's no ambiguity — just clear, verifiable identities. It's what establishes the identity of the groom in the marriage record.\n" +
        "Why care? Identity and address matter because they confirm who the groom is and where he belongs. This information goes on record for legal use — passports, IDs, even court cases.\n" +
        "It also holds people accountable. No disappearing acts. It protects you now and in the future.\n" +
        "Clause 2 brings forward the groom, his father, and the roots he rises from. This isn't just a section — it's the soul of the Nikah, where every name carries its past, a sense of identity, and the values that define who he is.",
      importance: "Medium",
      instaPost: ""
    },
    {
      id: 3,
      title: "Clause 3 — Are You Even Old Enough?",
      category: "rights",
      description: "The groom's age and date of birth — the law's check that he was old enough to say yes.",
      content:
        "Lying about your age to look 'eligible' isn't just lying — it's your rights slipping away. Clause 3 isn't here for family guesswork. It wants facts. Because before he promises forever, the law asks: was he even old enough to say yes?\n" +
        "What it covers: the age of the bridegroom, and his date of birth.\n" +
        "Proof of age is non-negotiable — CNIC, B-form, or birth certificate.\n" +
        "The law is clear: 18+ is the minimum age for a groom, across Pakistan. The Federal Shariat Court confirmed in 2023 that 18+ is fully Sharia-compliant.\n" +
        "Clause 3 brings the law into your Nikah. It protects against child marriage and fake contracts — but only if you read it like your rights depend on it. Because they just might.\n" +
        "Skip Clause 3 and the whole Nikah can fall apart: no legal ID, no divorce, no property, no custody. It's not about لوگ کیا کہیں گے — it's about what the law will do when it really matters.",
      importance: "High",
      instaPost: ""
    },
    {
      id: 4,
      title: "Clause 4 — The Bride's Identity",
      category: "marriage",
      description: "The bride's name, her father's name, and their residence — the anchor of her legal identity.",
      content:
        "Are names just mere labels? No — they're the essence of identity. Clause 4 brings forward the names of the bride and her father, marking the beginning of a new chapter. Their residences reflect not just where they come from, but the values, environment, and upbringing that shaped them.\n" +
        "What it covers: the name of the bride, the name of the bride's father, and their respective residence.\n" +
        "As written in the Nikahnama: \"Name of the Bride & her father, with their respective residence.\"\n" +
        "Clause 4 may seem minor, but it carries weight. The bride's and her father's names and address aren't just formalities — they establish her identity, trace her origin, and affirm who stands with her. This anchors legal accountability, protects her rights, and ensures responsibility cannot be denied.",
      importance: "Medium",
      instaPost: ""
    },
    {
      id: 5,
      title: "Clause 5 — The Foundation of Truth",
      category: "rights",
      description: "The bride's marital status — recorded honestly, because the whole contract rests on it.",
      content:
        "Every marriage begins with a declaration. Clause 5 is that clear start, asking the bride to state her marital status on the Nikahnama.\n" +
        "It requires a simple, honest selection — Virgin: she has not been married before. Widow: she was previously married, and that husband passed away. Divorced: she was previously married, and that marriage legally ended.\n" +
        "The purpose of this clause is legal protection and religious compliance. It establishes transparency, so both partners enter the commitment fully aware of the facts, building trust immediately.\n" +
        "It also ensures adherence to Islamic law. Widows and divorced women must complete an Iddat (waiting period) before remarrying. An accurate status confirms this religious and legal requirement has been met, making the marriage permissible (halal).\n" +
        "It provides a clear official record — essential for matters like inheritance, visa applications, and other future legal needs.\n" +
        "The cost of dishonesty is real. Undisclosed previous marriages or divorces are a recurring thread in marriage disputes, and that breach of trust can be used to challenge the contract's legitimacy. Marrying a woman who hasn't completed her Iddat is a serious religious violation — if the previous status was lied about, the marriage itself could be deemed religiously impermissible until the required period is complete. Inconsistencies on the record can also severely complicate inheritance, custody, or property matters later.\n" +
        "Clause 5 is fundamentally about recording the truth to safeguard the marriage and the couple's future. Honesty is the priority: simply and clearly state the bride's verifiable status. This requirement is a matter of structure, law, and piety — never judgment.\n" +
        "Choose the truth. Choose clarity. Start your life together with complete integrity and enduring peace of mind.",
      importance: "High",
      instaPost: ""
    },
    {
      id: 6,
      title: "Clause 6 — Age as a Part of Identity",
      category: "rights",
      description: "The bride's date of birth and age — a shield of legality, consent, and dignity.",
      content:
        "Clause 6 marks more than numbers. It reflects readiness in the light of the law, identity, and the lawful grace with which a bride begins her life. It verifies that she meets the legal age for her province, ensuring the marriage is official and valid under the Child Marriage Restraint Act.\n" +
        "What it covers: the date of birth of the bride, and the age of the bride.\n" +
        "Clause 6 records the bride's date of birth and age, guarding her right to maturity and choice. It gives her time to grow, understand herself, and embrace marriage with confidence and grace. This clause turns legality into dignity and protection.\n" +
        "It serves as a shield of legality, ensuring every bride enters marriage with consent and confidence. Verifying her age holds those who defy the law accountable, and it protects her right to learn, to choose, and to live with dignity.\n" +
        "Ignoring Clause 6 can leave a bride vulnerable, entering marriage before she is ready. She may face stress and anxiety, while child marriage can bring social and legal challenges for the whole family. Neglecting this clause can have lasting effects on her well-being and prospects.\n" +
        "Clause 6 highlights the bride, recording her age and journey with care. It honours her readiness, dreams, and identity, allowing her to step into marriage with dignity. More than a record — it recognises her life and her rights.",
      table: {
        caption: "Minimum age required to marry, by province",
        headers: ["Province / Territory", "Male", "Female"],
        rows: [
          ["Sindh", "18", "18"],
          ["Punjab", "18", "18"],
          ["Islamabad Capital Territory", "18", "18"],
          ["Balochistan", "18", "16"],
          ["Khyber Pakhtunkhwa", "18", "16"]
        ]
      },
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
              {clause.table && (
                <div className="clause-table-wrap">
                  <table className="clause-table">
                    {clause.table.caption && <caption>{clause.table.caption}</caption>}
                    <thead>
                      <tr>
                        {clause.table.headers.map((h, i) => <th key={i}>{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {clause.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => <td key={j}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
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
