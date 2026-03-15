import React from 'react'
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
  const teamMembers = [
    { id: 1, name: "Eeshal Imran Akram", role: "Founder & CEO", description: "A Levels @ ISL", image: "" },
    { id: 2, name: "Shiza Imtiaz", role: "Co-Founder", description: "A Levels @ Lahore Alma", image: "" },
    { id: 3, name: "Yahya Burhan", role: "Founders Associate", description: "A Levels @ Westminister Islamabad", image: "" }
  ]

  return (
    <section className="section team-section">
      
      <h2 className="section-title">Meet Our Team</h2>

      {/* TEAM FIRST */}
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="team-image">{member.image}</div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>

      {/* MISSION AFTER TEAM */}
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

      {/* WHAT WE STAND FOR */}
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