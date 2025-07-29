import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Framer from '../../components/Framer';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';

function Photos() {
    const images = [
        "/images/articles/DOST and the Legislature are working together on enabling policies on disaster risk reduction.jpg",
        "/images/articles/DOST stresses key elements to disaster resilience in the 2024 Handa Pilipinas.jpg",
        "/images/articles/pbbm.png",
        "/images/articles/Ready for adoption Pinoy-made tech on disaster risk reduction at Handa Pilipinas Expo 2023.jpg",
        "/images/articles/Science chief wants Filipinos to transform from disaster victims to victors through innovation.png",
        "/images/articles/1B.png",
        "/images/articles/1C.png",
        "/images/articles/1D.png",
        "/images/articles/3A.jpg",
        "/images/articles/3B.jpg",
        "/images/articles/3C.jpg",
        "/images/articles/3D.jpg",
    ];

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Format images for YARL
    const slides = images.map((src, i) => ({
        src,
        alt: `Gallery image ${i + 1}`,
    }));

    return (
        <div className="w-full">
            <div className="m-auto w-full max-w-screen-2xl md:py-5 px-5">
                <Framer animation='fade-up'>
                    <h1 className="text-center montserrat-bold text-2xl p-5 border rounded-lg">
                        Photos
                    </h1>
                </Framer>
                <Framer animation='fade-right'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-shrink-0 overflow-hidden mb-10">
                        {images.map((src, i) => (

                            <div key={i} className="grid gap-2  w-full flex-shrink-0 overflow-hidden rounded-md shadow-lg aspect-video cursor-pointer">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    src={src}
                                    alt={`Gallery image ${i + 1}`}
                                    loading="lazy"
                                    onClick={() => {
                                        setCurrentIndex(i);
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
            </div>
        </div>
    );
}

export default Photos;
