import { useEffect } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            KΛLIL_<span className="text-blue-500">404</span>
          </a>

          {/* Hamburger for mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <AiOutlineHome className="text-lg" /> Home
            </a>
            <a href="#about" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <AiOutlineUser className="text-lg" /> About
            </a>
            <a href="#projects" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <AiOutlineFundProjectionScreen className="text-lg" /> Projects
            </a>
            <a
              href="#Resume" // make sure ResumeNew is routed at "/resume"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <CgFileDocument className="text-lg" /> Resume
            </a>
            <a href="#contact" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-lg flex flex-col items-center py-6 space-y-6 md:hidden">
          <a href="#home" className="flex items-center gap-2 text-gray-300 hover:text-white text-lg" onClick={() => setMenuOpen(false)}>
            <AiOutlineHome /> Home
          </a>
          <a href="#about" className="flex items-center gap-2 text-gray-300 hover:text-white text-lg" onClick={() => setMenuOpen(false)}>
            <AiOutlineUser /> About
          </a>
          <a href="#projects" className="flex items-center gap-2 text-gray-300 hover:text-white text-lg" onClick={() => setMenuOpen(false)}>
            <AiOutlineFundProjectionScreen /> Projects
          </a>
          <a href="#contact" className="flex items-center gap-2 text-gray-300 hover:text-white text-lg" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="/resume" className="flex items-center gap-2 text-gray-300 hover:text-white text-lg" onClick={() => setMenuOpen(false)}>
            <CgFileDocument /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};
