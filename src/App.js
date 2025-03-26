import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalManufacturing from "./components/DigitalManufacturing";
import BodyInWhite from "./components/BodyInWhite";
import Staffing from "./components/Staffing";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";


function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Hero />
    //   <Services/>
    //   <About />

    //   {/* <Portfolio />
    //   <Testimonials /> */}
    //   <Footer />
    // </div>

    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/digital-manufacturing" element={<DigitalManufacturing />} />
        <Route path="/services/digital-manufacturing/body-in-white" element={<BodyInWhite />} />
        <Route path="/services/staffing" element={<Staffing />} />
        {/* <Route path="/services/lean-manufacturing" element={<LeanManufacturing />} /> */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
