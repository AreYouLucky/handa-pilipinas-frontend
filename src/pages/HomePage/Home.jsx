import DashboardLayout from "../../layouts/DashboardLayout";
import ArticlesMainList from "./Partials/ArticlesMainList";
import VideosMainList from "./Partials/VideosMainList";
function Home() {
  return (
    <DashboardLayout>
      <div className="w-full">
        <ArticlesMainList></ArticlesMainList>
        <div className="m-auto w-full max-w-screen-2xl border-b border-gray-400"></div>
        <VideosMainList></VideosMainList>
      </div>
    </DashboardLayout>
  );
}

export default Home;
