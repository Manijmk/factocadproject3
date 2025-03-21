import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services/>
      {/* <Portfolio />
      <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
