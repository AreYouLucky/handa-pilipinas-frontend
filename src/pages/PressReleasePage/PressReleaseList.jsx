import { data } from "../Data/data";
import { useState, useEffect } from 'react';
import { formatDateLong } from "../../hooks/dateFormatter"
import { IoNewspaperOutline } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
import Framer from '../../components/Framer';
import { slugText } from '../../hooks/textSlug';
import { formatDateShort } from '../../hooks/dateFormatter';
import { Link } from 'react-router-dom';

function PressReleaseList() {
    const [highlight, setHighlight] = useState({});
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        const other = []
        data.forEach(item => {
            if (item.is_featured === 1 && item.file_type === 1) {
                setHighlight(item);
            } else if (item.file_type === 1) {
                other.push(item);
            }
        });
        other.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));

        setLatest(other);
    }, []);
    return (
        <>
            <div className="w-full">
                <div className="m-auto w-full max-w-screen-2xl py-5 md:py-8 px-5">
                    <h1 className='text-center montserrat-bold p-5 border rounded-lg hidden md:block'>
                        PRESS RELEASES
                    </h1>
                    <div className='w-full grid md:grid-cols-3 grid-cols-1 md:gap-8'>
                        <div className="relative group overflow-hidden rounded-xl md:col-span-2 flex items-center md:pr-10 mb-8 md:p-0">
                            <Framer animation='fade-left'>
                                <div className="relative flex-none w-full text-gray-700 z-10 ">
                                    <div className="group relative h-[200px] overflow-hidden rounded-xl border border-gray-400 md:h-[450px] md:p-5 p-2">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
                                            style={{
                                                backgroundImage: `url('/images/thumbnails/${encodeURIComponent(highlight.thumbnail)}')`,
                                            }}
                                        ></div>

                                        <div className=" absolute inline-flex gap-x-2 items-center rounded-full p-1 pr-6 border border-gray-400 bg-black  text-[9px] md:text-sm font-medium duration-150">
                                            <span className="inline-block rounded-full md:px-3 px-2 py-1 bg-[#FFCC49] text-gray-900 font-bold montserrat-bold ">
                                                HOT!
                                            </span>
                                            <p className="flex items-center font-bold text-white">{formatDateLong(highlight.date_published)}</p>
                                        </div>
                                    </div>
                                    <div className="w-full px-3">
                                        <h1 className="text-base text-gray-700 md:text-4xl acklin-font leading-8">
                                            {highlight.title}
                                        </h1>
                                        <p className="text-gray-600 montserrat-regular text-justify mb-4 text-sm md:text-base">
                                            {highlight.excerpt}
                                        </p>

                                        <div className="flex items-center gap-x-3 sm:text-sm">
                                            <Link to={`/view-article/${slugText(highlight.slug)}`}>
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
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Framer>
                        </div>
                        <Framer animation='zoom-in'>
                            <div className='w-full'>
                                <div className="w-full border-b border-gray-400 pb-3">
                                    <h4 className="montserrat-bold flex items-center gap-x-2 text-lg font-extrabold">
                                        <IoNewspaperOutline className="text-2xl" />
                                        RECENT ARTICLES
                                    </h4>
                                </div>
                                {
                                    latest.slice(0, 5).map((item, i) => (
                                        <Link to={`/view-article/${slugText(item.slug)}`} key={i} >
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
                            </div>
                        </Framer>
                    </div>
                    <div className='border my-8 border-gray-300 hidden md:block'>

                    </div>
                    <Framer animation='fade-right'>
                        <div className='w-full'>
                            <h2 className="text-md montserrat-bold mt-5 mb-4 flex rounded-full py-1 font-bold text-gray-700 md:mt-0 md:text-lg">
                                <GrArticle className="mr-2 text-xl md:text-2xl" />
                                OTHER ARTICLES
                            </h2>
                            {latest.length > 5 ?
                                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 montserrat-regular">
                                    {
                                        latest.slice(4).map((item, i) => (
                                            <Link to={`/view-article/${slugText(item.slug)}`} key={i}>
                                                <article className="w-full">
                                                    <div className="relative h-[100px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[200px]">
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
                                                    <p className="text-sm text-gray-700 md:px-2 md:text-justify">
                                                        {item.excerpt}
                                                    </p>
                                                </article>
                                            </Link>
                                        ))
                                    }

                                </div> :
                                <div className='w-full'>
                                    <h3 className='text-center montserrat-bold p-5 border rounded-lg  border-gray-300 text-gray-500'>
                                        Coming Soon!
                                    </h3>

                                </div>
                            }
                        </div>
                    </Framer>

                </div>
            </div>
        </>
    )
}

export default PressReleaseList