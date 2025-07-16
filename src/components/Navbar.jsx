import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useState, useCallback, useRef, useEffect } from "react";
const baseImagePath = import.meta.env.BASE_URL;
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpenMenu(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="bg-[url('/image-hero-mobile.jpg')] md:bg-[url('/image-hero-desktop.jpg')] bg-no-repeat h-[55vh] md:h-[40vh] lg:h-[60vh] bg-cover">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:px-0 flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center gap-5 text-white font-medium">
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#discover">Discover</Link>
          </li>
          <li>
            <Link to="#get-started">Get Started</Link>
          </li>
        </ul>
        <button
          ref={buttonRef}
          className="md:hidden block relative cursor-pointer"
          type="button"
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label={openMenu ? "Close Menu" : "Open Menu"}
        >
          {openMenu ? (
            <img src={`${baseImagePath}/icon-close-menu.svg`} alt="" />
          ) : (
            <img src={`${baseImagePath}/icon-hamburger.svg`} alt="" />
          )}
        </button>
        {openMenu && (
          <div
            className="md:hidden absolute left-1/2 -translate-x-1/2 top-24 w-[90vw] rounded-md shadow z-10 bg-white py-6"
            ref={menuRef}
          >
            <ul className="flex flex-col text-center gap-5 text-black font-medium divide-y divide-gray-300">
              <li className="py-4">
                <Link to="#about">About</Link>
              </li>
              <li className="py-4">
                <Link to="#discover">Discover</Link>
              </li>
              <li className="py-4">
                <Link to="#get-started">Get Started</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
