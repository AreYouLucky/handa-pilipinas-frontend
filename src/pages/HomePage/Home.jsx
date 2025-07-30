import ArticlesMainList from "./Partials/ArticlesMainList";
import VideosMainList from "./Partials/VideosMainList";
import { useState, useEffect } from "react";
import { data } from "../Data/data";
import Framer from "../../components/Framer";
import Partners from "./Partials/Partners";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FaBookOpen } from "react-icons/fa6";

function Home() {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    filterArticles();
    filterVideos();
  }, []);

  const filterVideos = () => {
    const filtered = data.filter(item => item.file_type === 2);
    setVideos(filtered);
  };

  const filterArticles = () => {
    const filtered = data.filter(item => item.file_type === 1);
    setArticles(filtered);
  };

  return (
    <>
      <div className="w-full">
        <Framer animation="fade-right">
          <ArticlesMainList articles={articles} />
        </Framer>
        <div className="m-auto w-full max-w-screen-2xl border-b border-gray-400"></div>
        <Framer animation="fade-left">
          <VideosMainList videos={videos} />
        </Framer>
        <div className="m-auto w-full max-w-screen-2xl border-b border-gray-400 my-8"></div>
        <Framer animation="fade-up">
          <h2 className="text-lg montserrat-bold my-4 flex rounded-full py-1 font-bold text-gray-700 md:text-2xl justify-center">
            <FaBookOpen className="text-2xl md:text-3xl mr-3" />
            REFERENCE FOR EMERGENCY AND DISASTER
          </h2>
          <div className="m-auto w-full max-w-screen-2xl max-h-[90vh] overflow-scroll  px-8 md:py-10 py-0 text-gray-800 md:px-2 my-5">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl="/pdf/RED_Book.pdf" defaultScale={1.4} />
            </Worker>
          </div>
        </Framer>
        <div className="m-auto w-full max-w-screen-2xl border-b border-gray-400 mt-5"></div>
        <Framer animation="fade-right">
          <Partners />
        </Framer>
      </div>
    </>
  );
}

export default Home;
