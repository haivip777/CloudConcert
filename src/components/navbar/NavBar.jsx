import './navbar.css'
import { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-1000 w-full h-fit transition-colors duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex max-w-6xl mx-auto justify-between items-center py-2 sm:py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-auto h-12" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10 items-center text-white text-[18px] font-semibold leading-[1.5] uppercase">
          <a href="#highlight" className="hover:text-red-400">Nổi bật</a>
          <a href="#artists" className="hover:text-red-400">Nghệ sĩ</a>
          <a href="#timeline" className="hover:text-red-400">Timeline</a>
          <a href="#contact" className="hover:text-red-400">Liên hệ</a>
          <a href="#booking" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold shadow-[0_0_15px_#f87171] hover:shadow-[0_0_25px_#fb923c]
             transition duration-300 wobble">
            Đặt vé ngay
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center text-white">
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-xl z-50 
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Nút close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <a href="#highlight" onClick={() => setIsOpen(false)} className="hover:text-red-400">Nổi bật</a>
        <a href="#artists" onClick={() => setIsOpen(false)} className="hover:text-red-400">Nghệ sĩ</a>
        <a href="#timeline" onClick={() => setIsOpen(false)} className="hover:text-red-400">Timeline</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-red-400">Liên hệ</a>
        <a href="#booking" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold shadow-[0_0_15px_#f87171] hover:shadow-[0_0_25px_#fb923c]
           transition duration-300 wobble">
          Đặt vé ngay
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
