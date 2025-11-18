import { useNavigate, Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Section = ({ id, title, text, img, reverse, moreLink, moreText }) => (
  <section
    id={id}
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-between max-w-7xl mx-auto my-20 px-6 py-12 bg-gray-100 rounded-xl gap-8`}
  >
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-extrabold mb-4 text-[#00D4FF] tracking-wide">{title}</h2>
      <p className="text-lg leading-relaxed text-gray-700">{text}</p>

      {moreLink && moreText && (
        <div className="mt-4">
          <button
            onClick={moreLink}
            className="font-bold text-black hover:text-gray-700 transition-colors text-lg"
          >
            {moreText}
          </button>
        </div>
      )}
    </div>

    <div className="md:w-1/2 flex justify-center">
      <img src={img} alt={title} className="rounded-lg max-h-80 w-full object-cover" />
    </div>
  </section>
);

const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="font-black text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[200px] leading-none mb-8 text-center text-[#00D4FF] tracking-wide">
      {displayText}
      {showCursor && (
        <span className="inline-block w-[2px] h-[1em] bg-gray-400 ml-1 align-middle animate-pulse"></span>
      )}
    </h1>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">

      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-3 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.jpeg" alt="RONIX Logo" className="h-14 sm:h-20 object-contain" />

          {/* HEADER NAV */}
          <div className="hidden sm:flex gap-6 font-bold text-black uppercase tracking-wide text-sm">
            <Link to="/portfolio" className="hover:text-[#0084FF]">Portfolio</Link>
            <Link to="/contact" className="hover:text-[#0084FF]">Contact</Link>
          </div>
        </div>
      </div>

      {/* HOME SECTION */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 pt-32 bg-gray-50"
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 mb-12 font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-wider text-black">
          <Link to="/design" className="hover:text-[#0084FF] transition-colors">DESIGN</Link>
          <Link to="/develop" className="hover:text-[#0084FF] transition-colors">DEVELOP</Link>
          <Link to="/market" className="hover:text-[#0084FF] transition-colors">MARKET</Link>
        </div>

        <AnimatedText text="RONIX" />

        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed px-4 text-gray-800">
          A <span className="font-medium">design obsessed</span> digital agency elevating brands to their maximum
          <br className="hidden sm:block" />
          with a firm belief that <span className="font-medium">limit is just an illusion.</span>
        </p>

        <div
          className="mt-16 flex flex-col items-center text-xs uppercase tracking-widest text-black cursor-pointer"
          onClick={() => navigate("/portfolio")}
        >
          <span className="font-bold">FEATURED WORK</span>
          <ArrowDown className="mt-3 h-5 w-5 animate-bounce text-[#00D4FF]" />
        </div>
      </section>

      {/* SECTION 1 */}
      <Section
        id="section1"
        title="Our Design Expertise"
        text="We create stunning visual designs that elevate your brand..."
        img="/image1.png"
        moreLink={() => navigate("/design")}
        moreText="More >"
      />

      {/* SECTION 2 */}
      <Section
        id="section2"
        title="Development Solutions"
        text="We build robust, scalable applications with modern technology stacks..."
        img="/image2.png"
        reverse
        moreLink={() => navigate("/develop")}
        moreText="More >"
      />

      {/* SECTION 3 */}
      <Section
        id="section3"
        title="Marketing Strategies"
        text="Our marketing solutions help your business reach the right audience effectively..."
        img="/image3.png"
      />

      {/* MOBILE BOTTOM MENU */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-4 z-50 text-black shadow-lg">
        <Link to="/portfolio" className="font-extrabold text-sm uppercase hover:text-[#0084FF]">PORTFOLIO</Link>
        <Link to="/contact" className="font-extrabold text-sm uppercase hover:text-[#0084FF]">CONTACT</Link>
      </div>

    </div>
  );
};

export default Home;
