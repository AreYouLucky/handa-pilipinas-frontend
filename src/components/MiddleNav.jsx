import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MiddleNav() {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();
  const url = location.pathname;

  const navigation_text =
    " block py-4 px-3 border-b md:border-0 md:p-0  hover:bg-gray-700 hover:text-gray-100 hover:scale-105 duration-300 md:hover:bg-transparent border-gray-700 montserrat-bold text-xl ";

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  const closeMegaMenu = () => {
    setMegaMenuOpen(false);
  };
  const hightlight = " text-yellow-300";

  return (
    <section className="relative z-[9999] hidden w-full justify-center border-y border-gray-100 bg-[#ED1E24] md:flex">
      <div className="relative w-full max-w-screen-2xl px-6 py-6 md:px-8">
        <nav className="hidden w-full items-center justify-between md:flex">
          <div className="flex w-full items-center justify-between space-x-8 font-medium text-white">
            <div className="relative">
              <button
                onClick={toggleMegaMenu}
                aria-expanded={isMegaMenuOpen}
                className={`flex items-center gap-2 text-xl transition`}
              >
                <span className={navigation_text}>MEDIA</span>
                <svg
                  className={`h-3 w-3 transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""
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
            </div>
            <div className={url == '/activities' ? hightlight : ' '}>
              <Link to="/activities" className={navigation_text}>
                GENERAL PROGRAM OF ACTIVITIES
              </Link>
            </div>
            <div className={url == '/technologies' ? hightlight : ' '}>
              <Link to="/technologies" className={navigation_text}>
                FEATURED TECHNOLOGIES
              </Link>
            </div>
            <div className={url == '/videos' ? hightlight : ' '}>
              <Link to="/videos" className={navigation_text}>
                VIDEOS
              </Link>
            </div>
            <div className={url == '/about' ? hightlight : ' '}>
              <Link to="/about" className={navigation_text}>
                ABOUT
              </Link>
            </div>
          </div>
        </nav>

        {isMegaMenuOpen && (
          <div onClick={closeMegaMenu} className="fixed inset-0 z-40"></div>
        )}

        <div
          className={`absolute top-full left-0 z-50 w-full transform transition-all duration-300 ease-in-out ${isMegaMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
            }`}
        >
          <div className="z-50 rounded-b-lg bg-[#ed1e25ef] shadow-lg">
            <div className="mx-auto grid w-full grid-cols-1 gap-4 px-10 py-5 text-white sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: "PRESS RELEASE",
                  desc: "Nationwide campaign on disaster preparedness and resilience.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 11H5m14 0a2 2 0 110 4H5a2 2 0 110-4m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2"
                      />
                    </svg>
                  ),
                  src: "/press-release"
                },
                {
                  title: "SPEECHES",
                  desc: "Speeches and remarks from key events.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-1-4h.01M4 6h16M4 10h16M4 14h16"
                      />
                    </svg>
                  ),
                  src: "/speeches"
                },
                {
                  title: "ARCHIVES",
                  desc: "Past Handa Pilipinas events and records.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                  ),
                  src: "/archives"
                },
              ].map((item, i) => (
                <Link to={item.src} key={i} >
                  <div
                    key={item.title}
                    className={`rounded-xl border p-4 duration-300 hover:scale-105 hover:border-white hover:bg-gray-800 ${url === item.src ? 'bg-gray-700' : ''
                      }`}
                  >
                    <span
                      href="#"
                      className="block rounded-lg p-3"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-semibold">{item.title}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleNav;
