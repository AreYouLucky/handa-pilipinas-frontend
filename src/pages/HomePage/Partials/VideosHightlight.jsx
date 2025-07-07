import { FaFireAlt } from "react-icons/fa";
import {formatDateLong} from "../../../hooks/dateFormatter"
function VideosHightlight({hightlight}) {
  return (
    <article>
      <div className="group relative h-[300px] overflow-hidden rounded-xl border border-gray-400 md:h-[540px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
          style={{ backgroundImage: `url('/images/thumbnails/${hightlight.thumbnail}')` }}
        ></div>
        <div className="absolute inset-0 z-0 bg-black/20"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 hover:bg-white text-gray-800 mt-[-100px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <div className="relative z-20 flex h-[300px]  flex-col justify-between p-2 text-white md:h-[540px] md:p-6">
          <div className="w-fit items-center gap-x-2 rounded-full border border-gray-50 p-1 text-sm font-medium duration-150">
            <span className="inline-block rounded-full bg-[#FFCC49] px-3 py-1 font-bold text-gray-900 montserrat-bold">
              {formatDateLong(hightlight.date_published)}
            </span>
          </div>
          <div className="w-full p-5 bg-gray-900/60 rounded-lg">
            <p className="montserrat-bold space-y-[-10px] text-sm leading-tight text-gray-50 md:text-2xl">
              {hightlight.title}
            </p>
            <p className="montserrat-regular mb-4 text-justify md:text-sm text-xs text-gray-300">
              {hightlight.excerpt}
            </p>
          </div>
        </div>
      </div>
    </article>

  );
}

export default VideosHightlight;
