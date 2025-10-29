import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

/* product card images (same images used on Index) */
import pWheat from "@/assets/images/products/Wafers_Wheat_Based.png";
import pGluten from "@/assets/images/products/Wafers_Gluten_Free.png";
import pPita from "@/assets/images/products/Artisan_Pita_Chips.png";
import pSweet from "@/assets/images/products/Sweet_Biscuits.png";
import pSeeded from "@/assets/images/products/SeededCracker-357.png";
import pLavosh from "@/assets/images/products/Lavosh_426.png";
import pFruit from "@/assets/images/products/Quince-468.png";
import artisanCrackers from "@/assets/images/products/Crackers_ApricotandDates_115.jpg";

const products = [
  { name: "Wafers Wheat Based", image: pWheat, id: "wafers-wheat" },
  { name: "Wafers Gluten Free", image: pGluten, id: "wafers-gluten-free" },
  { name: "Artisan Pita Chips", image: pPita, id: "pita-chips" },
  { name: "Sweet Biscuits", image: pSweet, id: "sweet-biscuits" },
  { name: "Seeded Crackers", image: pSeeded, id: "seeded-crackers" },
  { name: "Lavosh", image: pLavosh, id: "lavosh" },
  { name: "Fruit Pastes", image: pFruit, id: "fruit-pastes" },
  { name: "Artisan Crackers", image: artisanCrackers, id: "artisan-crackers" },
];

export default function AllProducts() {
  return (
    <div className="min-h-screen font-body bg-white text-gray-800 flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 mt-8 text-center text-gray-800">
            All Products
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-full h-56 md:h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-sm font-semibold text-gray-700">{p.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}