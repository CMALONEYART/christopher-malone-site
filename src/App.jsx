import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
// import About from './pages/about'
import Work from './pages/work'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/work" element={<Work />} />
          </Routes>
      </Router>
  )
}

export default App
