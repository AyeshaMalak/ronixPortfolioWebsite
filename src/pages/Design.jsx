import React from "react";
import { Link } from "react-router-dom";


const Design = () => {
  return (
    <div className="bg-white min-h-screen font-sans relative">
      
    
      

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
              Brand Identity
            </h2>
            <p className="text-black leading-relaxed text-lg">
              We create strong brand identities that elevate your business globally. Clear and memorable designs for maximum impact. Each element reflects your brand’s essence.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image3.png"
              alt="Brand Identity Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <Section
          title="Logo Design"
          text="Our designers craft logos that perfectly reflect your brand. Simple, unique, and memorable designs for instant recognition."
        />

        {/* Section 3 */}
        <Section
          title="Brand Guidelines"
          text="We carefully choose colors, fonts, and visual styles. Every choice ensures your brand looks consistent and professional across all platforms."
        />

        {/* Section 4 */}
        <Section
          title="Social Media Branding"
          text="Enhancing your social media presence with creative branding. Engaging visuals and cohesive style help your brand connect with the audience."
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
    <p className="text-black leading-relaxed text-lg">{text}</p>
  </div>
);

export default Design;

