import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/services/digital-manufacturing" element={<DigitalManufacturing />} />
        <Route path="/services/staffing" element={<Staffing />} />
        <Route path="/services/lean-manufacturing" element={<LeanManufacturing />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
