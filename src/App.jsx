import React, { useState } from 'react'
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