import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// product images
import wheatOriginal from "@/assets/images/variants/wheat_varients/WheatWafer_024.jpg";
import crackedBlackPepper from "@/assets/images/variants/wheat_varients/WheatWafer_CrackedBlackPepper_027_.jpg";
import spinachHerb from "@/assets/images/variants/wheat_varients/WheatWafer_SpinahandHerb_041_.jpg";

import glutenOriginal from "@/assets/images/variants/wafers_gluten_free_variants/GF_Wafer_071.jpg";
import activatedCharcoal from "@/assets/images/variants/wafers_gluten_free_variants/GF_Wafer_ActivatedCharcoal_078.jpg";
import beetroot from "@/assets/images/variants/wafers_gluten_free_variants/GF_Wafer_Beetroot_093.jpg";


// product variant data
const productsData = {
  "wafers-wheat": {
    title: "Wheat Variants",
    variants: [
      { name: "Wheat Original", image: wheatOriginal },
      { name: "Cracked Black Pepper", image: crackedBlackPepper },
      { name: "Spinach & Herb", image: spinachHerb },
    ],
    otherVariants: [
      "Poppy Seed",
      "Tuscan Herb",
      "Parmesan Cheese",
      "Tasman Sea Salt",
    ],
  },
  "wafers-gluten-free": {
    title: "Wafers Gluten Free Variants",
    variants: [
      { name: "Original Gluten Free", image: glutenOriginal },
      { name: "Activated Charcoal", image: activatedCharcoal },
      { name: "Beetroot", image: beetroot },
    ],
    otherVariants: [
      "Poppy Seed",
      "Roasted Sesame",
      "Chilli",
      "Turmeric",
      "Italian Herb",
      "Sweet Potato",
      "Lemmon Pepper",
      "Cracked Black Pepper",
    ],
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData[id as keyof typeof productsData];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center text-center">
          <h1 className="text-2xl font-semibold text-gray-600">
            Product not found
          </h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-body bg-white text-gray-800 flex flex-col">
      <Navigation />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-16">
        {/* Product title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-gray-800">
          {product.title}
        </h1>

        {/* Variants grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {product.variants.map((variant, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-700 group-hover:text-amber-700 transition-colors duration-300">
                  {variant.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Other variants (text only) */}
        {product.otherVariants && product.otherVariants.length > 0 && (
          <section className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Other {product.title}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600 text-lg">
              {product.otherVariants.map((item, i) => (
                <li
                  key={i}
                  className="bg-gray-50 hover:bg-amber-50 py-3 rounded-lg transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
