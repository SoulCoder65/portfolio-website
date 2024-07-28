export const ABOUT_CONTENT = `Motivated and experienced Full Stack Developer with 2.5 years of hands-on experience. Certified in AWS, with expertise in Serverless, Python/Django, MERN, React Native, Flutter, MySQL, and Firebase. Proven track record of successfully delivering projects for clients and in-house initiatives. Skilled in handling offshore projects and developing internal tools.`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: "/assets/icons/frontend/html5.svg", name: "HTML5" },
    { icon: "/assets/icons/frontend/css3.svg", name: "CSS3" },
    { icon: "/assets/icons/frontend/js.svg", name: "JavaScript" },
    { icon: "/assets/icons/frontend/react.svg", name: "React" },
    { icon: "/assets/icons/frontend/redux.svg", name: "Redux" },
    { icon: "/assets/icons/frontend/bootstrap.svg", name: "BootStrap" },
    { icon: "/assets/icons/frontend/material-ui.svg", name: "Material UI" },
    { icon: "/assets/icons/frontend/tailwind-css.svg", name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: "/assets/icons/backend/python.svg", name: "Python" },
    { icon: "/assets/icons/backend/django.svg", name: "Django" },
    { icon: "/assets/icons/backend/nodejs.svg", name: "NodeJS" },
    { icon: "/assets/icons/backend/mysql.svg", name: "MySQL" },
    { icon: "/assets/icons/backend/postgresql.svg", name: "PostgreSQL" },
    { icon: "/assets/icons/backend/mongodb.svg", name: "MongoDB" },
  ],
  Mobile: [
    { icon: "/assets/icons/mobile/flutter.svg", name: "Flutter" },
    { icon: "/assets/icons/mobile/react-native.svg", name: "React Native" },
    { icon: "/assets/icons/mobile/android-studio.svg", name: "Android Studio" },
    { icon: "/assets/icons/mobile/xcode.svg", name: "Xcode" },
  ],
  Others: [
    { icon: "/assets/images/git.svg", name: "Git" },
    { icon: "/assets/images/github.svg", name: "GitHub" },
    { icon: "/assets/images/aws.svg", name: "AWS" },
    { icon: "/assets/images/firebase.svg", name: "Firebase" },
    { icon: "/assets/images/docker.svg", name: "Docker" },
    { icon: "/assets/images/postman.png", name: "Postman" },
    { icon: "/assets/images/terraform.svg", name: "Terraform" },
  ],
};

export const EXPERIENCES = [
  {
    year: "Jan 2022 - Present",
    role: "Software Engineer Level-2",
    company: "ConsultAdd Inc.",
    description: `As a Full Stack Developer, I designed and developed user interfaces for web applications using React and created RESTful APIs with serverless Node.js and Django. I utilized AWS for cloud integration and worked with offshore clients on their projects. Additionally, I contributed to multiple in-house products, encompassing both web and mobile applications.`,
    technologies: [
      "AWS",
      "Serverless",
      "Django",
      "DRF",
      "MERN",
      "NestJS",
      "Flutter",
      "Expo",
      "Firebase",
      "Prisma",
    ],
  },
  {
    year: "Mar 2021 - Dec 2021",
    role: "Mobile Application Intern",
    company: "Hope Foundation",
    description: `I managed both back-end and front-end development, creating an Android app with Flutter and a Node.js backend with a React.js admin panel. I used MongoDB for database management and integrated Firebase for notifications and file handling. Payment processing was handled through PayU Money, and I designed a QR code-based queue management system. I also integrated Cowin APIs for vaccination registration and Mobikwik API for mobile recharge, bill payments, and e-wallet functionality.`,
    technologies: [
      "Dart",
      "Flutter",
      "MERN",
      "Firebase",
      "CoWin APIs",
      "Mobikwik APIs",
    ],
  },
  {
    year: "May 2020 - Jun 2020",
    role: "Python Django Intern",
    company: "Universal Informatics",
    description: `I learned core and advanced Python OOP concepts and worked on mini projects to deepen my understanding. I studied Django's architecture, including MVT and DTL, and created a mini website using Django along with HTML, CSS, and JavaScript.`,
    technologies: ["Core Python", "Advance Python", "Django", "MVT", "DTL"],
  },
  {
    year: "Jun 2019 - July 2019",
    role: "Web Developer Intern",
    company: "Universal Informatics",
    description: `I learned HTML, CSS, and JavaScript to build fully functional websites. I used Bootstrap for styling to make my sites look good and be responsive. I also studied how JavaScript works with the DOM, how to handle asynchronous code, and how to work with forms. I explored more advanced JavaScript topics to improve my skills further.`,
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
  },
];

export const EDUCATION = [
  {
    institution: "Mahakal Institute of Technology",
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    percentage: "9.15 CGPA",
    year: "2018-2022",
    degree: "Bachelor of Technology in Computer Science",
    location: "Ujjain, M.P",
    level: "college",
  },
  {
    institution: "Kalidas Montessori School",
    university: "Madhya Pradesh Board of Secondary Education",
    percentage: "88.6%",
    year: "2018",
    degree: "Higher Secondary (12<sup>th</sup>)",
    location: "Ujjain, M.P",
    level: "higher-secondary",
  },
  {
    institution: "Kalidas Montessori School",
    university: "Madhya Pradesh Board of Secondary Education",
    percentage: "90.4%",
    year: "2016",
    degree: "High School (10<sup>th</sup>)",
    location: "Ujjain, M.P",
    level: "high-school",
  },
];

export const PROJECTS = [
  {
    title: "QPie",
    description:
      "Developed a mobile-based queue management system to support service providers and businesses. The system includes an admin panel and an Android app. It manages databases, sends notifications, and handles payment processing. The system features a token-based queue management system with QR codes, integrates Cowin APIs for vaccination registration, and supports mobile recharge, bill payments, and e-wallet functionality.",
    technologies: [
      "Dart",
      "Flutter",
      "Node",
      "React",
      "ExpressJS",
      "Mongodb",
      "Firebase",
    ],
    githubLink: "https://apkcombo.com/qpie/com.qpie.getyourtoken/",
  },
  {
    title: "Meal App",
    description:
      'Developed a meal app using Flutter featuring a beautiful and simple UI. Users can search for meals across various categories and apply filters such as "Only Vegetarian." The app allows users to mark dishes as favorites and provides detailed descriptions, including ingredients and cooking procedures.',
    technologies: ["Dart", "Flutter"],
    githubLink: "https://github.com/SoulCoder65/mealapp",
  },
  {
    title: "Twitter-Bot",
    description:
      "Created a Twitter bot using the Tweepy API and Tkinter. The bot can read tweets, write tweets, check followers and following, update profiles, search users, manage blocked users, and search trends.",
    technologies: ["Python", "Tweepy API", "Tkinter"],
    githubLink: "https://github.com/SoulCoder65/Twitter-Bot",
  },
  {
    title: "Cric Show",
    description:
      "Created a React JS cricket score web application that displays current match results, scores, player stats, and recent matches using the Cric API.",
    technologies: ["ReactJS", "Bootstrap", "Cric API"],
    githubLink: "https://github.com/SoulCoder65/CricShow",
  },
  {
    title: "Instagram Bot",
    description:
      "Created an Instagram bot using Tkinter and Selenium WebDriver. The bot can count the number of posts, followers, and following for any user or page, provide lists of followers and following, and like posts based on hashtags, pages, or specific users.",
    technologies: ["Python", "Selenium", "TKinter"],
    githubLink: "https://github.com/SoulCoder65/Instagram-Bot",
  },
  {
    title: "Bill Management System",
    description:
      "Developed a Bill Management System using Tkinter (Python) for shopkeepers to calculate item prices including GST and generate bills. The system also allows saving bills as text files and searching for them using bill numbers.",
    technologies: ["Python", "TKinter"],
    githubLink: "https://github.com/SoulCoder65/Bill-Management-System",
  },
  {
    title: "Github Search",
    description:
      "Created a GitHub stats website using the GitHub API to search for user information, including stats, followers, following, gists, profile details, programming languages used, repositories, and forked repos. Data is presented in charts and graph formats using React JS and React FusionCharts.",
    technologies: ["ReactJS"],
    githubLink: "https://github.com/SoulCoder65/githubsearch",
  },
];

export const CONTACT = {
  phoneNo: "+91 8770754528",
  email: "akshaysaxena860@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshay-saxena-74b676196",
  github: "https://github.com/SoulCoder65",
  x: "https://x.com/SoulCoderr",
  instagram:
    "https://www.instagram.com/aakshay.js?igsh=M3JvaDRuaTBrNWNy&utm_source=qr",
};
