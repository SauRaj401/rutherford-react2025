import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Factory, Users, Lightbulb, Package, Shield, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Contract Manufacturing",
      description: "State-of-the-art facilities with custom-built production lines designed specifically for gourmet food products. We manufacture to your exact specifications."
    },
    {
      icon: Package,
      title: "Private Label Solutions",
      description: "Complete private label services from concept to shelf. We help you create your own branded line of premium artisanal foods."
    },
    {
      icon: Lightbulb,
      title: "Research & Development",
      description: "Our in-house R&D team works closely with clients to develop new products or customize existing ones to meet market demands."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "HACCP, SQF, and FDA certified facilities ensuring the highest standards of food safety and quality control throughout production."
    },
    {
      icon: Users,
      title: "Packaging Design & Manufacturing",
      description: "End-to-end packaging solutions including design, sourcing, and manufacturing to create a complete retail-ready product."
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description: "Flexible supply chain solutions from food service to wholesalers and major retailers, both Australia-wide and internationally."
    }
  ];

  return (
    <div className="min-h-screen font-body bg-white text-gray-800">
      <Navigation />

      <main className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">What We Do</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to retail shelf, we provide comprehensive manufacturing and development solutions 
              for gourmet and artisanal food products.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Manufacturing Capabilities */}
          <section className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Manufacturing Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Production Scale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Two state-of-the-art manufacturing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Custom-built production lines for specialized products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Flexible production runs from small batches to large scale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>80+ product variations across multiple categories</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Product Categories</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Wafers (wheat-based and gluten-free)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Artisan crackers and lavosh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Pita chips and specialty baked goods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Gourmet fruit pastes and preserves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sweet and savory biscuits</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold mb-2">Consultation</h3>
                <p className="text-sm text-gray-600">Understanding your vision and requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold mb-2">Development</h3>
                <p className="text-sm text-gray-600">R&D team creates and tests formulations</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold mb-2">Production</h3>
                <p className="text-sm text-gray-600">Manufacturing to your specifications</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-bold mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">Quality-checked and ready for market</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help bring your gourmet food product to market with our 
              comprehensive manufacturing and development services.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
