/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Enginnering Collaborations",
  title: "🌐 Bridging Gender Competencies: Effective Conflict Resolution 🤝",
  subTitle: emoji(
    "Explore how understanding and integrating gender competencies can lead to more effective conflict resolution in professional settings. Discover various conflict resolution approaches influenced by the clash and alignment of Individualistic and Relational Competencies. This exploration highlights the significance of recognizing and leveraging diverse competencies for fostering collaboration, innovation, and cohesive team dynamics in the workplace."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Problem Articulation",
  subTitle:
    "Navigating Competency Clashes: Sarah and Debby's Workplace Conflict",
  skills: [
    emoji(
      "⚡The workplace dynamic between Sarah, a junior engineer, and Debby, a senior architect, encapsulates a clash of Individualistic and Relational Competencies, leading to significant challenges. Sarah's reliance on collaboration, synergy thinking, and inclusive decision-making, typical of Relational Competencies, contrasts with Debby's assertive, independent, and goal-oriented approach, embodying Individualistic Competencies."
    ),
    emoji(
      "⚡ The core issue emerges from the clash between these competency sets during critical situations, like the client call incident. Sarah's emphasis on collaborative problem-solving and adapting to change conflicts with Debby's unilateral decision-making and compartmentalized working style. This incongruity resulted in confusion, miscommunication, and Sarah feeling overwhelmed and undervalued in front of the client, affecting her confidence and hampering team cohesion."
    ),
    emoji(
      "⚡ The conflict is exacerbated by inadequate communication, unclear role expectations, and the absence of a collaborative framework within the team. Sarah's need for a supportive, inclusive environment clashes with Debby's inclination towards transactional exchanges, compartmentalization, and adherence to strict rules and rights."
    ),
    emoji(
      "⚡ To address this, a transformation in communication strategies, role clarity, and fostering a collaborative work environment is crucial. Establishing transparent channels for dialogue, acknowledging and leveraging the strengths of both competency sets, and creating opportunities for mutual learning and adaptation are key. Bridging the gap between Individualistic and Relational Competencies within the team is essential for fostering a cohesive, innovative, and productive work culture that honors diverse approaches and maximizes the potential of each team member."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Individualistic Competencies",
      logo: require("./assets/images/individualistic.png"),
      subHeader:
        "These competencies focus on an individual's approach to work, problem-solving, and decision-making.",
      // duration: "September 2017 - April 2019",
      // desc:
      descBullets: [
        "Individualistic competencies encapsulate diverse approaches to work and conflict resolution.",
        "'Transactors' view work as transactional, exchanging rewards or punishment, adopting a competitive win/lose mindset.",
        "'Logical Thinking/Mechanistic Systems' prioritize logic-based decision-making with narrow focus and data-driven thinking.",
        "'Firefighters' act heroically, prioritize singular tasks, and view customer service as problematic.",
        "'Universality for continuity' emphasizes rules, goal-driven results, and negotiations for power.",
        "These competencies showcase a range of traits from strict adherence to rules to self-reliance, directive decision-making, and compartmentalized teamwork, all aimed at achieving individual intelligence and developmental roles."
      ]
    },
    {
      schoolName: "Relational competencies",
      logo: require("./assets/images/relational.png"),
      subHeader:
        "Relational competencies represent a spectrum of approaches pivotal in collaborative work settings and conflict resolution. ",
      // duration: "September 2013 - April 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "'Interactors/Transformers' focus on aligning individual interests with group objectives, emphasizing shared power, and nurturing internal excellence.",
        "They foster a win/win mindset, believing that collective synergy surpasses individual contributions.",
        "'Systems-Thinking/Organic Systems' thinkers perceive interconnectedness among parts, valuing relationships and human experiences to foster high-context collaboration.",
        "Employing inductive reasoning, they collaboratively build ideas and advocate for holistic decision-making.",
        "'Fire-preventers' prioritize listening, empathizing, and engaging in customer-centric improvements, acting on multiple tasks simultaneously to foster innovation.",
        "Flexibility in adapting to change and process-oriented continuous improvements are their hallmarks.",
        "They negotiate for connections, mutual wins, and strategic thinking tied to evolving processes.",
        "These competencies emphasize cross-functional collaboration, information-sharing, inclusive decision-making, and empowering others through mentorship, fostering a culture of collective intelligence and integration within teams."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Individualistic Competencies",
      company: "Competing",
      companylogo: require("./assets/images/competition.png"),
      link: "https://www.youtube.com/watch?v=nWxMF6vzCRk",
      date: "Importance of : Goal \u2B06️ | Relationship \u2B07️",
      desc: "Sarah challenges Debby during the client call, asserting her perspective about the project approach. She confronts Debby professionally, standing her ground despite feeling overwhelmed, showcasing an assertive approach aligned with Individualistic Competencies."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Relational Competencies",
      company: "Collaborating",
      companylogo: require("./assets/images/collaborate.png"),
      link: "https://www.youtube.com/watch?v=_BiEB6Bs8cs",
      date: "Importance of : Goal \u2B06️ | Relationship \u2B06️️",
      desc: "Sarah initiates an open and transparent conversation with Debby about the challenges she faced. Both Sarah and Debby collaborate to find a solution, expressing their feelings and perspectives openly, emphasizing mutual understanding and a joint commitment to improve the situation, highlighting the importance of collaborative and inclusive decision-making, a hallmark of Relational Competencies."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Individualistic Competencies",
      company: "Avoiding",
      companylogo: require("./assets/images/Avoid.png"),
      link: "https://www.youtube.com/watch?v=2jhJFs5Gl08",
      date: "Importance of : Goal \u2B07️ | Relationship \u2B07️",
      desc: "Sarah chooses not to confront the issue directly with Debby after the challenging client call, prioritizing her career shift and avoiding unnecessary conflict or drama. This aligns with an avoidance approach, typical of Individualistic Competencies, focused on preserving personal goals and minimizing disruptive conflicts."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Relational Competencies",
      company: "Accommodating",
      companylogo: require("./assets/images/accomodate.png"),
      link: "https://www.youtube.com/watch?v=MXY2hzWUUUM",
      date: "Importance of : Goal \u2B07️  | Relationship \u2B06️️",
      desc: "Sarah accommodates Debby's decisions and actions, maintaining a positive outlook. She adapts to the situation, prioritizing team harmony and focusing on learning from the experience, reflecting a collaborative and adaptive stance consistent with Relational Competencies."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Conclusion",
  subtitle: emoji(
    "The clash between Sarah's Relational Competencies and Debby's Individualistic Competencies highlighted the challenge posed by differing gender competency sets in the workplace. This conflict, evident during critical moments like the client call incident, led to miscommunication and undermined team cohesion. The divergence between these competencies—Sarah's collaborative approach versus Debby's unilateral, rule-bound style—resulted in confusion and affected Sarah's confidence. Inadequate communication and unclear role expectations aggravated the situation. Addressing this required a shift in communication strategies and fostering a collaborative environment that blends the strengths of both competency sets. Recognizing and leveraging diverse competencies is crucial for a cohesive and innovative workplace culture that maximizes each team member's potential. The conflict resolution approaches displayed by Sarah showcased the influence of these gender competencies, emphasizing the need to appreciate and integrate diverse competencies for a more harmonious and productive work environment. Integrating these competencies lays the foundation for an inclusive organizational culture that thrives on diversity."
  ),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  // title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  // email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
