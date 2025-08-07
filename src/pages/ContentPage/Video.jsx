import { useParams, Link } from "react-router-dom";
import { data } from "../Data/data";
import { useState, useEffect } from 'react';
import { slugText } from "../../hooks/textSlug";
import { formatDateLong, formatDateShort } from "../../hooks/dateFormatter";
import { MdOutlineReadMore } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import Framer from "../../components/Framer";
import ShareLink from "../../components/ShareLink";


function Video() {

  const { slug } = useParams();
  const title = decodeURIComponent(slug || "").replace(/-/g, " ");
  const [video, setVideo] = useState({});
  const [otherVideos, setOthersVideos] = useState([]);

  const fbVideoUrl = video.youtube_url;
  const encodedUrl = encodeURIComponent(fbVideoUrl);

  const iframeHtml = `
  <iframe 
    src="https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=500" 
    height="520"
    style="border:none;overflow:hidden" 
    scrolling="no" 
    frameborder="0" 
    allowfullscreen="true" 
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
  </iframe>
`;

  useEffect(() => {
    if (!slug) return;

    const other = [];
    const normalizedTitle = title.toLowerCase();
    data.forEach(item => {
      if (item.slug.toLowerCase() === normalizedTitle) {
        setVideo(item);
      } else if (item.file_type === 2) {
        other.push(item);
      }
    });
    other.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
    setOthersVideos(other);
  }, [slug, title]);
  return (
    <>
      <div className="w-full">
        <div className="m-auto w-full max-w-screen-2xl md:py-12 py-6 px-5">
          <Framer animation="fade-up">
            <div className="w-full justify-center flex rounded-lg bg-gray-800">
              {video.material_type === 'Reels' ? (
                <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
              ) : video.material_type === 'Watch' ? (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      overflow: 'hidden'
                    }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Video"
                  />
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <p className="montserrat-bold space-y-[-10px] text-xl leading-tight text-gray-800 md:text-2xl mt-4">
                {video.title}
              </p>

              <span className=" text-gray-500 montserrat-regular text-sm">
                {formatDateLong(video.date_published)}
              </span>
              <p className="montserrat-regular mb-4 text-justify text-base text-gray-500">
                {video.content}
              </p>
              {/* <ShareLink article={video} /> */}
            </div>
          </Framer>

          <div className="my-5 w-full border-[.1px] border-gray-300">

          </div>
          <Framer animation="fade-left">
            <div className="w-full">
              <h2 className="text-md montserrat-bold mt-5 mb-4 flex rounded-full py-1 font-bold text-gray-700 md:mt-0 md:text-lg">
                <MdOutlineFeaturedPlayList className="mr-2 text-xl md:text-2xl" />
                RECENT VIDEOS
              </h2>
              <section>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 montserrat-regular">
                  {
                    otherVideos.slice(0, 8).map((item, i) => (
                      <Link to={`/view-video/${slugText(item.title)}`} key={i}>
                        <article className="w-full">
                          <div className="relative h-[100px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-400 shadow-lg md:h-[150px]">
                            <img
                              src={`/images/thumbnails/${item.thumbnail}`}
                              alt="News"
                              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute bottom-2 left-2">
                              <span className="rounded-md bg-[#ffffffa2] px-2 py-1 text-[10px] font-semibold text-gray-800 md:text-xs montserrat-bold">
                                {formatDateShort(item.date_published)}
                              </span>
                            </div>
                          </div>
                          <h2 className="montserrat-bold mt-2 flex rounded-full text-xs font-bold text-gray-900 md:px-2 md:text-sm">
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-700 md:px-2 md:text-justify">
                            {item.excerpt}
                          </p>
                        </article>
                      </Link>
                    ))
                  }

                </div>
                <Link to={'/videos'}>
                  <div className="mt-8 flex w-full justify-center">
                    <span className="montserrat-regular flex cursor-pointer items-center justify-center gap-x-2 rounded-full border px-3 py-1 text-sm font-medium text-gray-700 duration-150 hover:bg-black hover:text-white md:inline-flex">
                      View More <MdOutlineReadMore className="text-2xl" />
                    </span>
                  </div>
                </Link>
              </section>
            </div>
          </Framer>
        </div>
      </div>
    </>
  )
}

export default Video