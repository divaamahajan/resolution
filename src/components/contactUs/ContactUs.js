import React from 'react';
import LinkedInLink from './LinkedInLink'; // Adjust the path as needed

const ContactUs = () => {
  return (
<div className="fixed bottom-0 left-0 flex flex-col items-start justify-end h-auto w-full p-4 lg:static lg:h-auto lg:w-auto lg:bg-none">
  <div>
    <h2 className="font-bold">Meet the Team:</h2>
  </div>
  <div className="my-2"></div> 
  <div>
    <p> <LinkedInLink
        profileUrl={"https://www.linkedin.com/in/dm-divyamahajan"}
        name={"Divya Mahajan"}
      /> Website design, development, and content management.</p>
  </div>
  <div>
    <p><LinkedInLink
        profileUrl={"https://www.linkedin.com/in/shreya-krishnamoorthy"}
        name={"Shreya Krishnamoorthy"}
      /> Spearheading script and concept development for videos.</p>
  </div>
  <div>
    <p><LinkedInLink
        profileUrl={"https://www.linkedin.com/in/akhilraphi"}
        name={"Akhil Kattukaran"}
      />Leading the script to animation video creation.</p>
  </div>
  <div className="my-2"></div> 
  <div>
    <p> <LinkedInLink
        profileUrl={"https://www.linkedin.com/in/anoop-shivayogi"}
        name={"Anoop Shivayogi"}
      /> Providing strong support for the script to animation video development.</p>
  </div>
  <div className="my-2"></div>

  <div className="my-2"></div>

</div>

  );
};

export default ContactUs;
