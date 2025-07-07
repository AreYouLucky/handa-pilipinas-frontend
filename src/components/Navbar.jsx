import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBox from "./SearchBox";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const url = location.pathname;
  const navigation_text =
    "block text-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:scale-105 duration-300 md:hover:bg-transparent border-gray-700 montserrat-bold text-lg";

  return (
    <nav className="border-gray-200 bg-gray-50">
      <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between p-4 md:p-2">
        <Link to="/">
          <img
            src="/images/logos/Theme_HANDA PILIPINAS 2025.png"
            className="flex h-8 items-center space-x-3 border border-gray-800 md:h-20 rtl:space-x-reverse"
            alt="Logo"
          />
        </Link>
        <div className="hidden md:block">
          <SearchBox />
        </div>


        {/* Hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="block h-10 w-10 items-center justify-center rounded-lg p-2 hover:bg-gray-100 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <RxHamburgerMenu className="text-3xl" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-2 w-full border-y border-gray-200 py-5">
            <div className="py-2 mb-4">
              <SearchBox />
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="group flex w-full items-center rounded-lg py-2"
                >
                  <span
                    className={`ms-2 flex-1 text-left whitespace-nowrap ${navigation_text}`}
                  >
                    MEDIA
                  </span>
                  <MdArrowDropDown
                    className={`text-gray-700 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>

                {isDropdownOpen && (
                  <ul className="animate-slideInRight space-y-2 py-2">
                    <li className={url == '/press-release' ? 'bg-gray-200 rounded-full' : ' '}>
                      <Link
                        to="/press-release"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105 "
                      >
                        <span className={navigation_text}>PRESS RELEASE</span>
                      </Link>
                    </li>
                    <li className={url == '/speeches' ? 'bg-gray-200 rounded-full' : ' '}>
                      <Link
                        to="/speeches"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105"
                      >
                        <span className={navigation_text}>SPEECHES</span>
                      </Link>
                    </li>
                    <li className={url == '/archives' ? 'bg-gray-200 rounded-full' : ' '}>
                      <Link
                        to="/archives"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105"
                      >
                        <span className={navigation_text}>ARCHIVES</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={url == '/activities' ? 'bg-gray-200 rounded-full' : ' '}>
                <Link
                  to="/activities"
                  className={`group flex items-center rounded-lg p-2 duration-300 hover:scale-105`}
                >
                  <span
                    className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}
                  >
                    General Program of Activities
                  </span>
                </Link>
              </li>
              <li className={url == '/technologies' ? 'bg-gray-200 rounded-full' : ' '}>
                <Link
                  to="/technologies"
                  className={`group flex items-center rounded-lg p-2 duration-300 hover:scale-105`}
                >
                  <span
                    className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}
                  >
                    Featured Technologies
                  </span>
                </Link>
              </li>
              <li className={url == '/videos' ? 'bg-gray-200 rounded-full' : ' '}>
                <Link
                  to="/videos"
                  className={`group flex items-center rounded-lg p-2 duration-300 hover:scale-105`}
                >
                  <span
                    className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}
                  >
                    Videos
                  </span>
                </Link>
              </li>
              <li className={url == '/about' ? 'bg-gray-200 rounded-full' : ' '}>
                <Link
                  to="/about"
                  className={`group flex items-center rounded-lg p-2 duration-300 hover:scale-105`}
                >
                  <span
                    className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}
                  >
                    About
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
