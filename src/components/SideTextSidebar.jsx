import { Link } from "react-router-dom";

const SideTextSidebar = () => {
  return (
    <div
      className="hidden sm:flex flex-col gap-6 left-2 md:left-10 fixed z-40"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        maxHeight: "calc(100vh - 120px)", 
        justifyContent: "center",
      }}
    >
      <Link
        to="/portfolio"
        className="font-extrabold text-xs md:text-xl uppercase transform rotate-180 hover:text-[#0084FF] transition-colors"
        style={{ writingMode: "vertical-rl" }}
      >
        PORTFOLIO
      </Link>

      <Link
        to="/contact"
        className="font-extrabold text-xs md:text-xl uppercase transform rotate-180 hover:text-[#0084FF] transition-colors"
        style={{ writingMode: "vertical-rl" }}
      >
        CONTACT
      </Link>
    </div>
  );
};

export default SideTextSidebar;
