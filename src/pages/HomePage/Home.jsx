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
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
function Home() {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    filterArticles();
    filterVideos();
  }, []);

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

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
          <div className="m-auto w-full max-w-screen-2xl">

            <div className="flex justify-end gap-2 p-2 border-b border-gray-200 bg-gray-50">
              <ZoomOutButton />
              <ZoomInButton />
            </div>
          </div>
          <div className="m-auto w-full max-w-screen-2xl max-h-[80vh] overflow-scroll  px-8 py-0 text-gray-800 md:px-2 my-5">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl="/pdf/RED_Book.pdf"
                plugins={[zoomPluginInstance]}
                defaultScale={1.25} />
            </Worker>
          </div>
        </Framer>
        <div className="m-auto w-full max-w-screen-2xl border-b border-gray-400 mt-16"></div>
        <Framer animation="fade-right">
          <Partners />
        </Framer>
      </div>
    </>
  );
}

export default Home;
