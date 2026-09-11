import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuerySection from './components/QuerySection'
import TeamSection from './components/TeamSection'
import ClausesSection from './components/ClausesSection'
import SuggestionsSection from './components/SuggestionsSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const firstRender = useRef(true)

  // Switching sections swaps the content but leaves the scroll where it was,
  // so a new "page" could open halfway down. Jump to the top on every change
  // (but not on first load, which is already at the top).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    window.scrollTo(0, 0)
  }, [activeSection])

  const renderSection = () => {
    switch(activeSection) {
      case 'queries':
        return <QuerySection />
      case 'team':
        return <TeamSection />
      case 'clauses':
        return <ClausesSection />
      case 'suggestions':
        return <SuggestionsSection />
      default:
        return <Hero onNavigate={setActiveSection} />
    }
  }

  return (
    <div className="App">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main key={activeSection} className="section-enter">
        {renderSection()}
      </main>
      <Footer />
    </div>
  )
}

export default App