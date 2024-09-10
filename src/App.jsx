import AboutUs from "./components/AboutUs";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <Testimonial />
        <Collaboration />
      </main>
    </div>
  );
}

export default App;
