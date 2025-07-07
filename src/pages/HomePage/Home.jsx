import DashboardLayout from "../../layouts/DashboardLayout";
import ArticlesMainList from "./Partials/ArticlesMainList";
import VideosMainList from "./Partials/VideosMainList";
import { useState, useEffect } from "react";
import { data } from "../Data/data";

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
    <DashboardLayout>
      <div className="w-full">
        <ArticlesMainList articles={articles} />
        <div className="m-auto w-full max-w-screen-2xl border-b border-gray-400"></div>
        <VideosMainList videos={videos} />
      </div>
    </DashboardLayout>
  );
}

export default Home;
