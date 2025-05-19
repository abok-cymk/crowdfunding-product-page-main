import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <picture className="absolute">
        <source media="(min-width: 1024px)" srcSet="/image-hero-desktop.jpg" />
        <img
          src="/image-hero-mobile.jpg"
          alt=""
          fill="true"
          priority="true"
          className="object-cover"
        />
      </picture>

      <nav className="relative flex items-center justify-between px-4 py-3 md:px-24 lg:px-32 lg:py-6">
        <Link to="/">
          <img src="/logo.svg" alt="Crowdfunding" className="w-24 lg:w-full" />
        </Link>

        <ul className="hidden items-center gap-8 text-sm/6 text-gray-200 lg:flex">
          <Link to="/about">About</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/get-started">Get Started</Link>
        </ul>
        {isMenuOpen ? (
          <IoMdClose
            size={24}
            className="relative flex cursor-pointer text-white transition-colors duration-300 hover:bg-gray-600/30 lg:hidden"
            onClick={toggleMenu}
          />
        ) : (
          <HiBars3
            size={24}
            className="flex cursor-pointer text-white transition-colors duration-300 hover:bg-gray-600/30 lg:hidden"
            onClick={toggleMenu}
          />
        )}

        {isMenuOpen && (
          <div
            className="absolute z-20 top-14 left-1/2 grid h-min w-78 -translate-x-1/2 items-center rounded-lg bg-white"
            ref={menuRef}
          >
            <ul className="flex flex-col justify-between gap-4 divide-y divide-gray-200 px-4 py-3 font-500">
              <Link to="/#about" className="pb-6 text-sm/6">
                About
              </Link>
              <Link to="/discover" className="pb-6 text-sm/6">
                Discover
              </Link>
              <Link to="/get-started" className="pb-6 text-sm/6">
                Get Started
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Homepage;
