import React from 'react';

const YouTubeThumbnailEmbed = ({ videoId }) => {
  // Define a constant aspect ratio (width / height)
  const aspectRatio = 16 / 9; // Typical widescreen 16:9 aspect ratio


  return (
    <div className="w-full max-w-4xl mx-auto shadow-md">
      <iframe
        className="w-full"
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeThumbnailEmbed;
