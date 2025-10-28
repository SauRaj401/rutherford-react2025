import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Container from "@/components/Container";

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
      {/* Top Header (boxed, not full-bleed) */}
      <div className="w-full py-1">
        <Container>
          <div className="bg-black text-white text-center py-1 text-sm rounded-sm">
           Rutherford Fine Foods
           </div>
         </Container>
       </div>

       {/* Header Section */}
      <header className="py-2 border-b bg-white">
        <Container className="flex flex-col items-center">
           {/* Logo */}
           <Link to="/">
             <img
               src="/logo.png"
               alt="Rutherford Food Group Logo"
              // bigger logo, preserve aspect ratio with h-auto
              className="w-48 md:w-64 lg:w-72 h-auto object-contain"
             />
           </Link>

           {/* Navigation (boxed black background) */}
           <nav className="w-full mt-4">
             <div className="px-0">
              <div className="bg-black py-2 rounded-lg px-4">
                 {/* Desktop Navigation */}
                 <div className="hidden md:flex flex-wrap justify-center md:space-x-8 lg:space-x-10 text-lg font-medium">
                   {navLinks.map((link) => (
                     <Link
                       key={link.name}
                       to={link.path}
                       className={`inline-block px-3 py-2 rounded transition-colors duration-300 ${
                         isActive(link.path) ? "text-white" : "text-gray-300 hover:text-white"
                       }`}
                     >
                       {link.name}
                     </Link>
                   ))}
                 </div>

                 {/* Mobile Menu Button */}
                 <div className="md:hidden flex justify-between items-center">
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
                   <div className="md:hidden pt-4 pb-2 space-y-2">
                     {navLinks.map((link) => (
                       <Link
                         key={link.name}
                         to={link.path}
                         onClick={() => setIsOpen(false)}
                         className={`block px-4 py-2 rounded transition-colors duration-300 ${
                           isActive(link.path) ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"
                         }`}
                       >
                         {link.name}
                       </Link>
                     ))}
                   </div>
                 )}
               </div>
             </div>
           </nav>
         </Container>
       </header>
     </>
   );
 };

 export default Navigation;
