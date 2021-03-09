/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Oussama Belouche Portfolio",
  description:
    "A computer science student passionate about AI, mobile and web developement, with experience designing, coding and testing complex programs, adept at motivating self and others, and to learn new technologies.",
  og: {
    title: "Oussama Belouche Portfolio",
    type: "website",
    url: "http://obelouch.ninja/",
  },
};

//Home Page
const greeting = {
  title: "Belouche Oussama",
  logo_name: "obelouch",
  nickname: "XD-OB",
  subTitle:
    "A computer science student passionate about AI, mobile and web developement, with experience designing, coding and testing complex programs, adept at motivating self and others, and to learn new technologies. 👨‍💻",
  resumeLink:
    "https://drive.google.com/file/d/1D_sLVfMSsWoKe_UseOpyIXLUuCGHFSPv/view",
  portfolio_repository: "https://github.com/XD-OB/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/XD-OB",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/belouche-oussama",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCMasqe2IP_20fcAQp8vmcUw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "oussama.belouche@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/96_ob",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/oussama.belouche/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/obelouch/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "📊  Process and visualize the data using most advanced libraries, frameworks and softwares.",
        "⚙️   Solid knowledge in several frameworks and programming languages used in this domain.",
        "💡  Identify issues and use data to propose solutions for effective decision making.",
        "⚡  Developing highly scalable production ready models for various deeplearning and statistical use cases.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Octave",
          fontAwesomeClassname: "simple-icons:octave",
          style: {
            backgroundColor: "transparent",
            color: "#0790C0",
          },
        },
      ],
    },
    {
      title: "Full Stack Web & Mobile App Development",
      fileName: "FullStackImg",
      skills: [
        "🌼  Building responsive website front end using the latest frameworks",
        "🖍️  Creating application backend and APIs using Node, Express and Django.",
        "📱  Developing beautiful cross platform mobile applications using Flutter SDK.",
      ],
      softwareSkills: [
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "☁️ Experience working on multiple cloud platforms",
        "⚙️ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "↕️ Deploying deep learning & machine learning models on cloud",
        "🗄️ Strong knowledge on how to work with differents databases",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQl",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Vagrant",
          fontAwesomeClassname: "simple-icons:vagrant",
          style: {
            color: "#1563FF",
          },
        },
      ],
    },
    {
      title: "Build softwares",
      fileName: "DesignImg",
      skills: [
        "📍 Develops information systems by designing, developing, and installing software solutions.",
        "⏫ Improving system quality by identifying issues and common patterns, and developing standard operating procedures.",
        "👌 Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.",
      ],
      softwareSkills: [
        {
          skillName: "GIT",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos-dart",
          style: {
            color: "#0175C2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "1337",
      subtitle: "Khouribga",
      logo_path: "1337.png",
      alt_name: "1337",
      duration: "Oct 2018 - Present",
      descriptions: [
        "Digital Architect",
        "- Algorithms & AI",
        "- Graphics,",
        "- Web & Mobile",
        "- Networking and System administration",
        "- Unix & Security",
      ],
      website_link: "https://1337.ma/en/",
    },
    {
      title: "Faculty of Sciences",
      subtitle: "Rabat",
      logo_path: "fsr.png",
      alt_name: "FSR",
      duration: "Sep 2017 - Jun 2018",
      descriptions: ["S3 - S4", "- SMI: Mathematics and Computer Sciences"],
      website_link: "http://www.fsr.ac.ma/",
    },
    {
      title: "C.P.G.E Salmane Al Farissi",
      subtitle: "Salé",
      logo_path: "cpge.png",
      alt_name: "CPGE_salmane",
      duration: "Sep 2015 - Jun 2017",
      descriptions: [
        "TSI: Technology and Industrial sciences",
        "- Mathematics",
        "- Physics & Chimistry",
        "- Industrial science",
      ],
      website_link: "https://centresalmanealfarissi.asso-web.com/",
    },
    {
      title: "Alfarabi High School",
      subtitle: "Salé",
      logo_path: "alfarabi.png",
      alt_name: "Alfarabi_high_school",
      duration: "Sep 2012 - Jun 2015",
      descriptions: [
        "Baccalaureate degree",
        "- STE: Sciences and Electrical Technology.",
      ],
      website_link:
        "https://www.communesmaroc.com/commune/bab-lamrissa/place/view/bab-lamrissa-ecole-lycee-technique-alfarabi",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Flutter Development Bootcamp with Dart",
      subtitle: "- Udemy & Google Flutter team",
      logo_path: "appbrewery.png",
      certificate_link:
        "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
      alt_name: "Udemy Flutter Certification",
      color_code: "#D285CD",
    },
    {
      title: "Machine Learning",
      subtitle: "- Stanford University",
      logo_path: "stanford_logo.png",
      certificate_link: "http://coursera.org/verify/HUBALQVLNMEL",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "ML for Business Professionals",
      subtitle: "- Google Cloud Platform Certified",
      logo_path: "gcp_logo.png",
      certificate_link: "http://coursera.org/verify/UMB5BD2GU2Z8",
      alt_name: "GCP Training",
      color_code: "#A5E2FF",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link: "http://coursera.org/verify/FFE5FTEPDQZA",
      alt_name: "Google",
      color_code: "#9FFDDB",
    },
    {
      title: "Creating and Developing a Tech Startup",
      subtitle: "- École Polytechnique & HEC Paris",
      logo_path: "X_logo.png",
      certificate_link: "http://coursera.org/verify/J94E5T283YGE",
      alt_name: "X & HEC Paris",
      color_code: "#F1F1F1",
    },
    {
      title: "Managing the Company of the Future",
      subtitle: "- London Business School",
      logo_path: "london_bs_logo.png",
      certificate_link: "http://coursera.org/verify/8PYUFFG33M5Y",
      alt_name: "London Business School",
      color_code: "#000C7C",
    },
    {
      title: "Marketing Analytics",
      subtitle: "- University of Virginia Darden School of Business",
      logo_path: "darden_logo.png",
      certificate_link: "http://coursera.org/verify/U8M8BG9BRSUK",
      alt_name: "Darden Business School",
      color_code: "#FBFFBC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  //description:
  //"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Digital Architect Intern",
          company: "O.C.P SA",
          company_url: "https://www.ocpgroup.ma/",
          logo_path: "OCP.png",
          duration: "Sep 2019 - Mar 2020",
          location: "Ben Guerir, Morocco",
          descriptions: [
            "As member of a team made from six 1337 students, we joined an OCP team to build an autonomous Mine Haul Truck.",
            "In this project we had various tasks, for the remote driving part:",
            "- Take the commands from the joystick, pedals and the board and send it to be executed in the truck.",
            "- Display a fancy conduct board to the remote driver.",
            "- Use Raspberry as the motherboard for the joystick.",
            "For the main subject of our internship:",
            "- Read, treat, clean and visualize the data from RADAR & LIDAR.",
            "- Calibrate the Lidar Camera.",
            "- Fusion all sensors data and make it relative to a absolute origin.",
            "",
          ],
          video_link: "https://www.youtube.com/watch?v=FeGTsSHRMrQ",
          color: "#2DC300",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Member of technology and design cell",
          company: "JCMP-UM6P Club",
          company_url: "http://www.jcmpmaroc.org/",
          logo_path: "jcmp.png",
          duration: "Nov 2019 - Feb 2020",
          location: "Ben Guerir, Morocco",
          descriptions: ["Jeune Communauté Marocaine Publico-Eco."],
          video_link: "",
          color: "#4285F4",
        },
        {
          title: "Volunteer",
          company: "Nahdat Alhay",
          company_url: "https://www.google.com/",
          logo_path: "nahdat_alhay.jpeg",
          duration: "Sep 2017 - Oct 2018",
          location: "Salé, Morocco",
          descriptions: [
            "Organizing educational and awareness activities for the childrens.",
          ],
          video_link: "",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "obelouch.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with AI, Web, Mobile, Cloud ...",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: ",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Email",
    subtitle: "oussama.belouche@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+2126 17 61 67 69",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
