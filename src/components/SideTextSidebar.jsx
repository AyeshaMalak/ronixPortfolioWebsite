import { Link } from "react-router-dom";

const SideTextSidebar = () => {
  return (
    <div
      className="hidden sm:flex flex-col gap-6 fixed z-40 left-3 md:left-8"
      style={{
        top: "65%",
        transform: "translateY(-50%)",
        bottom: "80px",
      }}
    >
      <Link
        to="/portfolio"
        className="font-extrabold text-xs md:text-lg uppercase rotate-180 hover:text-[#0084FF] transition-colors"
        style={{ writingMode: "vertical-rl" }}
      >
        PORTFOLIO
      </Link>

      <Link
        to="/contact"
        className="font-extrabold text-xs md:text-lg uppercase rotate-180 hover:text-[#0084FF] transition-colors"
        style={{ writingMode: "vertical-rl" }}
      >
        CONTACT
      </Link>
    </div>
  );
};

export default SideTextSidebar;
