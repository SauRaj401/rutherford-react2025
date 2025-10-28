import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center sm:text-left">
          <img
            src="/logo.png"
            alt="Rutherford Food Group logo"
            className="w-40 h-24 mx-auto sm:mx-0 mb-4 rounded-lg p-2"
          />
          <p className="text-sm text-gray-300 max-w-xs">
            Rutherford Food Group — Australia’s leading private-label manufacturer of premium entertaining foods. Trusted by retailers and foodservice partners for quality and consistency.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            {/* <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li> */}
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link to="/food-safety" className="hover:text-white transition-colors">Food Safety &amp; Certifications</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 mb-4">
            <li>60 Saintly Drive, Truganina VIC 3029</li>
            <li><a href="mailto:info@rutherfordfoodgroup.com.au" className="hover:text-white transition-colors">info@rutherfordfoodgroup.com.au</a></li>
            <li><a href="tel:+61409902825" className="hover:text-white transition-colors">0409 902 825</a></li>
          </ul>

         
        </div>
      </div>

      <hr className="my-6 border-gray-800" />

      {/* <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center text-gray-400 text-sm">
        <div>© {currentYear} Rutherford Food Group. All Rights Reserved.</div>
       
      </div> */}
       <div className="text-center text-gray-500 text-sm">
        © {currentYear} Rutherford Food Group. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
