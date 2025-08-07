import { MdOutlineReadMore } from "react-icons/md";
import { formatDateShort } from "../../../hooks/dateFormatter"
import { Link } from "react-router-dom";
import { slugText } from "../../../hooks/textSlug";

function VideosMiniList({ latest = [] }) {

  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:gap-4 montserrat-regular">
        {
          latest.slice(0, 4).map((item, i) => (
            <Link to={`/view-video/${slugText(item.slug)}`} key={i}>
              <article className="w-full md:px-2" >
                <div className="relative h-[100px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[150px]">
                  <img
                    src={`/images/thumbnails/${item.thumbnail}`}
                    alt="News"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs montserrat-bold">
                      {formatDateShort(item.date_published)}
                    </span>
                  </div>
                </div>
                <h2 className="montserrat-bold mt-2 flex rounded-full text-xs font-bold text-gray-900 md:px-2 md:text-sm">
                  {item.title}
                </h2>
                <p className="md:text-sm text-xs text-gray-700 md:px-2 md:text-justify">
                  {item.excerpt}
                </p>
              </article>
            </Link>
          ))
        }

      </div>
      <Link to={'/videos'}>
        <div className="mt-4 flex w-full justify-center">
          <span className="montserrat-regular flex cursor-pointer items-center justify-center gap-x-2 rounded-full border px-3 py-1 text-sm font-medium text-gray-700 duration-150 hover:bg-black hover:text-white md:inline-flex">
            View More <MdOutlineReadMore className="text-2xl" />
          </span>
        </div>
      </Link>
    </section>
  );
}

export default VideosMiniList;
