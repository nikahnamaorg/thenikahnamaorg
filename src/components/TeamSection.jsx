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
      slug: "eeshal",
      name: "Eeshal Imran Akram",
      role: "Founder & CEO",
      description: "A Levels @ ISL",
      fullBio: "Eeshal Imran is an A-Level student at International School Lahore and founder of The Nikahnama Org, advocating for awareness of marital rights and social empowerment. She serves as HR Lead at Mojza and holds ambassador roles with ThinkFest’26, BOEC, Crimson, and ILC, leading outreach, communications, and youth engagement initiatives. Multilingual and skilled in outreach, digital marketing, and storytelling, Eeshal combines leadership with community impact to educate and empower others.",
      image: "/images/eeshal.webp",
      education: ["A Levels — International School Lahore"],
      roles: [
        "Founder — The Nikahnama Org",
        "HR Lead — Mojza",
        "Ambassador — ThinkFest’26, BOEC, Crimson and ILC"
      ],
      skills: ["Outreach", "Digital Marketing", "Storytelling", "Communications", "Multilingual"],
      instagram: "https://www.instagram.com/esh_imran/",
      linkedin: "https://www.linkedin.com/in/eeshal-imran/"
    },
    {
      id: 2,
      slug: "shiza",
      name: "Shiza Imtiaz",
      role: "Co-Founder & COO",
      description: "A Levels @ Lahore Alma",
      fullBio: "Shiza Imtiaz is an A-Level student at The Lahore Alma and co-founder of The Nikahnama Org, where she leads awareness campaigns on marital rights and gender equity. She also serves as an ambassador for ZNotes and has experience in research, creative marketing, and graphic design, combining creativity with strategic thinking to engage youth and promote social impact. Passionate about arts, storytelling, and education, Shiza is dedicated to fostering learning, awareness, and meaningful community initiatives.",
      image: "/images/shiza.jpg",
      education: ["A Levels — The Lahore Alma"],
      roles: [
        "Co-Founder — The Nikahnama Org",
        "Ambassador — ZNotes"
      ],
      skills: ["Research", "Creative Marketing", "Graphic Design", "Storytelling"]
    },
    {
      id: 3,
      slug: "abdullah",
      name: "Abdullah Eeshan",
      role: "Secretary General",
      description: "IBDP @ Lahore Grammar School",
      fullBio: "As Secretary General, Abdullah is responsible for ensuring the smooth day-to-day functioning of the organization — maintaining organizational systems, monitoring departmental progress, supporting the Executive Directorate, and ensuring accountability across all departments. He is also a UN Youth Member (UNAP), a national athlete, and a professional debater.",
      image: "/images/abdullah.png",
      education: [
        "IBDP (Year 1) — Lahore Grammar School (2026–2028)",
        "International Baccalaureate, MYP IV–V — Learning Alliance International (2024–2026)",
        "Lahore Grammar School (2022–2024)"
      ],
      roles: [
        "Secretary General — The Nikahnama Org",
        "Founder & President — Daira",
        "Youth Member — United Nations Association of Pakistan (UNAP)",
        "Global Student Ambassador — Harvard Crimson Global Essay Competition",
        "Executive Council — Harvard Undergraduate Global Education Movement"
      ],
      achievements: [
        "Analyst Intern at Intellia, working on investment research, financial modeling, and client management",
        "Analyst Intern at PMIU-PESRP, School Education Department, Government of the Punjab, working on education monitoring and the CM Meal Program for underprivileged students",
        "Merit Scholarship from the Government of Punjab",
        "House Captain with multiple debating awards"
      ],
      skills: [
        "Team Leadership", "Community Outreach", "Financial Modeling", "Data Analysis",
        "Corporate Finance", "Policy Analysis", "Public Speaking", "Event Management"
      ],
      instagram: "https://www.instagram.com/abdullah_azhar.e/",
      linkedin: "https://www.linkedin.com/in/abdullah-eeshan-009091321/"
    },
  ]

  const openMember = (member) => {
    setSelectedMember(member)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeMember = () => {
    setSelectedMember(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ---- Detail "page" for a single member ----
  if (selectedMember) {
    const m = selectedMember
    return (
      <section className="section team-section">
        <button className="back-link" onClick={closeMember}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to the team
        </button>

        <span className="section-kicker">The People Behind It</span>
        <h2 className="section-title">{m.name}</h2>
        <div className="ornament">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="3.4" />
            <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
          </svg>
        </div>

        <div className="member-detail">
          <div className="member-detail-head">
            <img src={m.image} alt={m.name} />
            <div>
              <p className="team-role">{m.role}</p>
              <p className="member-detail-sub">{m.description}</p>
            </div>
          </div>

          <p className="member-bio">{m.fullBio}</p>

          {m.education && m.education.length > 0 && (
            <div className="member-block">
              <h4>Education</h4>
              <ul>
                {m.education.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </div>
          )}

          {m.roles && m.roles.length > 0 && (
            <div className="member-block">
              <h4>Roles &amp; Positions</h4>
              <ul>
                {m.roles.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}

          {m.achievements && m.achievements.length > 0 && (
            <div className="member-block">
              <h4>Achievements</h4>
              <ul>
                {m.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}

          {m.skills && m.skills.length > 0 && (
            <div className="member-block">
              <h4>Skills</h4>
              <div className="member-skills">
                {m.skills.map((sk, i) => <span key={i}>{sk}</span>)}
              </div>
            </div>
          )}

          {(m.instagram || m.linkedin) && (
            <div className="member-links">
              {m.instagram && (
                <a href={m.instagram} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              )}
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 9.5v9M4.5 5.5v.01M10 18.5v-5a3 3 0 0 1 6 0v5" />
                    <path d="M10 9.5v9" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          )}
        </div>

        <div className="clause-detail-nav">
          <button className="btn-secondary" onClick={closeMember}>Back to the team</button>
        </div>
      </section>
    )
  }

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
              onClick={() => openMember(member)}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              <span className="team-view-more">View profile ›</span>
            </div>
          </Reveal>
        ))}
      </div>

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