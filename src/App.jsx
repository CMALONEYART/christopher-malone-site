import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Work from './pages/work'
import Ceramics from './pages/ceramics'
import Sculptures from './pages/sculptures'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/ceramics" element={<Ceramics />} />
              <Route path="/work/sculptures" element={<Sculptures />} />
          </Routes>
      </Router>
  )
}

export default App
