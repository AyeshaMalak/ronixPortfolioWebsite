import React from "react";
import { Link } from "react-router-dom";
import SideTextSidebar from "../components/SideTextSidebar";

const Contact = () => {
  return (
    <div className="relative bg-white min-h-screen font-sans">

     
      <SideTextSidebar />

  
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1.5 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-24 object-contain cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="h-32"></div>

    
      <section className="bg-gray-100 flex flex-col justify-center items-center text-center py-20 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact</h1>
        <p className="italic text-gray-500">Whether it's a project or just a cup of coffee!</p>
      </section>


 
      <div className="sm:pl-[120px] pl-0">
        <div className="max-w-[85rem] mx-auto grid md:grid-cols-2 gap-12 justify-center px-6 pb-28 pt-12 space-y-16 md:space-y-0">

          {/* Get a Quote */}
          <div className="bg-gray-100 p-10 shadow-sm rounded-lg">
            <h2 className="text-3xl font-extrabold mb-6">Get a Quote</h2>
            <form className="space-y-5">
              <div className="flex gap-4">
                <input type="text" placeholder="Good Name"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent" />
                <input type="email" placeholder="Favorite Email"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent" />
              </div>

              <div className="flex gap-4">
                <select className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                  <option>Interested In</option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>UI/UX</option>
                </select>
                <select className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                  <option>Need Within</option>
                  <option>1 Week</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                </select>
              </div>

              <input type="text" placeholder="Also please..."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent" />

              <button type="button"
                className="mt-4 font-bold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black transition">
                Let’s Rock →
              </button>
            </form>
          </div>

          {/* Befriend */}
          <div className="bg-gray-100 p-10 shadow-sm rounded-lg">
            <h2 className="text-3xl font-extrabold mb-6">Befriend</h2>
            <form className="space-y-5">
              <input type="email" placeholder="Favorite Email"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent" />

              <button type="button"
                className="mt-4 font-bold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black transition">
                Add Me! →
              </button>
            </form>

            <p className="mt-10 italic text-gray-500 text-sm">
              Willing to join us? Send your resume at{" "}
              <span className="underline bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black">
                ronixsoftware@gmail.com
              </span>
            </p>
          </div>

        </div>
      </div>


      {/* Mobile Bottom Menu */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-4 z-50 text-black border-t border-gray-200">
        <Link to="/portfolio" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">PORTFOLIO</Link>
        <Link to="/contact" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">CONTACT</Link>
      </div>

    </div>
  );
};

export default Contact;
