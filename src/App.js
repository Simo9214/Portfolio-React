import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Testimonianze from './pages/Testimonianze';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';



function App() {

   return (

    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progetti" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/feedback" element={<Testimonianze />} />
        </Routes>

        <Footer />

      </div>
    </Router>

  );
}

export default App;
