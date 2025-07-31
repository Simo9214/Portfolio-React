import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Testimonianze from './pages/Testimonianze';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonianze" element={<Testimonianze />} />
      </Routes>
    </Router>
  );
}

export default App;
