import React, { useState } from 'react'
import './QuerySection.css'

const QuerySection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Who are we?",
      answer: "We’re a group of teenagers passionate about helping people understand their Nikahnama and what it really says, what it protects, and why it matters."
    },
    {
      id: 2,
      question: "What do we do?",
      answer: "We guide people through the Nikahnama so they know exactly what they’re signing. Our goal is to make sure no one signs it blindly, but with full understanding of their rights and responsibilities."
    },
    {
      id: 3,
      question: "Who runs this initiative?",
      answer: "It’s completely youth-led, run by dedicated teenagers who believe knowledge can empower and protect people in marriage."
    },
    {
      id: 4,
      question: "Are the laws the same for all Pakistani nationals?",
      answer: `Yes, they are. But many people don’t know what these laws actually mean for them. 
For example: If someone is a foreign national and marries a person whose age is below Pakistan’s legal minimum, even if it’s acceptable in their country, that marriage won’t be accepted or registered in Pakistan and they won’t be able to bring their spouse here.`
    }
  ]

  const toggleFAQ = (id) => setActiveFAQ(activeFAQ === id ? null : id)

  return (
    <section className="section query-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
              <h4>{faq.question}</h4>
              <span>{activeFAQ === faq.id ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuerySection
