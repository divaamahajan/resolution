import React from 'react';

const VideoThumbnail = ({ imageObject, videoLink }) => {
  const playVideo = () => {
    // Redirect to the provided video link when the image is clicked
    window.location.href = videoLink;
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
      onClick={playVideo}
    >
      <img
        src={imageObject.src}
        alt={imageObject.alt}
        className="w-full h-auto transform transition duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white opacity-70 hover:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </div>
    </div>
  );
};

export default VideoThumbnail;
