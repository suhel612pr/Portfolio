import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-[#ece9e4] flex flex-col font-sans selection:bg-[#c17a3d]/30 selection:text-[#ece9e4] overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
