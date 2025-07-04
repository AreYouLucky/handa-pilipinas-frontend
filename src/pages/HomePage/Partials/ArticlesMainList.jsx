import ArticlesList from "./ArticlesList"
import { useEffect,useState } from "react";
import {formatDateLong} from "../../../hooks/dateFormatter"


function ArticlesMainList({articles=[]}) {
  const [highlight, setHighlight] = useState({});
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    let highlights = [];
    const otherArticles = [];

    articles.forEach(item => {
      if (item.is_featured === 1) {
        highlights = item;
      } else {
        otherArticles.push(item);
      }
    });

    setHighlight(highlights);
    setLatest(otherArticles);
  }, [articles]);

    return (
        <section className="py-5">
            <div className="max-w-screen-2xl mx-auto md:py-12 py-4 md:pb-1 text-gray-50 grid md:grid-cols-3 md:gap-x-20">
                <div className="relative group overflow-hidden rounded-xl md:col-span-2 flex items-center md:pr-10 p-5 md:p-0">
                    <div className="relative flex-none w-full text-gray-700 z-10 ">
                        <div className="group relative h-[200px] overflow-hidden rounded-xl border border-gray-400 md:h-[450px] md:p-5 p-2">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
                                style={{ backgroundImage: `url('/images/thumbnails/${highlight.thumbnail}')` }}
                            ></div>

                            <div className=" absolute inline-flex gap-x-2 items-center rounded-full p-1 pr-6 border border-gray-400 bg-black  text-[9px] md:text-sm font-medium duration-150">
                                <span className="inline-block rounded-full md:px-3 px-2 py-1 bg-[#FFCC49] text-gray-900 font-bold montserrat-bold ">
                                    HOT!
                                </span>
                                <p className="flex items-center font-bold text-white">{formatDateLong(highlight.date_published)}</p>
                            </div>
                        </div>
                        <div className="w-full px-3">
                            <h1 className="text-mb text-gray-700 md:text-4xl acklin-font leading-8">
                                {highlight.title}
                            </h1>
                            <p className="text-gray-600 montserrat-regular text-justify mb-4 text-base">
                                {highlight.excerpt}
                            </p>

                            <div className="flex items-center gap-x-3 sm:text-sm">
                                <span className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-[#262626] duration-150 hover:bg-gray-900 rounded-full md:inline-flex montserrat-bold border border-white text-base cursor-pointer">
                                    Read Article
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full block md:hidden border-b my-5"></div>
                <div>
                    <ArticlesList latest={latest}></ArticlesList>
                </div>
            </div>
        </section>
    )
}

export default ArticlesMainList