import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoplayInterval?: number;
  // optional responsive height classes (Tailwind) e.g. "h-80 md:h-96 lg:h-[36rem]"
  slideHeight?: string;
}

const HeroCarousel = ({ slides, autoplayInterval = 5000, slideHeight = "h-80 md:h-96 lg:h-[36rem]" }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);

  useEffect(() => {
    if (!isAutoplayActive) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isAutoplayActive, slides.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplayActive(false);
    setTimeout(() => setIsAutoplayActive(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoplayActive(false);
    setTimeout(() => setIsAutoplayActive(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoplayActive(false);
    setTimeout(() => setIsAutoplayActive(true), 10000);
  };

  return (
    <section className="relative w-full overflow-hidden py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* responsive viewport height with sensible min/max so images aren't tiny or huge */}
        <div
          className={`relative w-full ${slideHeight} min-h-[18rem] max-h-[60vh] rounded-lg overflow-hidden`}
          // ensure the container can't exceed 60% of viewport height and has at least ~288px
        >
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 hover:bg-white ${
                  currentSlide === index ? "bg-white w-10" : "bg-white/60 w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
