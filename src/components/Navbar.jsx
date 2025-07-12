import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, KT_sign } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=1vdrRJZDnxhL5SJbVlHObY0v3qrLNQDnV";

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO + TEXT */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={KT_sign}
            alt="Kartik Totlani Signature"
            className="w-[120px] h-auto object-contain sm:w-[140px]"
          />

          <div className="flex flex-col leading-tight sm:flex-row sm:items-center sm:gap-2">
            <p className="text-white text-[20px] sm:text-[25px] font-bold">Portfolio</p>
            <span className="hidden sm:block text-white text-[20px]">'s</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href={cvDownloadLink}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <div className="sm:hidden flex items-center z-50">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* MOBILE MENU */}
        {toggle && (
          <div className="sm:hidden absolute top-16 right-4 bg-primary p-6 rounded-xl shadow-md z-40">
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  href={cvDownloadLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
