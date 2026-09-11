import React from 'react'
import './SuggestionsSection.css'
import Reveal from './Reveal'

const guidelines = [
  { title: "Respectful", text: "Please maintain respect and courtesy in all communications." },
  { title: "Confidential", text: "Your suggestions are confidential and will be reviewed carefully." },
  { title: "Constructive", text: "We appreciate constructive feedback that helps us improve." },
  { title: "Responsive", text: "We review all suggestions and respond to important queries." }
]

const SuggestionsSection = () => {
  return (
    <section className="section suggestions-section">
      <span className="section-kicker">We're Listening</span>
      <h2 className="section-title">Your Suggestions Matter</h2>
      <div className="ornament">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
        </svg>
      </div>

      <Reveal as="div" className="suggestions-intro">
        <p>
          We value your feedback. Help us improve our resources by sharing your thoughts,
          ideas, and experiences — it's completely anonymous unless you choose to leave
          your email.
        </p>
        <div className="suggestion-chips">
          <span>New clauses to explain</span>
          <span>Improvements to our website</span>
          <span>Topics for future discussions</span>
          <span>Community events or workshops</span>
          <span>Any other ideas</span>
        </div>
      </Reveal>

      <Reveal delay={0.1} as="div" className="google-form-container">
        <div className="google-form-head">
          <h3>Suggestions Form</h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSea3N4kMUURtNnosC6Dl3DJLbcxivUlfZnxov5Vc7u6im6j5Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="form-open-link"
          >
            Open in a new tab
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
            </svg>
          </a>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSea3N4kMUURtNnosC6Dl3DJLbcxivUlfZnxov5Vc7u6im6j5Q/viewform?embedded=true"
          title="Suggestions Form"
          className="google-form-iframe"
        >
          Loading…
        </iframe>
      </Reveal>

      <Reveal as="div" className="community-guidelines">
        <h3>Community Guidelines</h3>
        <div className="guidelines-grid">
          {guidelines.map((g, i) => (
            <div className="guideline-card" key={i}>
              <h4>{g.title}</h4>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default SuggestionsSection
