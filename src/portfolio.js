/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

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
  username: "Anton Mikhailovich Smirnov",
  title: "Hi all, I'm Anton",
  subTitle: emoji(
    "A computational linguist and digital humanities researcher 🔍 working with OCR, historical corpora, NLP pipelines, and semantic change analysis, with a strong focus on Arabic- and Persian-script languages."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Quchluk",
  linkedin: "https://www.linkedin.com/in/amsmirnov/",
  gmail: "strog1anton@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTATIONAL LINGUIST AND DIGITAL HUMANITIES RESEARCHER WITH EXPERTISE IN MULTIPLE LANGUAGES",
  skills: [
    emoji(
      "⚡ Develop OCR solutions for historical corpora and text analysis"
    ),
    emoji("⚡ Build NLP pipelines for linguistic research and text processing"),
    emoji(
      "⚡ Conduct semantic change analysis and corpus linguistics research"
    ),
    emoji(
      "⚡ Specialize in Arabic- and Persian-script language processing"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML/CSS",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "OCR",
      fontAwesomeClassname: "fas fa-file-alt"
    },
    {
      skillName: "ASR",
      fontAwesomeClassname: "fas fa-microphone"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Freie Universität Berlin",
      logo: require("./assets/images/harvardLogo.png"), // Placeholder - would need to be replaced with FU Berlin logo
      subHeader: "MA Interdisciplinary Studies of the Middle East",
      duration: "2023 - present",
      desc: "Focus on digital humanities and computational approaches to Middle Eastern studies.",
      descBullets: [
        "Participant in FU-HebrewU Summer School on Digital Humanities"
      ]
    },
    {
      schoolName: "Higher School of Economics Moscow",
      logo: require("./assets/images/stanfordLogo.png"), // Placeholder - would need to be replaced with HSE logo
      subHeader: "BA Oriental and African Studies",
      duration: "2016 - 2020",
      desc: "Specialized in Arabic and Persian languages and computational linguistics.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "NLP & Corpus Linguistics",
      progressPercentage: "85%"
    },
    {
      Stack: "OCR & Text Processing",
      progressPercentage: "80%"
    },
    {
      Stack: "Arabic & Persian Languages",
      progressPercentage: "75%"
    },
    {
      Stack: "Chinese Language",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Digital Humanities Research Assistant",
      company: "Various Projects",
      companylogo: require("./assets/images/facebookLogo.png"), // Placeholder
      date: "2020 – 2024",
      desc: "Worked on multiple projects involving Arabic, Persian, and Russian corpora, applying computational methods to humanities research.",
      descBullets: [
        "Developed corpus analysis tools for historical texts",
        "Applied NLP techniques to extract linguistic patterns from multilingual corpora"
      ]
    },
    {
      role: "NLP + ASR Pipeline Developer",
      company: "Gazprom (subcontract)",
      companylogo: require("./assets/images/quoraLogo.png"), // Placeholder
      date: "2023",
      desc: "Developed speech recognition and natural language processing pipelines using Vosk and regex normalization techniques."
    },
    {
      role: "Freelance Chinese Language Teacher",
      company: "Self-employed",
      companylogo: require("./assets/images/airbnbLogo.png"), // Placeholder
      date: "2017 – present",
      desc: "Provide specialized Chinese language instruction, including HSK exam preparation. Successfully coached students who won competitions."
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
  title: "Projects",
  subtitle: "RESEARCH AND DEVELOPMENT PROJECTS IN COMPUTATIONAL LINGUISTICS AND DIGITAL HUMANITIES",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Placeholder
      projectName: "OCR-Based Corpus Analysis of Persian Reform Lexicon",
      projectDesc: "Developed a system using Tesseract OCR, TF-DF analysis, SQLite, and multi-threaded processing to analyze historical Persian texts",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Quchluk/persian-ocr-reform-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Placeholder
      projectName: "Diachronic Semantic Clustering of Arabic",
      projectDesc: "Implemented semantic analysis using AraBERT, PCA, KMeans, and cosine tracking to study language evolution",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Placeholder
      projectName: "ASR Transcript Normalization Tool",
      projectDesc: "Created a tool using Vosk and preprocessing techniques to normalize automatic speech recognition transcripts",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Placeholder
      projectName: "Narrative Vector Visualization Tool",
      projectDesc: "Built a visualization system for narrative analysis using sentence embeddings and UMAP dimensionality reduction",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Placeholder
      projectName: "Educational NLP Webtool",
      projectDesc: "Developed a Chinese/Arabic vocabulary trainer with SQLite backend for language learning",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Academic achievements and participation in specialized programs",

  achievementsCards: [
    {
      title: "FU-HebrewU Summer School on Digital Humanities",
      subtitle:
        "Participated in a specialized summer program focused on digital humanities methodologies and applications",
      image: require("./assets/images/codeInLogo.webp"), // Placeholder
      imageAlt: "Summer School Logo",
      footerLink: []
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
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in computational linguistics or digital humanities projects? Feel free to reach out.",
  number: "+49 170 4312055",
  email_address: "strog1anton@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
