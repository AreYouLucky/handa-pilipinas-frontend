import { FaSquareFacebook } from "react-icons/fa6";

const ShareLink = ({ article, slug }) => {
  const currentUrl = window.location.origin;

  const previewUrl = new URL(currentUrl+'/api/og-preview');
  previewUrl.searchParams.append("title", article.title);
  previewUrl.searchParams.append("excerpt", article.excerpt);
  previewUrl.searchParams.append("image", article.thumbnail);
  previewUrl.searchParams.append("slug", slug);

  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(previewUrl.toString())}`;

  return (
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
  );
};

export default ShareLink;
