import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { album } from '../Data/album';
import { formatDateLong } from "../../hooks/dateFormatter"
import { IoMdImages } from "react-icons/io";
import Framer from '../../components/Framer';

function PhotoAlbum() {
    const [slidesPerView, setSlidesPerView] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const getSlidesPerView = () => {
            const width = window.innerWidth;
            return width < 1020 ? 1 : 3;
        };

        const updateSlides = () => {
            setSlidesPerView(getSlidesPerView());
        };

        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);

    if (slidesPerView === null) return null;

    return (
        <div className='w-full m-auto max-w-screen-2xl pt-5 md:pt-16 md:pb-10 px-5'>
            <Framer animation="fade-right">
                <div className="text-center montserrat-bold text-2xl p-6 mb-8 border rounded-lg ">
                    Event Gallery
                    <p className="text-sm montserrat-regular text-gray-500 mt-1">
                        Explore photos from the Handa Pilipinas exhibit showcasing innovative technologies and efforts in disaster risk reduction and resilience across the Philippines.
                    </p>
                </div>
            </Framer>
            <Framer animation="fade-up">
                <Swiper
                    key={slidesPerView}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => {
                        const realIndex = swiper.realIndex;
                        setActiveIndex(realIndex);
                    }}
                    pagination={false}
                    modules={[Pagination, Autoplay]}
                    className="photo-swiper"
                >
                    {album.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="group relative h-80 overflow-hidden rounded-lg  flex items-center justify-center shadow-lg">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
                                    style={{ backgroundImage: `url('/images/gallery/${item.slug_album}/${item.highlight_img}')` }}
                                ></div>
                                <div className={`absolute inset-0 z-0 bg-red-500/60 transition-all duration-500  ${activeIndex !== i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
                                <div className={`inset-0 z-20  w-full py-2 px-10  ${activeIndex === i ? 'opacity-0' : 'opacity-100 pointer-events-none'}`}>
                                    <p className='montserrat-bold text-center text-lg text-gray-50 '>
                                        {item.title}
                                    </p>
                                    <p className='montserrat-regular text-center text-sm text-gray-200'>
                                        {formatDateLong(item.date)}
                                    </p>
                                </div>

                                <div className={`
                                     w-fit flex items-center z-40 absolute bottom-0 left-0 text-xs bg-slate-800/80 px-2 py-1 text-white rounded-tr-lg
                                    transition-all duration-500 ease-in-out montserrat-bold 
                                    ${activeIndex === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                `}>
                                    <IoMdImages className='text-xl mr-2' /> View <span className='text-base px-1 text-red-500'> {item.numbers} </span> more images
                                </div>

                            </div>
                            <div
                                className={`
                                     w-full pt-5
                                    transition-all duration-500 ease-in-out 
                                    ${activeIndex === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                `}
                            >
                                <p className='montserrat-bold text-center text-md'>
                                    {item.title}
                                </p>
                                <p className='montserrat-regular text-center text-[11px] text-gray-600'>
                                    {formatDateLong(item.date)}
                                </p>
                                <p className='montserrat-regular text-center text-[12px] mt-1 text-gray-500'>
                                    {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Framer>

            <style jsx="true">{`
                .photo-swiper .swiper-slide {
                    transition: transform 0.3s ease;
                    transform: scale(0.8);
                }
                .photo-swiper .swiper-slide.swiper-slide-active {
                    transform: scale(1.2);
                    z-index: 10;
                }
                .photo-swiper{
                    padding: 45px;
                }
            `}</style>
        </div>
    );
}

export default PhotoAlbum;
