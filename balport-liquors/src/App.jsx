import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileDrawer from './components/MobileDrawer'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Gallery from './pages/Gallery'
import { useState } from 'react'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="app-layout">
      <Header onMenuClick={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
