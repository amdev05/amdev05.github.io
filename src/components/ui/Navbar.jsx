import { useEffect, useState } from "react";

import { USERDATA, NAVIGATIONS } from "../../constants";
import { DataContacts } from "../../constants/index.jsx";
import { HiOutlineMenu } from "react-icons/hi";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [topSheet, setTopSheet] = useState(false);
  const [activeSection, setActiveSection] = useState(NAVIGATIONS[0]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 100);

          let currentSection = NAVIGATIONS[0];
          NAVIGATIONS.forEach((id) => {
            const section = document.getElementById(id.toLowerCase());
            if (section && scrollY >= section.offsetTop - section.offsetHeight / 4) {
              currentSection = id;
            }
          });
          setActiveSection(currentSection);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", topSheet);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [topSheet]);

  const navStyle = ` rounded-full h-14 cursor-pointer transition ${visible ? "blury" : ""}`;

  return (
    <>
      <div className="w-full px-6 fixed top-4 z-10">
        <nav className="max-w-global mx-auto  flex justify-between items-center">
          <a href="#home" className={`flex items-center gap-2 px-6 ${navStyle}`}>
            <img src={USERDATA.logo} alt="logo" className="size-7" />
            <h3 className="font-semibold">{USERDATA.name}</h3>
          </a>

          <div className={`hidden md:flex items-center gap-8 px-8 ${navStyle}`}>
            {NAVIGATIONS.slice(1).map((nav) => (
              <a href={`#${nav.toLowerCase()}`} key={nav} className={`${activeSection === nav ? "text-accent" : ""}`}>
                {nav}
              </a>
            ))}
          </div>

          <div className={`hidden md:flex items-center justify-end gap-4 px-6 ${navStyle}`}>
            <a href={DataContacts[2].link} className="text-xl" target="__blank">
              {DataContacts[2].icon}
            </a>
            <a href={DataContacts[1].link} className="text-xl" target="__blank">
              {DataContacts[1].icon}
            </a>
            <a href={DataContacts[0].link} className="text-xl" target="__blank">
              {DataContacts[0].icon}
            </a>
          </div>

          <div className={`flex md:hidden items-center text-2xl px-6 ${navStyle}`}>
            <HiOutlineMenu onClick={() => setTopSheet((value) => !value)} />
          </div>
        </nav>
      </div>
      <div
        className={`md:hidden  fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center backdrop-blur-md bg-neutral-900/30 z-20 px-6 transition-all duration-300 ${
          topSheet ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setTopSheet(() => false)}
      >
        <div className={`w-96 flex flex-col text-center gap-4 transition ${topSheet ? "translate-y-0" : "-translate-y-8"}`}>
          {NAVIGATIONS.slice(1).map((nav) => (
            <a href={`#${nav.toLowerCase()}`} className={`blury rounded-2xl py-4 ${activeSection === nav ? "text-accent" : ""}`} key={nav}>
              {nav}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
