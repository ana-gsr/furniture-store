import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import SillaDiscover from './components/discover/discover'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/discover" element={<SillaDiscover />} />
      </Routes>
    </>
  );
}
export default App;
