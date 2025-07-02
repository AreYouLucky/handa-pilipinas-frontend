import VideosHightlight from "./VideosHightlight";
import VideosMiniList from "./VideosMiniList";
import { MdBiotech } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
function VideosMainList() {
  return (
    <section className="flex justify-center bg-white">
      <div className="grid-col-1 grid w-full max-w-screen-2xl gap-x-8 px-6 py-8 md:grid-cols-2 md:gap-x-16 md:px-0 md:py-10">
        <div className="">
          <h2 className="text-md montserrat-bold mb-4 flex rounded-full py-1 font-bold text-gray-700 md:text-xl">
            <MdBiotech className="text-xl md:text-2xl" />
            HIGHLIGHTED TECHNOLOGY
          </h2>
          <VideosHightlight></VideosHightlight>
        </div>
        <div className="w-full">
          <h2 className="text-md montserrat-bold mt-10 mb-4 flex rounded-full py-1 font-bold text-gray-700 md:mt-0 md:text-lg">
            <MdOutlineFeaturedPlayList className="mr-2 text-xl md:text-2xl" />
            FEATURED TECHNOLOGIES
          </h2>
          <VideosMiniList />
        </div>
      </div>
    </section>
  );
}

export default VideosMainList;
