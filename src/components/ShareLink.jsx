import React from 'react';
import { useLocation } from 'react-router-dom';

const ShareLink = () => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  console.log(currentUrl);

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'blue', textDecoration: 'underline' }}
    >
      Share on Facebook
    </a>
  );
};

export default ShareLink;
