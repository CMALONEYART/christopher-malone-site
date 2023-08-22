import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/bio" element={<Bio />} /> */}
          </Routes>
      </Router>
  )
}

export default App
