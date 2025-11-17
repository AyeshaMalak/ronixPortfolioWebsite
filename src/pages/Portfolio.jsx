import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideTextSidebar from "../components/SideTextSidebar";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const portfolioItems = [
    { id: 1, title: "Brand Identity", shortDesc: "Logo & branding", image: "/image3.png",
      fullDesc: "We create powerful and memorable brand identities that represent your brand vision and uniqueness." },
    { id: 2, title: "Website Design", shortDesc: "Responsive & modern", image: "/image2.png",
      fullDesc: "Clean, modern, and responsive website design that delivers fast performance and smooth UX." },
    { id: 3, title: "App Development", shortDesc: "iOS & Android apps", image: "/image1.png",
      fullDesc: "We build fast, secure, and scalable mobile apps for both Android and iOS platforms." },
    { id: 4, title: "Marketing Campaign", shortDesc: "Digital marketing", image: "/logo.jpeg",
      fullDesc: "Creative and impactful marketing campaigns designed to boost your business visibility." },
    { id: 5, title: "Infographics", shortDesc: "Social media graphics", image: "/BrandMockup.png",
      fullDesc: "Visually appealing infographics built to communicate your message beautifully and clearly." },
    { id: 6, title: "Stationery Design", shortDesc: "Custom stationery", image: "/portfolio1.jpg",
      fullDesc: "Premium stationery including business cards, letterheads, and brand collateral." },
    { id: 7, title: "Social Media Management", shortDesc: "Boosting presence", image: "/image3.png",
      fullDesc: "We create engaging content and manage social media profiles to grow your online presence." },
    { id: 8, title: "E-commerce App", shortDesc: "Shopping app", image: "/portfolio1.jpg",
      fullDesc: "Modern, user-friendly shopping apps that make online buying smooth and efficient." },
    { id: 9, title: "SEO Campaign", shortDesc: "Better ranking", image: "/portfolio3.jpg",
      fullDesc: "SEO strategies that improve your Google ranking and drive organic traffic." },
    { id: 10, title: "Photography", shortDesc: "Product & event", image: "/image1.png",
      fullDesc: "Professional product and event photography to enhance your brand visuals." },
    { id: 11, title: "Video Production", shortDesc: "Creative videos", image: "/image2.png",
      fullDesc: "High-quality video production including ads, product videos, and brand stories." },
    { id: 12, title: "Packaging Design", shortDesc: "Eye-catching packs", image: "/logo.jpeg",
      fullDesc: "Attractive and effective packaging designs that make products stand out on shelves." },
  ];

  return (
    <div className="bg-white min-h-screen font-sans relative">

      {/* Side Text Sidebar */}
      <SideTextSidebar />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1.5 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-24 object-contain cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="h-32"></div>

      <div className="px-6 md:px-24 py-10 space-y-16">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-10 text-center text-[#19D3FF]">
          Our Work
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalItem(item)}
              className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 flex flex-col bg-white cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 sm:h-64 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
              />

              {isMobile ? (
                <div className="px-4 py-3 text-center">
                  <h2 className="text-lg font-extrabold mb-1 text-[#19D3FF]">{item.title}</h2>
                  <p className="text-sm font-semibold text-[#19D3FF]">{item.shortDesc}</p>
                </div>
              ) : (
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 px-4">
                  <h2 className="text-2xl md:text-5xl font-extrabold mb-2 text-[#19D3FF]">{item.title}</h2>
                  <p className="text-base font-semibold text-[#19D3FF]">{item.shortDesc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalItem && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setModalItem(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden">
                <img
                  src={modalItem.image}
                  alt={modalItem.title}
                  className="w-full max-h-[500px] object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#19D3FF]">{modalItem.title}</h2>
                <p className="mt-2 text-gray-700 font-semibold">{modalItem.shortDesc}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">{modalItem.fullDesc}</p>
                <button
                  onClick={() => setModalItem(null)}
                  className="mt-6 bg-[#19D3FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0084FF] transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
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

export default Portfolio;
