import DashboardLayout from '../../layouts/DashboardLayout'
import { data } from "../Data/data";
import { useState, useEffect } from 'react';
import { formatDateLong } from "../../hooks/dateFormatter"
import { MdBiotech } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { slugText } from '../../hooks/textSlug';
import { formatDateShort } from '../../hooks/dateFormatter';
import { Link } from 'react-router-dom';
import Framer from '../../components/Framer';

function VideoList() {
    const [highlight, setHighlight] = useState({});
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        const other = []
        data.forEach(item => {
            if (item.is_featured === 1 && item.file_type === 2) {
                setHighlight(item);
            } else if (item.file_type === 2) {
                other.push(item);
            }
        });

        setLatest(other);
    }, []);
    return (
        <DashboardLayout>
            <div className="w-full">
                <div className="m-auto w-full max-w-screen-2xl py-5 md:py-8 px-5">
                    <h1 className='text-center montserrat-bold p-5 border rounded-lg hidden md:block'>
                        VIDEOS
                    </h1>
                    <div className='w-full grid md:grid-cols-3 grid-cols-1 md:gap-8'>
                        <div className='w-full md:col-span-2'>
                            <Framer animation='fade-left'>
                                <h2 className="text-md montserrat-bold mb-4 flex rounded-full font-bold text-gray-700 md:text-xl">
                                    <MdBiotech className="text-xl md:text-2xl" />
                                    HIGHLIGHT VIDEO
                                </h2>
                                <article>
                                    <Link to={`/view-video/${slugText(highlight.title)}`} >
                                        <div className="group relative h-[300px] overflow-hidden rounded-xl border border-gray-400 md:h-[540px]">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
                                                style={{ backgroundImage: `url('/images/thumbnails/${highlight.thumbnail}')` }}
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
                                                        {formatDateLong(highlight.date_published)}
                                                    </span>
                                                </div>
                                                <div className="w-full p-5 bg-gray-900/60 rounded-lg">
                                                    <p className="montserrat-bold space-y-[-10px] text-sm leading-tight text-gray-50 md:text-2xl">
                                                        {highlight.title}
                                                    </p>
                                                    <p className="montserrat-regular mb-4 text-justify md:text-sm text-xs text-gray-300">
                                                        {highlight.excerpt}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            </Framer>
                        </div>
                        <Framer animation='fade-up'>
                            <div className='w-full'>
                                <h2 className="text-md montserrat-bold mt-5 mb-4 flex rounded-full py-1 font-bold text-gray-700 md:mt-0 md:text-lg">
                                    <MdOutlineFeaturedPlayList className="mr-2 text-xl md:text-2xl" />
                                    LATEST VIDEOS
                                </h2>
                                {
                                    latest.slice(0, 2).map((item, i) => (
                                        <Link to={`/view-video/${slugText(item.title)}`} key={i}>
                                            <article className="w-full md:px-2 mb-5" >
                                                <div className="relative h-[200px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[180px]">
                                                    <img
                                                        src={`/images/thumbnails/${item.thumbnail}`}
                                                        alt="News"
                                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                    <div className="absolute bottom-2 left-2">
                                                        <span className="rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs montserrat-bold">
                                                            {formatDateLong(item.date_published)}
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
                            </div>
                        </Framer>
                    </div>
                    <div className='border md:my-8 my-2 border-gray-300'>

                    </div>
                    <Framer animation='zoom-in'>
                        <div className='w-full'>
                            <h2 className="text-md montserrat-bold mt-5 mb-4 flex rounded-full py-1 font-bold text-gray-700 md:mt-0 md:text-lg">
                                <LiaPhotoVideoSolid className="mr-2 text-xl md:text-2xl" />
                                OTHER VIDEOS
                            </h2>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 montserrat-regular">
                                {
                                    latest.slice(2).map((item, i) => (
                                        <Link to={`/view-video/${slugText(item.title)}`} key={i}>
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

                            </div>
                        </div>
                    </Framer>

                </div>
            </div>
        </DashboardLayout >
    )
}

export default VideoList