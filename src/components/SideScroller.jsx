import { useState, useEffect } from "react";

const SideScroller = () => {
  const sections = ["home", "section1", "section2", "section3"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50 hidden md:flex">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full border-2 border-[#00e1ff] transition-all duration-300 ${
            active === id ? "bg-[#00ccff] scale-125" : "bg-white hover:bg-[#19D3FF]"
          }`}
          aria-label={`Navigate to ${id}`}
        />
      ))}
    </div>
  );
};

export default SideScroller;