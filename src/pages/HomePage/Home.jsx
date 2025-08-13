import ArticlesMainList from "./Partials/ArticlesMainList";
import VideosMainList from "./Partials/VideosMainList";
import { useState, useEffect } from "react";
import { data } from "../Data/data";
import Framer from "../../components/Framer";
import Partners from "./Partials/Partners";
import { FaBookOpen } from "react-icons/fa6";
import LearningMaterials from "./Partials/LearningMaterials";

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
        <Framer animation="fade-up">
          <div className="mx-auto w-full max-w-screen-2xl flex justify-center flex-col items-center my-7 px-4 border-t border-gray-400 py-4">
            <div>
              <h2 className="text-sm montserrat-bold my-4 flex items-center rounded-full py-1 font-bold text-gray-700 md:text-2xl justify-center w-full">
                <FaBookOpen className="text-2xl md:text-3xl mr-3" />
                REFERENCE BOOKS
              </h2>
            </div>
            <LearningMaterials />
          </div>
        </Framer>
        <Framer animation="fade-right">
          <Partners />
        </Framer>
      </div>
    </>
  );
}

export default Home;
