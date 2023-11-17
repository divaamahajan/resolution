import React from 'react';
import LinkedInLink from './LinkedInLink'; // Adjust the path as needed

const ContactUs = () => {
  return (
    <div className="fixed bottom-0 left-0 flex flex-col items-start justify-end h-auto w-full p-4 lg:static lg:h-auto lg:w-auto lg:bg-none">
      <LinkedInLink
        profileUrl={"https://www.linkedin.com/in/akhilraphi"}
        name={"Akhil Kattukaran"}
      />
      <div className="my-2"></div> {/* Spacer between components */}
      <LinkedInLink
        profileUrl={"https://www.linkedin.com/in/anoop-shivayogi"}
        name={"Anoop Shivayogi"}
      />
      <div className="my-2"></div> {/* Spacer between components */}
      <LinkedInLink
        profileUrl={"https://www.linkedin.com/in/dm-divyamahajan"}
        name={"Divya Mahajan"}
      />
      <div className="my-2"></div> {/* Spacer between components */}
      <LinkedInLink
        profileUrl={"https://www.linkedin.com/in/shreya-krishnamoorthy"}
        name={"Shreya Krishnamoorthy"}
      />
    </div>
  );
};

export default ContactUs;
