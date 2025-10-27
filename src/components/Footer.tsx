import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="text-center sm:text-left">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mx-auto sm:mx-0 mb-4 bg-white rounded-lg p-2" />
          <p className="text-sm text-gray-400">Rutherford Food Group</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>60 Saintly Drive, Truganina VIC 3029</li>
            <li><a href="mailto:info@rutherfordfoodgroup.com.au" className="hover:text-white transition-colors">info@rutherfordfoodgroup.com.au</a></li>
            <li><a href="tel:+61409902825" className="hover:text-white transition-colors">0409 902 825</a></li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="text-center text-gray-500 text-sm">
        © {currentYear} Rutherford Food Group. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
