import { FaFireAlt } from "react-icons/fa";
function VideosHightlight() {
  return (
    <article>
      <div className="group relative h-[300px] overflow-hidden rounded-xl border border-gray-400 md:h-[540px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
          style={{ backgroundImage: "url('/images/sample_news/tech.jpg')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        <div className="relative z-10 flex h-[300px] max-w-2xl flex-col justify-between p-4 text-white md:h-[540px] md:p-8">
          <div className="w-fit items-center gap-x-2 rounded-full border border-gray-50 p-1 text-sm font-medium duration-150">
            <span className="inline-block rounded-full bg-[#FFCC49] px-3 py-1 font-bold text-gray-900">
              Technology
            </span>
          </div>
          <div className="w-full px-3">
            <p className="acklin-font space-y-[-10px] text-xl leading-tight text-gray-50 md:text-2xl">
              State-of-the-art vehicle boosts C. Luzon's rescue capabilities
            </p>
            <p className="montserrat-regular mb-4 text-justify text-sm text-gray-300">
              January 29,2024
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default VideosHightlight;
