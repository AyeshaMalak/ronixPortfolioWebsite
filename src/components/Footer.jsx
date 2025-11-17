import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4 lg:py-2 px-6">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">

        {/* Brand */}
        <div>
          <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text mb-1">
            RONIX
          </h3>
          <p className="text-gray-400 text-[11px] md:text-xs leading-snug">
            Creating exceptional digital experiences.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-1 text-sm">Services</h4>
          <ul className="flex flex-wrap gap-2 md:flex-col text-gray-400 text-[11px] md:text-xs leading-tight">
            <li><Link to="/design" className="hover:text-cyan-400">Design</Link></li>
            <li><Link to="/develop" className="hover:text-cyan-400">Develop</Link></li>
            <li><Link to="/market" className="hover:text-cyan-400">Market</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold mb-1 text-sm">Connect</h4>
          <div className="flex gap-1.5">
            <a className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400">
              <Linkedin size={14} />
            </a>
            <a className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400">
              <Instagram size={14} />
            </a>
            <a className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400">
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-1 text-sm">Contact</h4>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-1.5 rounded text-[11px] bg-gray-900 text-white border border-white placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              className="p-1.5 rounded text-[11px] h-16 resize-none bg-gray-900 text-white border border-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-1.5 rounded text-[11px]"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-3 pt-1 text-gray-500 text-[10px] text-center">
        © {currentYear} Ronix. All rights reserved.
      </div>
    </footer>
  );
}
