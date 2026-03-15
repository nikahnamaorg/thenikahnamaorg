import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>The Nikahnama Org</h3>
            <p>A Youth-led initiative, retelling the story of rights, laws, traditions and voices unheard.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="ClausesSection.jsx">Nikahnama Clauses</a></li>
              <li><a href="TeamSection.jsx">Our Team</a></li>
              <li><a href="QuerySection.jsx">Q&A</a></li>
              <li><a href="SuggestionsSection.jsx">Suggestions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: thenikahnama.org@gmail.com</p>
            <p>Follow us on social media!
              Instagram: @thenikahnama_org
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 The Nikahnama Org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer