import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>The Nikahnama Org</h3>
            <p>A youth-led initiative focused on simplifying the clauses of the Nikah Nama and raising awareness about the traditions, rituals, and cultural practices surrounding it, enabling young people to make informed and responsible decisions.</p>
          </div>
        
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: thenikahnama.org@gmail.com</p>
            <p>Follow us on social media!</p>
            <p> Instagram: @thenikahnama_org </p>
            <p> LinkedIn: The Nikahnama Org</p>
            
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