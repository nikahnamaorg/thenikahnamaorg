import React, { useState } from 'react'
import './TeamSection.css'

const mission = {
  vision: "Our mission is to educate communities about the Nikahnama, promote understanding of its legal and spiritual importance, and share real stories that raise the voices of the unheard.",
  values: [
    "Accountability: We believe that those who suppress others or deny them their rightful freedoms should be brought to justice under the light of the law.",
    "Empowerment: Our mission includes empowering those who feel weak or unheard, helping them find the confidence to speak up and stand for their rights.",
    "Enlightenment: We strive to educate people about the Nikahnama, its clauses and the truths often buried by those who misuse power.",
    "Transparency: We are committed to sharing facts that are honest and unaltered. Transparency is our utmost priority."
  ]
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: "Eeshal Imran Akram",
      role: "Founder & CEO",
      description: "A Levels @ ISL",
      fullBio: "Passionate about advocacy and legal awareness, working to educate communities about Nikahnama rights and empower unheard voices.",
      image: "/images/eeshal.webp"
    },
    {
      id: 2,
      name: "Shiza Imtiaz",
      role: "Co-Founder",
      description: "A Levels @ Lahore Alma",
      fullBio: "Focused on spreading awareness and ensuring transparency in conversations around marriage, rights, and social norms.",
      image: "/images/shiza.jpg"
    },
    {
      id: 3,
      name: "Yahya Burhan",
      role: "Founders Associate",
      description: "A Levels @ Westminster Islamabad",
      fullBio: "Supports research and storytelling efforts, helping bring real experiences and issues to light.",
      image: "/images/yahya.jpg"
    }
  ]

  return (
    <section className="section team-section">

      <h2 className="section-title">Meet Our Team</h2>

      {/* TEAM */}
      <div className="team-grid">
        {teamMembers.map(member => (
          <div
            key={member.id}
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
      <div className="mission-section">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>{mission.vision}</p>

          <div className="values-list">
            <h4>Our Values</h4>
            <ul>
              {mission.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* WHAT WE COVER */}
      <div className="what-we-stand-for">
        <h3>What We Cover</h3>
        <div className="stand-for-grid">
          <div className="stand-card"><h4>The difference between law, culture, and religion.</h4></div>
          <div className="stand-card"><h4>Traditions and rituals still practiced today, and how they impact lives</h4></div>
          <div className="stand-card"><h4>Marital rights (mehr, divorce, custody, maintenance, delegated divorce)</h4></div>
          <div className="stand-card"><h4>Consent, legal protections, communication</h4></div>
        </div>
      </div>

    </section>
  )
}

export default TeamSection