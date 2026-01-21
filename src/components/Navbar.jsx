import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = ["about", "projects", "resume", "contact"];

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={handleLogoClick}
            className="bg-transparent border-none p-0 text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
          >
            Daniel
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer bg-transparent border-none focus:outline-none"
          >
            <div
              className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="capitalize hover:text-blue-400 transition-colors text-sm font-medium bg-transparent border-none cursor-pointer p-0 focus:outline-none"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="block w-full text-left capitalize py-2 hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer focus:outline-none"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
