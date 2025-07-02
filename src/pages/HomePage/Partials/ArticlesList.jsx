import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineReadMore } from "react-icons/md";
function ArticlesList() {
  return (
    <section className="space-y-1 px-8 py-4 text-gray-800 md:px-2 md:pb-5">
      <div className="w-full border-b border-gray-400 pb-3">
        <h4 className="montserrat-bold flex items-center gap-x-2 text-lg font-extrabold">
          <IoNewspaperOutline className="text-2xl" />
          LATEST ARTICLES
        </h4>
      </div>

      <div className="flex w-full gap-4 border-b border-gray-400 py-3 duration-300 hover:scale-[1.03]">
        <div className="aspect-square w-[100px] flex-shrink-0 overflow-hidden rounded-md shadow-lg">
          <img
            src={`/images/sample_news/2.jpg`}
            alt="News"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-grow flex-col justify-center">
          <h2 className="montserrat-bold text-sm leading-snug text-gray-800">
            Disaster imagination can enhance disaster mitigation and resilience:
            DOST
          </h2>
          <span className="montserrat-regular mt-1 text-start text-xs text-gray-600">
            Feb 27, 2025
          </span>
        </div>
      </div>
      <div className="flex w-full gap-4 border-b border-gray-400 py-3 duration-300 hover:scale-[1.03]">
        <div className="aspect-square w-[100px] flex-shrink-0 overflow-hidden rounded-md shadow-lg">
          <img
            src={`/images/sample_news/download (1).jpg`}
            alt="News"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-grow flex-col justify-center">
          <h2 className="montserrat-bold text-sm leading-snug text-gray-800">
            OCD bats for passage of 'state of imminent disaster' bill
          </h2>
          <span className="montserrat-regular mt-1 text-start text-xs text-gray-600">
            Feb 26, 2025
          </span>
        </div>
      </div>
      <div className="flex w-full gap-4 border-b border-gray-400 py-3 duration-300 hover:scale-[1.03]">
        <div className="aspect-square w-[100px] flex-shrink-0 overflow-hidden rounded-md shadow-lg">
          <img
            src={`/images/sample_news/download.jpg`}
            alt="News"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-grow flex-col justify-center">
          <h2 className="montserrat-bold text-sm leading-snug text-gray-800">
            Why Philippines tops ranking of disaster risk countries?
          </h2>
          <span className="montserrat-regular mt-1 text-start text-xs text-gray-600">
            Feb 27, 2025
          </span>
        </div>
      </div>
      <div className="mt-4 flex w-full justify-center">
        <span className="montserrat-regular flex cursor-pointer items-center justify-center gap-x-2 rounded-full px-3 py-1 text-sm font-medium text-gray-700 duration-150 hover:border hover:bg-black hover:text-white md:inline-flex">
          View More <MdOutlineReadMore className="text-2xl" />
        </span>
      </div>
    </section>
  );
}

export default ArticlesList;
