import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Beaker, Package } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen font-body bg-white text-gray-800">
      <Navigation />

      <main className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Page Title */}
          <h1 className="text-4xl font-heading font-bold text-center mb-12 text-gray-900">About Us</h1>
          
          {/* Our Story Section */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Rutherford Fine Foods was founded in 2019 by two friends—a talented pastry chef and a skilled engineer—who recognized a significant gap in the market for high-quality private label gourmet food products.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have since expanded into two large, state-of-the-art manufacturing facilities, each with custom-built production lines designed for our unique products. Our team is dedicated to supplying the highest quality gourmet and artisanal foods, that are manufactured here in Australia and our commitment is reflected in our robust certifications, including HACCP, SQF, and FDA approval.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This high level of certification gives us the flexibility to serve a wide range of clients, from small wholesalers, medium sized distributors to major retailers for both the Australian and international markets. With a portfolio of over 80 products in various flavors, sizes, and packaging types, and with more being added every year, we are equipped to be your reliable partner for private label excellence.
                </p>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 shadow-lg text-white">
              <h2 className="text-3xl font-heading font-bold mb-6">About Us</h2>
              <div className="prose prose-lg max-w-none text-white">
                <p className="leading-relaxed mb-4">
                  At Rutherford Fine Foods, we are a trusted partner in the creation of gourmet and artisan food products. Our expertise lies in contract and private-label manufacturing sector, serving some of Australia's largest supermarket chains and a growing list of international brands.
                </p>
                <p className="leading-relaxed mb-4">
                  Beyond standard production, we offer a comprehensive, end-to-end solution for our clients. Our dedicated in-house Research and Development team collaborates closely with each customer to tailor and customize existing product lines or innovate entirely new products for the market.
                </p>
                <p className="leading-relaxed">
                  We further streamline the process by assisting with packaging manufacturing, ensuring a seamless and fully finished product ready for retail.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-10 text-gray-900">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Quality Certifications</h3>
                <p className="text-gray-700 text-center">
                  HACCP, SQF, and FDA approved facilities ensuring the highest standards in food safety and quality.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Innovation & R&D</h3>
                <p className="text-gray-700 text-center">
                  Dedicated in-house R&D team ready to customize existing products or develop entirely new innovations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Extensive Portfolio</h3>
                <p className="text-gray-700 text-center">
                  Over 80 products in various flavors, sizes, and packaging types, with new additions every year.
                </p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="bg-gray-900 text-white rounded-lg p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2019</div>
                <div className="text-gray-300">Founded</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-gray-300">Manufacturing Facilities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">80+</div>
                <div className="text-gray-300">Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Australian Made</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a small wholesaler or a major retailer, we're here to help bring your gourmet food vision to life.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
