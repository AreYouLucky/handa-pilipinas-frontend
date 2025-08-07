import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { FiInfo } from "react-icons/fi";

function MiddleNav() {
  const location = useLocation();
  const url = location.pathname;

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const navItemStyle =
    "flex items-center gap-2 px-4 py-2 text-base text-gray-700 hover:text-red-400 transition duration-200 montserrat-bold";
  const highlight = "text-red-500 font-semibold bg-gray-200 ";

  const renderLink = (to, label, Icon) => (

    <Link
      to={to}
      onClick={() => setOpenDropdown(null)}
    >
      <div className={`${navItemStyle} ${url === to ? highlight : ""}`}>
        {Icon && <Icon className="text-xl" />}
        {label}
      </div>
    </Link>

  );

  return (
    <section className="relative z-[9999] hidden w-full justify-center md:flex">
      <div className="w-full py-4 px-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-4 text-slate-800">
            {/* ABOUT */}
            {renderLink("/", "HOME", IoHomeOutline)}

            {/* ABOUT */}
            {renderLink("/about", "ABOUT", FiInfo)}

            {/* FEATURED TECHNOLOGIES */}
            {renderLink("/technologies", "FEATURED TECHNOLOGIES", GrTechnology)}

            {/* RESOURCES DROPDOWN
            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className={`${navItemStyle} ${url.startsWith("/policies-and-laws") || url.startsWith("/learning-materials") || url.startsWith("/drr-stats") ? highlight : ""}`}
              >
                <MdOutlinePermMedia className="text-xl" />
                RESOURCES
                <svg
                  className={`w-2.5 h-2.5 ml-2 transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    {renderLink("/policies-and-laws", "DRR Policies and Laws")}
                    {renderLink("/learning-materials", "Learning Materials")}
                    {renderLink("/drr-stats", "DRR Stats")}
                  </ul>
                </div>
              )}
            </div> */}

            {/* MEDIA DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("media")}
                className={`${navItemStyle} ${url.startsWith("/press-release") || url.startsWith("/speeches") || url.startsWith("/archives") || url.startsWith("/photos")
                  || url.startsWith("/videos") ? highlight : ""
                  }`}
              >
                <IoNewspaperOutline className="text-xl" />
                MEDIA
                <svg
                  className={`w-2.5 h-2.5 ml-2 transition-transform duration-200 ${openDropdown === "media" ? "rotate-180" : ""
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              {openDropdown === "media" && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    {renderLink("/press-release", "Press Release")}
                    {/* {renderLink("/speeches", "Speeches")} */}
                    {renderLink("/archives", "Archives")}
                    {renderLink("/photos", "Photos")}
                    {renderLink("/videos", "Videos")}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleNav;
