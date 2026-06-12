import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/Header/TopBar';
import Navbar from './components/Header/Navbar';
import FooterSection from './components/Footer/FooterSection';
import WhatsAppWidget from './components/WhatsApp/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NutritionPage from './pages/NutritionPage';
import TreatmentPage from './pages/TreatmentPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Top Header Section */}
        <TopBar />
        <Navbar />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
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
