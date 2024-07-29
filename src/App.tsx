import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceAndSkills from "./components/ExperienceAndSkills";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import WorkProcess from "./components/WorkProcess";
import BeliefSystem from "./components/BeliefSystem";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans">
        <Header />
        <main className="pt-20">
          {" "}
          {/* Add top padding here */}
          <Hero  />
          <About id="about" />
          <ExperienceAndSkills />
          <Projects id="projects" />
          <CTA />
          <WorkProcess id="work-process" />
          <BeliefSystem />
          <Testimonials id="testimonials" />
          <Articles id="articles" />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
