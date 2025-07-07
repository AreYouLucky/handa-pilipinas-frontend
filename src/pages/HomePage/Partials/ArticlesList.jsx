import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineReadMore } from "react-icons/md";
import { slugText } from "../../../hooks/textSlug"
import { Link } from "react-router-dom";
import { formatDateShort } from "../../../hooks/dateFormatter";


function ArticlesList({ latest = [] }) {
  return (
    <section className="space-y-1 px-8 py-4 text-gray-800 md:px-2 md:pb-5">
      <div className="w-full border-b border-gray-400 pb-3">
        <h4 className="montserrat-bold flex items-center gap-x-2 text-lg font-extrabold">
          <IoNewspaperOutline className="text-2xl" />
          LATEST ARTICLES
        </h4>
      </div>
      {
        latest.slice(0, 4).map((item, i) => (
          <Link to={`/view-article/${slugText(item.title)}`} key={i} >
            <div className="flex w-full gap-4 border-b border-gray-400 py-3 duration-300 hover:scale-[1.03]">
              <div className="aspect-square w-[100px] flex-shrink-0 overflow-hidden rounded-md shadow-lg">
                <img
                  src={`/images/articles/${item.thumbnail}`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col justify-center">
                <h2 className="montserrat-bold text-sm leading-snug text-gray-800">
                  {item.title}
                </h2>
                <span className="montserrat-regular mt-1 text-start text-xs text-gray-600">
                  {formatDateShort(item.date_published)}
                </span>
              </div>
            </div>
          </Link>
        ))
      }



      <div className="mt-4 flex w-full justify-center">
        <Link to={`/press-release`}>
          <span className="montserrat-regular flex cursor-pointer items-center justify-center gap-x-2 rounded-full px-3 py-1 text-sm font-medium text-gray-700 duration-150 hover:border hover:bg-black hover:text-white md:inline-flex">
            View More <MdOutlineReadMore className="text-2xl" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ArticlesList;
