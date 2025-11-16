import FAQComponent from './components/FAQComponent';
import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import InteractiveDemo from './components/InteractiveDemo';
import LeadForm from './components/LeadForm';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CompetitiveTable from './components/CompetitiveTable';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import ROICalculator from './components/ROICalculator';
import AlertCalendar from './components/AlertCalendar';



function LandingPage() {
  const demoRef = useRef(null);
  const contactRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Header 
        onScrollToDemo={scrollToDemo} 
        onScrollToContact={scrollToContact}
        onScrollToPricing={scrollToPricing}
      />
      
      <main>
        <Hero onScrollToDemo={scrollToDemo} onScrollToContact={scrollToContact} />
        <ROICalculator />  {/* ← Agregá aquí */}
        <ValueProposition />
        <div ref={demoRef}>
          <InteractiveDemo />
        </div>
        <div ref={pricingRef}>
          <Pricing onScrollToContact={scrollToContact} />
        </div>
        <Testimonials />
        <CompetitiveTable />
        <div ref={contactRef}>
          <LeadForm />
        </div>
      </main>
      <FAQComponent />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
