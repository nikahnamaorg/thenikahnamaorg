import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from './logo-mark.jpeg'   // logo inside components folder

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'clauses', label: 'Clauses' },
  { id: 'queries', label: 'FAQs' },
  { id: 'suggestions', label: 'Suggestions' },
  { id: 'team', label: 'Team' },
]

// Matches the CSS breakpoint where the nav collapses behind the toggle.
const COLLAPSE_BELOW = 960

const Header = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Picking a page should close the menu, or it stays open over the new page.
  const go = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    // Growing past the breakpoint hides the toggle, so drop the open state
    // rather than leave a phantom panel behind.
    const onResize = () => { if (window.innerWidth >= COLLAPSE_BELOW) setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <header className={menuOpen ? 'header nav-open' : 'header'}>
      <div className="header-container">

        <div className="logo" onClick={() => go('home')}>
          <span className="logo-mark">
            <img src={logo} alt="The Nikahnama Org Logo" className="logo-img" />
          </span>

          <div className="logo-text">
            <h1>The Nikahnama Org</h1>
            <span>Understanding your Rights!</span>
          </div>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className="nav" id="site-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'nav-btn active' : 'nav-btn'}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  )
}

export default Header
