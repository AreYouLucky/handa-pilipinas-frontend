import ArticlesMainList from "./Partials/ArticlesMainList";
import VideosMainList from "./Partials/VideosMainList";
import { useState, useEffect } from "react";
import { data } from "../Data/data";
import Framer from "../../components/Framer";
import Partners from "./Partials/Partners";

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
        <div className="m-auto w-full max-w-screen-2xl border-b border-gray-400"></div>
        <Framer animation="fade-right">
          <Partners />
        </Framer>
      </div>
    </>
  );
}

export default Home;
