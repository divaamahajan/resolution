import React from 'react';

const LinkedInLink = ({ profileUrl, name }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <a href={profileUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn Logo"
          style={{ width: '20px', marginRight: '5px' }}
        />
      </a>
      <a href={profileUrl} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </div>
  );
};

export default LinkedInLink;
