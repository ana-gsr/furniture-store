import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
)

