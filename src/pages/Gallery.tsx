import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

// bundle-safe image imports
import pWheat from "@/assets/images/products/Wafers_Wheat_Based.png";
import pGluten from "@/assets/images/products/Wafers_Gluten_Free.png";
import pPita from "@/assets/images/products/Artisan_Pita_Chips.png";
import pSweet from "@/assets/images/products/Sweet_Biscuits.png";
import pSeeded from "@/assets/images/products/SeededCracker-357.png";
import pLavosh from "@/assets/images/products/Lavosh_426.png";
import pFruit from "@/assets/images/products/Quince-468.png";

import top1 from "@/assets/images/heroup/1.jpg";
import top2 from "@/assets/images/heroup/2.jpg";
import top3 from "@/assets/images/heroup/3.jpg";
import top4 from "@/assets/images/heroup/4.jpg";
import top5 from "@/assets/images/heroup/5.jpg";

import bot6 from "@/assets/images/herodown/6.jpg";
import bot7 from "@/assets/images/herodown/7.jpg";
import bot8 from "@/assets/images/herodown/8.jpg";
import bot9 from "@/assets/images/herodown/9.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // use imported image variables so the bundler includes them in the production build
  const galleryImages = [
    { src: pWheat, alt: "Wheat Based Wafers" },
    { src: pGluten, alt: "Gluten Free Wafers" },
    { src: pPita, alt: "Artisan Pita Chips" },
    { src: pSweet, alt: "Sweet Biscuits" },
    { src: pSeeded, alt: "Seeded Crackers" },
    { src: pLavosh, alt: "Lavosh" },
    { src: pFruit, alt: "Fruit Pastes" },
    { src: top1, alt: "Factory Production 1" },
    { src: top2, alt: "Factory Production 2" },
    { src: top3, alt: "Quality Control" },
    { src: top4, alt: "Packaging Line" },
    { src: top5, alt: "Product Range" },
    { src: bot6, alt: "Manufacturing Facility" },
    { src: bot7, alt: "Production Process" },
    { src: bot8, alt: "Quality Assurance" },
    { src: bot9, alt: "Final Product" },
  ];

  return (
    <div className="min-h-screen font-body bg-white text-gray-800">
      <Navigation />

      <main className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our products, manufacturing facilities, and quality processes. 
              See the care and precision that goes into every item we produce.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-16 bg-gray-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Want to See More?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Visit our facilities or schedule a product demonstration to see our manufacturing 
              process and quality standards firsthand.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </section>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery view"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
