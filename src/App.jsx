import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ProjectReplica from "./pages/ProjectReplica";
import ProjectGBDA from "./pages/ProjectGBDA";
import ProjectUWPortal from "./pages/ProjectUWPortal";
import ProjectAmsterdamBrewery from "./pages/ProjectAmsterdamBrewery";
import "./App.css";

function HomePage() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/replica" element={<ProjectReplica />} />
          <Route path="/project/gbda" element={<ProjectGBDA />} />
          <Route path="/project/uw-portal" element={<ProjectUWPortal />} />
          <Route
            path="/project/amsterdam-brewery"
            element={<ProjectAmsterdamBrewery />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
