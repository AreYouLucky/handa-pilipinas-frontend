import { MdOutlineReadMore } from "react-icons/md";
function VideosMiniList() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:gap-4">
        <article className="w-full md:px-2">
          <div className="relative h-[100px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[150px]">
            <img
              src={`/images/sample_news/bohol-rdc-dpwh-1024x680.jpg`}
              alt="News"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-1 right-1 md:top-2 md:right-2">
              <span className="rounded-lg bg-[#24242483] px-1 py-1 text-[10px] text-gray-300 md:text-sm">
                June 24, 2025
              </span>
            </div>
            <div className="absolute bottom-2 left-2">
              <span className="rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs">
                Technology
              </span>
            </div>
          </div>
          <h2 className="montserrat-bold mt-2 flex rounded-full text-xs font-bold text-gray-900 md:px-2 md:text-sm">
            RDC Central Visayas seeks disaster-resilient technology in houses,
            buildings
          </h2>
          <p className="text-sm text-gray-700 md:px-2 md:text-justify">
            DPWH Regional Director Engr. Danilo Villa Jr. (left) commits to
            conduct further studies on the technology ...
          </p>
        </article>
        <article className="w-full md:px-2">
          <div className="relative h-[100px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[150px]">
            <img
              src={`/images/sample_news/bicol-danas.jpg`}
              alt="News"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-1 right-1 md:top-2 md:right-2">
              <span className="rounded-lg bg-[#24242483] px-1 py-1 text-[10px] text-gray-300 md:text-sm">
                February 12, 2025
              </span>
            </div>
            <div className="absolute bottom-2 left-2">
              <span className="mr-1 rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs">
                Earthquake
              </span>
              <span className="rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs">
                Technology
              </span>
            </div>
          </div>
          <h2 className="montserrat-bold mt-2 flex rounded-full text-xs font-bold text-gray-900 md:px-2 md:text-sm">
            Phivolcs launches Bicolano sourcebook to improve disaster
            preparedness
          </h2>
          <p className="text-sm text-gray-700 md:px-2 md:text-justify">
            The two-year "DANAS" project titled, "Earthquake, Tsunami, and
            Volcano Disaster Narratives for Experiential ...
          </p>
        </article>
        <article className="w-full md:px-2">
          <div className="relative h-[100px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[150px]">
            <img
              src={`/images/sample_news/1731749749408Handy-tech-gadgets-16112024.avif`}
              alt="News"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-1 right-1 md:top-2 md:right-2">
              <span className="rounded-lg bg-[#24242483] px-1 py-1 text-[10px] text-gray-300 md:text-sm">
                Nov 16, 2024
              </span>
            </div>
            <div className="absolute bottom-2 left-2">
              <span className="mr-1 rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs">
                Preparedness
              </span>
              <span className="rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs">
                Gadgets
              </span>
            </div>
          </div>
          <h2 className="montserrat-bold mt-2 flex rounded-full text-xs font-bold text-gray-900 md:px-2 md:text-sm">
            Handy tech gadgets to have during natural disasters
          </h2>
          <p className="text-sm text-gray-700 md:px-2 md:text-justify">
            With typhoons and severe storms slamming the country in quick
            succession, being prepared and having ...
          </p>
        </article>
        <article className="w-full md:px-2">
          <div className="relative h-[100px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[150px]">
            <img
              src={`/images/sample_news/AP19336438353847-copy-780x470.jpg`}
              alt="News"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-1 right-1 md:top-2 md:right-2">
              <span className="rounded-lg bg-[#24242483] px-1 py-1 text-[10px] text-gray-300 md:text-sm">
                July 10, 2024
              </span>
            </div>
            <div className="absolute bottom-2 left-2">
              <span className="mr-1 rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs">
                Calamities
              </span>
            </div>
          </div>
          <h2 className="montserrat-bold mt-2 flex rounded-full text-xs font-bold text-gray-900 md:px-2 md:text-sm">
            Philippines enhancing disaster preparedness, response capabilities
          </h2>
          <p className="text-sm text-gray-700 md:px-2 md:text-justify">
            The Philippines is ramping up preparedness efforts ahead of La Niña
            weather conditions and other natural ...
          </p>
        </article>
      </div>
      <div className="mt-4 flex w-full justify-center">
        <span className="montserrat-regular flex cursor-pointer items-center justify-center gap-x-2 rounded-full border px-3 py-1 text-sm font-medium text-gray-700 duration-150 hover:bg-black hover:text-white md:inline-flex">
          View More <MdOutlineReadMore className="text-2xl" />
        </span>
      </div>
    </section>
  );
}

export default VideosMiniList;
