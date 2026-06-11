import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'  
import Gallery from './pages/Gallery'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/discover">Discover</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>   
        <Footer /> 
      </div>
    </Router>
  )
}

export default App
