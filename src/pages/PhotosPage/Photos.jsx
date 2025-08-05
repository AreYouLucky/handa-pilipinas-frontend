import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Framer from '../../components/Framer';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { images } from '../Data/images';
import { album } from '../Data/album';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';

function Photos() {
    const { slug } = useParams();
    const [currentAlbum, setCurrentAlbum] = useState({});
    const [imageList, setImageList] = useState([])
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(imageList.length / imagesPerPage);

    const paginatedImages = imageList.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    );


    const slides = imageList.map((item, i) => ({
        src: `/images/gallery/${slug}/${item.img}`,
        alt: `Gallery image ${i + 1}`,
    }));

    useEffect(() => {
        const currentAlbum = album.filter(item => item.slug_album === slug);
        setCurrentAlbum(currentAlbum);
        const imagesFiltered = images.filter(item => item.src === slug);
        setImageList(imagesFiltered)
    }, [slug]);



    return (
        <div className="w-full">
            <div className="m-auto w-full max-w-screen-2xl md:pb-10 md:pt-5 px-5">
                <Framer animation='fade-up'>
                    <h1 className="text-center montserrat-bold text-2xl p-5 border rounded-lg">
                        Photos
                    </h1>
                </Framer>
                <Framer animation='fade-right'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-shrink-0 overflow-hidden mb-10">
                        {paginatedImages.map((item, i) => (
                            <div key={i} className="grid gap-2 w-full flex-shrink-0 overflow-hidden rounded-md shadow-lg aspect-video cursor-pointer">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    src={`/images/gallery/${slug}/${item.img}`}
                                    alt={`${currentAlbum.title} ${i + 1}`}
                                    loading="lazy"
                                    onClick={() => {
                                        setCurrentIndex((currentPage - 1) * imagesPerPage + i);
                                        setOpen(true);
                                    }}
                                />
                            </div>
                        ))}

                    </div>
                </Framer>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={currentIndex}
                    slides={slides}
                    plugins={[Thumbnails, Zoom]}
                />
                <div className="flex justify-center items-center space-x-2 mt-4 montserrat-regular gap-1">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1  bg-red-600 text-white hover:bg-red-800  rounded-full disabled:opacity-50 cursor-pointer"
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`cursor-pointer px-3 py-1  rounded-full hover:bg-red-800 hover:text-white ${currentPage === i + 1 ? 'bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-red-600 text-white hover:bg-red-800  rounded-full disabled:opacity-50 cursor-pointer"
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Photos;
