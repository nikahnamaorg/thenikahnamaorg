import React from 'react'
import './Header.css'

const Header = ({ activeSection, onNavigate }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => onNavigate('home')}>
  <img src={logo.png} alt="The Nikahnama Org Logo" className="logo.png" />
  <div className="logo-text">
    <h1>The Nikahnama Org</h1>
    <span>Understanding your Rights!</span>
  </div>
</div>
        
        <nav className="nav">
          <button 
            className={activeSection === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
         <button 
  className={activeSection === 'queries' ? 'nav-btn active' : 'nav-btn'}
  onClick={() => onNavigate('queries')}
>
  FAQs
</button>
          <button 
            className={activeSection === 'team' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => onNavigate('team')}
          >
            Meet The Team
          </button>
          <button 
            className={activeSection === 'clauses' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => onNavigate('clauses')}
          >
            Nikahnama Clauses
          </button>
          <button 
            className={activeSection === 'suggestions' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => onNavigate('suggestions')}
          >
            Suggestions
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header