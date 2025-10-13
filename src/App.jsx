import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import SillaDiscover from './components/discover/discover'
import carusel from './components/carusel/carusel'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/discover" element={<SillaDiscover />} />
        <Route path="/carusel" element={<carusel />} /> 
      </Routes>
    </>
  );
}
export default App;
