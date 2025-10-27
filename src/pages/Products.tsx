import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const productCategories = [
    {
      id: "wafers-wheat",
      name: "Wafers Wheat Based",
      image: "/src/assets/images/products/Wafers_Wheat_Based.png",
      description: "Premium wheat-based wafers crafted with the finest ingredients. Perfect for cheese boards and entertaining.",
      features: ["All-natural ingredients", "Crispy texture", "Multiple flavor varieties"]
    },
    {
      id: "wafers-gluten-free",
      name: "Wafers Gluten Free",
      image: "/src/assets/images/products/Wafers_Gluten_Free.png",
      description: "Delicious gluten-free wafers that don't compromise on taste or quality. Suitable for dietary requirements.",
      features: ["100% gluten-free", "Premium ingredients", "Light and crispy"]
    },
    {
      id: "pita-chips",
      name: "Artisan Pita Chips",
      image: "/src/assets/images/products/Artisan_Pita_Chips.png",
      description: "Handcrafted pita chips baked to perfection. Ideal for dips, hummus, and gourmet snacking.",
      features: ["Hand-cut", "Perfectly seasoned", "Oven-baked"]
    },
    {
      id: "sweet-biscuits",
      name: "Sweet Biscuits",
      image: "/src/assets/images/products/Sweet_Biscuits.png",
      description: "Delightful sweet biscuits perfect for afternoon tea or dessert accompaniments.",
      features: ["Gourmet recipes", "Premium ingredients", "Multiple varieties"]
    },
    {
      id: "seeded-crackers",
      name: "Seeded Crackers",
      image: "/src/assets/images/products/SeededCracker-357.png",
      description: "Nutrient-rich crackers loaded with premium seeds. A healthy and delicious snacking option.",
      features: ["Packed with seeds", "High in fiber", "Artisanal quality"]
    },
    {
      id: "lavosh",
      name: "Lavosh",
      image: "/src/assets/images/products/Lavosh_426.png",
      description: "Traditional Middle Eastern flatbread crackers, thin and crispy. Perfect for elegant entertaining.",
      features: ["Traditional recipe", "Ultra-thin & crispy", "Versatile pairing"]
    },
    {
      id: "fruit-pastes",
      name: "Fruit Pastes",
      image: "/src/assets/images/products/Quince-468.png",
      description: "Premium fruit pastes made from the finest fruits. The perfect companion for cheese and charcuterie boards.",
      features: ["100% natural fruit", "No preservatives", "Gourmet quality"]
    }
  ];

  return (
    <div className="min-h-screen font-body bg-white text-gray-800">
      <Navigation />

      <main className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of premium artisanal food products. Each item is crafted 
              with care using the finest ingredients.
            </p>
          </div>

          {/* Products Grid */}
          <div className="space-y-16">
            {productCategories.map((product) => (
              <section 
                key={product.id} 
                id={product.id}
                className="scroll-mt-32"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="relative h-96 md:h-full overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-8">
                    <h2 className="text-3xl font-heading font-bold mb-4">{product.name}</h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-bold text-lg mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a 
                      href="/contact"
                      className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300"
                    >
                      Inquire About This Product
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <section className="mt-16 bg-gray-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Interested in Our Products?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a retailer, distributor, or looking for private label solutions, 
              we'd love to discuss how we can work together.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Contact Us Today
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
