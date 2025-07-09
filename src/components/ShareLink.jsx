import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { FaSquareFacebook } from "react-icons/fa6";

const ShareLink = ({ article }) => {
  const location = useLocation();
  const currentUrl = window.location.href;

  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta
          property="og:image"
          content={`${window.location.origin}/images/articles/${article.image}`}
        />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className='flex mt-8 bg-blue-600 w-fit px-3 py-2 rounded-md text-white montserrat-bold text-sm items-center'>
          <FaSquareFacebook className='text-2xl mr-2' />
          Share on Facebook
        </span>
      </a>
    </>
  );
};

export default ShareLink;
