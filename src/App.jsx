import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/Header/TopBar';
import Navbar from './components/Header/Navbar';
import FooterSection from './components/Footer/FooterSection';
import WhatsAppWidget from './components/WhatsApp/WhatsAppWidget';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import TreatmentPage from './pages/TreatmentPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Top Header Section */}
        <TopBar />
        <Navbar />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/treatment/:treatmentId" element={<TreatmentPage />} />
        </Routes>

        {/* Global Footer & Floating Actions */}
        <FooterSection />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
