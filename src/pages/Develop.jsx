import React from "react";
import { Link } from "react-router-dom";
import SideTextSidebar from "../components/SideTextSidebar"; // Sidebar import

const Develop = () => {
  return (
    <div className="bg-white min-h-screen font-sans relative">
      
      {/* Side Text Sidebar */}
      <SideTextSidebar />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1.5 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img
              src="/logo.jpeg"
              alt="RONIX Logo"
              className="h-16 sm:h-24 object-contain cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="h-32"></div>

      <div className="space-y-16 px-6 md:px-24 pb-28">
        {/* Section 1 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-snug text-[#00D4FF]">
              Design and Develop
            </h2>
            <p className="text-black leading-relaxed text-lg">
              RONIX web design and development team creates powerful online presence for small or medium companies. We focus on effective branding and W3C-compliant websites that add value to your brand.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image1.png"
              alt="Web Development Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <Section
          title="Web Design and Development"
          text="Your website is an extension of your brand. We help your brand come alive on the web via customized websites designed with your corporation and target audience in mind."
        />

        {/* Section 3 */}
        <Section
          title="Why Choose RONIX?"
          text={`RONIX digital agency offers high-quality and user-friendly web design and development services globally. Benefits of a custom-designed responsive website include:
- Increase Brand Trust and Perception
- Increase Conversions and Sales
- Lower Bounce Rate
- Good for SEO
- Better User Experience
- Mobile-Friendly`}
        />

        {/* Section 4 */}
        <Section
          title="App Design and Development"
          text="RONIX is expert in iPhone/iPad app design and development. We develop apps for iOS and maintain top-class standards while delivering affordable, high-quality products."
        />

        {/* Section 5 */}
        <Section
          title="E-Commerce Development"
          text="We build scalable and secure e-commerce platforms that increase sales, improve user experience, and provide easy management for your business."
        />

        {/* Section 6 */}
        <Section
          title="Maintenance & Support"
          text="RONIX provides ongoing maintenance and support services to ensure your website or app runs smoothly and stays updated with latest standards."
        />
      </div>

      {/* Mobile bottom menu */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-4 z-50 text-black border-t border-gray-200">
        <Link to="/portfolio" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">
          PORTFOLIO
        </Link>
        <Link to="/contact" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md space-y-4">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">{title}</h2>
    <p className="text-black leading-relaxed text-lg whitespace-pre-line">{text}</p>
  </div>
);

export default Develop;
