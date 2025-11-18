import React from "react";
import { Link } from "react-router-dom";


const Market = () => {
  return (
    <div className="relative bg-white min-h-screen font-sans">

      

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1.5 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-24 object-contain cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="h-32"></div>

      <div className="space-y-16 px-6 md:px-24 pb-28">

        {/* Section 1 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-snug text-[#00D4FF]">
              Digital Media Marketing
            </h2>
            <p className="text-black leading-relaxed text-lg">
              RONIX offers complete Digital Media Marketing services to help your business reach potential clients effectively. We focus on strategy, content, and engagement for maximum results.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image3.png"
              alt="Digital Marketing Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <Section
          title="Search Engine Optimization"
          text="SEO plays a key role in Google ranking. We help your website reach top positions and drive relevant traffic efficiently."
        />

        {/* Section 3 */}
        <Section
          title="Marketing Strategy"
          text="We develop tailored strategies to maximize your online presence and exposure, ensuring your brand reaches the right audience."
        />

        {/* Section 4 */}
        <Section
          title="Pay-Per-Click Management"
          text="PPC campaigns provide instant traffic and targeted reach. We manage campaigns strategically to optimize conversions and ROI."
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

export default Market;

