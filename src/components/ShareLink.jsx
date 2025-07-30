import { Helmet } from 'react-helmet-async'; // ✅ Use async version
import { FaSquareFacebook } from "react-icons/fa6";

const ShareLink = ({ article }) => {
  const currentUrl = window.location.href;

  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <>
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta
          property="og:image"
          content={`${window.location.origin}/images/articles/${article.thumbnail}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>

      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className='flex mt-3 bg-blue-500 w-fit px-3 py-2 rounded-md text-white montserrat-bold text-sm items-center hover:scale-105 duration-300'>
          <FaSquareFacebook className='text-2xl mr-2' />
          Share on Facebook
        </span>
      </a>
    </>
  );
};

export default ShareLink;
