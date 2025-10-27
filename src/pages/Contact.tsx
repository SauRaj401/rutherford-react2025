import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen font-body bg-white text-gray-800">
      <Navigation />

      <main className="bg-white text-gray-900 px-8 py-8">
        <div className="max-w-5xl mx-auto bg-white shadow-md py-4">
          <nav className="text-sm text-gray-600 mb-4">
            <Link to="/" className="text-gray-800 hover:underline">Home</Link> / <span className="text-gray-500">Contact Us</span>
          </nav>
          
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold">Rutherford Fine Foods & Head Office</h2>
              <p className="text-gray-700">60 Saintly Drive Truganina, Victoria, Australia 3029</p>
              <p className="text-gray-700">Tel: <a href="tel:+61392194191" className="text-blue-500">(03) 9219 4191</a></p>
              
              {/* Directors Section */}
              <h2 className="text-xl font-bold mt-6">Directors</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <p className="text-gray-900 font-semibold">Sujan K.C</p>
                  <p className="text-gray-700">
                    <a href="mailto:Sujan@RutherfordFoodGroup.com.au" className="text-blue-500 text-base hover:underline">
                      Sujan@RutherfordFoodGroup.com.au
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a href="tel:0409902825" className="text-blue-500 text-base hover:underline">0409 902 825</a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">David Alexander Keri</p>
                  <p className="text-gray-700">
                    <a href="mailto:David@RutherfordFoodGroup.com.au" className="text-blue-500 text-base hover:underline">
                      David@RutherfordFoodGroup.com.au
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a href="tel:0409902825" className="text-blue-500 text-base hover:underline">0409 902 825</a>
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <iframe 
                  className="w-full h-56 rounded-lg shadow-md" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.223826128693!2d144.74615447698606!3d-37.81391467191473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d3f97d34567%3A0x45f6db5c2a2b3c87!2s60%20Saintly%20Dr%2C%20Truganina%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000" 
                  allowFullScreen 
                  loading="lazy"
                  title="Rutherford Food Group Location"
                />
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 p-6 shadow-md rounded-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                  placeholder="Enter your name"
                  required
                />
                
                <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                  placeholder="Enter your email"
                  required
                />
                
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                  placeholder="Enter your phone number"
                />
                
                <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                  rows={4} 
                  placeholder="Write your message"
                  required
                />
                
                <button 
                  type="submit"
                  className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900 transition-colors duration-300"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
