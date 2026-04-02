import Navbar from "@/components/Navbar";
import Hero from "@/layout/Hero";
import About from "@/layout/About";
import Projects from "@/layout/Projects";
import Experience from "@/layout/Experience";
import Testimonials from "@/layout/Testimonials";
import Contact from "@/layout/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
