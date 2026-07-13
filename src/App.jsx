import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import ProfileCard from './Components/ProfileCard'

function App() {
  const [status, setStatus] = useState('Learning React')

  const skills = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'React' },
  ]

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="app-shell">
              <div className="glow glow-a" aria-hidden="true" />
              <div className="glow glow-b" aria-hidden="true" />

              <header className="hero">
                <p className="eyebrow">React mini profile</p>
                <h1>Build once, glow forever.</h1>
                <p className="hero-copy">
                  A tiny app showing props, state, lists, conditional
                  rendering, controlled input, and useEffect.
                </p>
              </header>

              <section className="status-panel">
                <label
                  className="status-label"
                  htmlFor="status-input"
                >
                  Your current status
                </label>

                <input
                  id="status-input"
                  className="status-input"
                  type="text"
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value)
                  }
                  placeholder="Type a live status"
                />
              </section>

              <ProfileCard
                name="Jayant"
                bio="Front-end learner building React UI one component at a time."
                longBio="I enjoy turning small UI ideas into polished interfaces, and I am currently focusing on writing cleaner components with props, state, and reusable patterns."
                skills={skills}
                status={status}
              />
            </main>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/profile"
          element={
            <ProfileCard
              name="Jayant"
              bio="Front-end learner building React UI one component at a time."
              longBio="I enjoy turning small UI ideas into polished interfaces, and I am currently focusing on writing cleaner components with props, state, and reusable patterns."
              skills={skills}
              status={status}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App