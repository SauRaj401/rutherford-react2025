import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What we do", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Pictures", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Header */}
      <div className="w-full bg-black text-white text-center py-2 text-sm">
        Welcome to Rutherford Food Group.
      </div>

      {/* Header Section */}
      <header className="py-4 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          {/* Logo */}
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="Rutherford Food Group Logo" 
              className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain"
            />
          </Link>

          {/* Navigation with Black Background */}
          <nav className="w-full bg-black py-3 rounded-lg mt-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-wrap justify-center space-x-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center px-4">
              <span className="text-white text-lg font-medium">Menu</span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden px-4 pt-4 pb-2 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
