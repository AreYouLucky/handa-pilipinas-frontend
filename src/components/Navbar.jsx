import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import MdNavigations from "./MdNavigations";
import SearchBox from "./SearchBox";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const url = location.pathname;
  const navigation_text =
    "block text-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:scale-105 duration-300 md:hover:bg-transparent border-gray-700 montserrat-bold text-lg";

  return (
    <nav className="border-gray-200 bg-[#fffffff5]">
      <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between p-3 md:p-0">
        <Link to="/">
          <img
            src="/images/logos/Theme_HANDA PILIPINAS 2025.png"
            className="flex h-8 items-center space-x-3 border border-gray-800 md:h-20 rtl:space-x-reverse"
            alt="Logo"
          />
        </Link>
        <div className="hidden md:flex gap-4">
          <SearchBox />
          <MdNavigations/>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="block h-10 w-10 items-center justify-center rounded-lg p-2 hover:bg-gray-100 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <RxHamburgerMenu className="text-3xl" />
        </button>
        
        {isMobileMenuOpen && (
<div className="mt-2 w-full border-y border-gray-200 py-5">
  <div className="py-2 mb-4">
    <SearchBox />
  </div>

  <ul className="space-y-2 text-sm">
    {/* HOME */}
    <li className={url == '/' ? 'bg-gray-200 rounded-full' : ''}>
      <Link to="/" className="group flex items-center rounded-lg p-2 duration-300 hover:scale-105">
        <span className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}>
          Home
        </span>
      </Link>
    </li>

    {/* MEDIA Dropdown */}
    <li>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="group flex w-full items-center rounded-lg py-2"
      >
        <span className={`ms-2 flex-1 text-left whitespace-nowrap ${navigation_text}`}>MEDIA</span>
        <MdArrowDropDown
          className={`text-gray-700 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>

      {isDropdownOpen && (
        <ul className="animate-slideInRight space-y-2 py-2">
          <li className={url == '/press-release' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/press-release" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>Press Release</span>
            </Link>
          </li>
          <li className={url == '/speeches' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/speeches" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>Speeches</span>
            </Link>
          </li>
          <li className={url == '/archives' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/archives" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>Archives</span>
            </Link>
          </li>
          <li className={url == '/photos' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/photos" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>Photos</span>
            </Link>
          </li>
          <li className={url == '/videos' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/videos" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>Videos</span>
            </Link>
          </li>
        </ul>
      )}
    </li>

    {/* FEATURED TECHNOLOGIES */}
    <li className={url == '/technologies' ? 'bg-gray-200 rounded-full' : ''}>
      <Link to="/technologies" className="group flex items-center rounded-lg p-2 duration-300 hover:scale-105">
        <span className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}>
          Featured Technologies
        </span>
      </Link>
    </li>

    {/* RESOURCES Dropdown */}
    <li>
      <button
        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
        className="group flex w-full items-center rounded-lg py-2"
      >
        <span className={`ms-2 flex-1 text-left whitespace-nowrap ${navigation_text}`}>RESOURCES</span>
        <MdArrowDropDown
          className={`text-gray-700 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>

      {isResourcesOpen && (
        <ul className="animate-slideInRight space-y-2 py-2">
          <li className={url == '/policies-and-laws' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/policies-and-laws" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>DRR Policies and Laws</span>
            </Link>
          </li>
          <li className={url == '/learning-materials' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/learning-materials" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>Learning Materials</span>
            </Link>
          </li>
          <li className={url == '/drr-stats' ? 'bg-gray-200 rounded-full' : ''}>
            <Link to="/drr-stats" className="group flex w-full items-center rounded-lg p-2 pl-11 duration-300 hover:scale-105">
              <span className={navigation_text}>DRR Stats</span>
            </Link>
          </li>
        </ul>
      )}
    </li>

    {/* ABOUT */}
    <li className={url == '/about' ? 'bg-gray-200 rounded-full' : ''}>
      <Link to="/about" className="group flex items-center rounded-lg p-2 duration-300 hover:scale-105">
        <span className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}>
          About HANDA PILIPINAS
        </span>
      </Link>
    </li>

    {/* CONTACTS */}
    <li className={url == '/contacts' ? 'bg-gray-200 rounded-full' : ''}>
      <Link to="/contacts" className="group flex items-center rounded-lg p-2 duration-300 hover:scale-105">
        <span className={`flex-1 text-left whitespace-nowrap ${navigation_text}`}>
          Contacts
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
