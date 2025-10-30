import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Container from "@/components/Container";

// image imports (bundle-safe)
import top3 from "@/assets/images/heroup/1.jpg";
import top2 from "@/assets/images/heroup/2.jpg";
import top1 from "@/assets/images/heroup/3.jpg";
import top4 from "@/assets/images/heroup/4.jpg";
import top5 from "@/assets/images/heroup/5.jpg";
import top6 from "@/assets/images/herodown/8.jpg";

import bot1 from "@/assets/images/herodown/7.jpg";
import bot2 from "@/assets/images/herodown/6.jpg";
import bot3 from "@/assets/images/herodown/9.jpg";
import bot4 from "@/assets/images/herodown/8.jpg";

import pWheat from "@/assets/images/products/Wafers_Wheat_Based.png";
import pGluten from "@/assets/images/products/Wafers_Gluten_Free.png";
import pPita from "@/assets/images/products/Artisan_Pita_Chips.png";
import pSweet from "@/assets/images/products/Sweet_Biscuits.png";
import pSeeded from "@/assets/images/products/SeededCracker-357.png";
import pLavosh from "@/assets/images/products/Lavosh_426.png";
import pFruit from "@/assets/images/products/Quince-468.png";
import artisanCrisps from "@/assets/images/products/Fruitcrackers-379.jpg";


const Index = () => {
  const topSlides = [
    { image: top1 },
    { image: top2 },
    { image: top3 },
    { image: top4 },
    { image: top5 },
    { image: top6 },
  ];

  const bottomSlides = [
    { image: bot1 },
    { image: bot2 },
    { image: bot3 },
    { image: bot4 },
  ];

  const products = [
    { name: "Wafers Wheat Based", image: pWheat, id: "wafers-wheat" },
    { name: "Wafers Gluten Free", image: pGluten, id: "wafers-gluten-free" },
    { name: "Artisan Pita Chips", image: pPita, id: "pita-chips" },
    { name: "Sweet Biscuits", image: pSweet, id: "sweet-biscuits" },
    { name: "Seeded Crackers", image: pSeeded, id: "seeded-crackers" },
    { name: "Lavosh", image: pLavosh, id: "lavosh" },
    { name: "Fruit Pastes", image: pFruit, id: "fruit-pastes" },
    { name: "Artisan Crisps", image: artisanCrisps, id: "artisan-crisps" },
  ];

  return (
    <div className="min-h-screen font-body bg-white text-gray-800">
      <Navigation />

      <main>
        {/* Hero Carousel 1 */}
        <HeroCarousel slides={topSlides} />

          <AnnouncementBar>
          Australia's leading manufacturer in private label entertaining foods
        </AnnouncementBar>

        {/* Core Range Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-heading text-center font-bold mb-8">Core Range</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="block group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-lg"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
                    <div className="p-3 text-center bg-gray-50">
                      <h3 className="font-semibold text-sm">{product.name}</h3>
                    </div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </Link>
              ))}

              {/* Placeholder card (now links to /products) */}
              {/* <Link
                to="/products"
                className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                aria-label="View more products"
              >
                <div className="p-3 text-center bg-gray-50">
                  <h3 className="font-semibold text-sm text-gray-500">&nbsp;</h3>
                </div>
                <div className="h-80 flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400 text-sm">View More Products</span>
                </div>
              </Link> */}
            </div>
          </div>
        </section>

        {/* Hero Carousel 2 */}
        <HeroCarousel slides={bottomSlides} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
