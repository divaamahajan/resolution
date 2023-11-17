import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  // Define a constant aspect ratio (width / height)
  const aspectRatio = 16 / 9; // Typical widescreen 16:9 aspect ratio

  // Calculate the width based on the height and aspect ratio
  const calculatedWidth = 400 * aspectRatio; // Height * Aspect Ratio

  return (
    <div className="w-full max-w-4xl mx-auto shadow-md">
      <iframe
        className="w-full"
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        style={{
          width: `${calculatedWidth}px`, // Set calculated width
          height: '400px', // Set fixed height
        }}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
