import React, { useState } from 'react'
import './TeamSection.css'
import Reveal from './Reveal'

const mission = {
  vision: "Our mission is to educate communities about the Nikahnama, promote understanding of its legal and spiritual importance, and share real stories that raise the voices of the unheard.",
  values: [
    {
      title: "Accountability",
      text: "Those who suppress others or deny them their rightful freedoms should be brought to justice under the light of the law."
    },
    {
      title: "Empowerment",
      text: "We help those who feel weak or unheard find the confidence to speak up and stand for their rights."
    },
    {
      title: "Enlightenment",
      text: "We educate people about the Nikahnama, its clauses, and the truths often buried by those who misuse power."
    },
    {
      title: "Transparency",
      text: "We share facts that are honest and unaltered. Transparency is our utmost priority."
    }
  ]
}

const coverage = [
  "The difference between law, culture, and religion",
  "Traditions and rituals still practiced today, and how they impact lives",
  "Marital rights — mehr, divorce, custody, maintenance, delegated divorce",
  "Consent, legal protections, and communication"
]

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: "Eeshal Imran Akram",
      role: "Founder & CEO",
      description: "A Levels @ ISL",
      fullBio: "Eeshal Imran is an A-Level student at International School Lahore and founder of The Nikahnama Org, advocating for awareness of marital rights and social empowerment. She serves as HR Lead at Mojza and holds ambassador roles with ThinkFest’26, BOEC, Crimson, and ILC, leading outreach, communications, and youth engagement initiatives. Multilingual and skilled in outreach, digital marketing, and storytelling, Eeshal combines leadership with community impact to educate and empower others.",
      image: "/images/eeshal.webp"
    },
    {
      id: 2,
      name: "Shiza Imtiaz",
      role: "Co-Founder & COO",
      description: "A Levels @ Lahore Alma",
      fullBio: "Shiza Imtiaz is an A-Level student at The Lahore Alma and co-founder of The Nikahnama Org, where she leads awareness campaigns on marital rights and gender equity. She also serves as an ambassador for ZNotes and has experience in research, creative marketing, and graphic design, combining creativity with strategic thinking to engage youth and promote social impact. Passionate about arts, storytelling, and education, Shiza is dedicated to fostering learning, awareness, and meaningful community initiatives.",
      image: "/images/shiza.jpg"
    },
  ]

  return (
    <section className="section team-section">

      <span className="section-kicker">The People Behind It</span>
      <h2 className="section-title">Meet Our Team</h2>
      <div className="ornament">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        </svg>
      </div>

      {/* TEAM */}
      <div className="team-grid">
        {teamMembers.map((member, i) => (
          <Reveal key={member.id} delay={i * 0.1}>
            <div
              className="team-card"
              onClick={() => setSelectedMember(member)}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* MODAL */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <img src={selectedMember.image} alt={selectedMember.name} />

            <h2>{selectedMember.name}</h2>
            <p className="team-role">{selectedMember.role}</p>

            <p className="modal-description">
              {selectedMember.fullBio}
            </p>

            <button onClick={() => setSelectedMember(null)}>Close</button>
          </div>
        </div>
      )}

      {/* MISSION */}
      <Reveal className="mission-section" as="div">
        <div className="mission-card">
          <span className="mission-kicker">Our Mission</span>
          <p className="mission-vision">{mission.vision}</p>

          <div className="values-list">
            <h4>Our Values</h4>
            <div className="values-grid">
              {mission.values.map((value, index) => (
                <div className="value-card" key={index}>
                  <h5>{value.title}</h5>
                  <p>{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* WHAT WE COVER */}
      <div className="what-we-stand-for">
        <h3>What We Cover</h3>
        <div className="stand-for-grid">
          {coverage.map((item, i) => (
            <Reveal delay={i * 0.08} key={i}>
              <div className="stand-card">
                <span className="stand-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  )
}

export default TeamSection