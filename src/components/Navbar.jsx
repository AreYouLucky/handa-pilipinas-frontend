import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import MiddleNav from "./MiddleNav";
import SearchBox from "./SearchBox";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const url = location.pathname;

  const navigation_text =
    "block text-gray-800 hover:bg-gray-700 hover:text-white hover:scale-105 duration-300 md:hover:bg-transparent border-gray-700 montserrat-bold text-base";

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm z-[9999] w-full">
      <div className="max-w-screen-3xl mx-auto w-full px-4 py-2 flex items-center justify-between">
        {/* Logo — visible on all screens */}
        <div className="flex items-center">
          <Link to="/">
          <img
            src="/images/logos/Theme_HANDA PILIPINAS 2025.png"
            className="h-8 md:h-14 border border-gray-800"
            alt="Logo"
          />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-full items-center justify-between gap-8">
          <MiddleNav />
          <SearchBox />
        </div>

        {/* Mobile Hamburger — right side on small screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="ml-4 h-10 w-10 rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>
      </div>


      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 py-4 bg-white">
          <div className="mb-4">
            <SearchBox />
          </div>
          <ul className="space-y-2 text-sm font-medium">
            {/* HOME */}
            <li className={url === '/' ? 'bg-gray-200 rounded-md' : ''}>
              <Link to="/" className={`block p-2 ${navigation_text}`}>Home</Link>
            </li>
            {/* ABOUT */}
            <li className={url === '/about' ? 'bg-gray-200 rounded-md' : ''}>
              <Link to="/about" className={`block p-2 ${navigation_text}`}>
                About
              </Link>
            </li>


            {/* FEATURED TECHNOLOGIES */}
            <li className={url === '/technologies' ? 'bg-gray-200 rounded-md' : ''}>
              <Link to="/technologies" className={`block p-2 ${navigation_text}`}>
                Featured Technologies
              </Link>
            </li>

            {/* RESOURCES Dropdown */}
            {/* <li>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="w-full flex items-center justify-between p-2"
              >
                <span className={navigation_text}>RESOURCES</span>
                <MdArrowDropDown
                  className={`text-gray-700 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              {isResourcesOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                  {[
                    { to: "/policies-and-laws", label: "DRR Policies and Laws" },
                    { to: "/learning-materials", label: "Learning Materials" },
                    { to: "/drr-stats", label: "DRR Stats" },
                  ].map(({ to, label }) => (
                    <li key={to} className={url === to ? 'bg-gray-200 rounded-md' : ''}>
                      <Link to={to} className={`block p-2 ${navigation_text} pl-4`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li> */}

            {/* MEDIA Dropdown */}
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between p-2"
              >
                <span className={navigation_text}>MEDIA</span>
                <MdArrowDropDown
                  className={`text-gray-700 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                  {["press-release",  "archives", "photos", "videos"].map((route) => (
                    <li key={route} className={url === `/${route}` ? 'bg-gray-200 rounded-md' : ''}>
                      <Link to={`/${route}`} className={`block p-2 ${navigation_text} pl-4 capitalize`}>
                        {route.replace("-", " ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>


          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
