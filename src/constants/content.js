// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const ABOUT_CONTENT = `Motivated and experienced Full Stack Developer with 2.5 years of hands-on experience. Certified in AWS, with expertise in Serverless, Python/Django, MERN, React Native, Flutter, NestJS, MySQL, and Firebase. Proven track record of successfully delivering projects for clients and in-house initiatives. Skilled in handling offshore projects and developing internal tools.`;

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
    { icon: "/assets/icons/others/git.svg", name: "Git" },
    { icon: "/assets/icons/others/github.svg", name: "GitHub" },
    { icon: "/assets/icons/others/aws.svg", name: "AWS" },
    { icon: "/assets/icons/others/firebase.svg", name: "Firebase" },
    { icon: "/assets/icons/others/docker.svg", name: "Docker" },
    { icon: "/assets/icons/others/postman.png", name: "Postman" },
    { icon: "/assets/icons/others/terraform.svg", name: "Terraform" },
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
    role: "Mobile Application Developer Intern",
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
    role: "Python Django Developer Intern",
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
// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];

export const CONTACT = {
  phoneNo: "+91 8770754528",
  email: "akshaysaxena860@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshay-saxena-74b676196",
  github: "https://github.com/SoulCoder65",
  x: "https://x.com/SoulCoderr",
  instagram:
    "https://www.instagram.com/aakshay.js?igsh=M3JvaDRuaTBrNWNy&utm_source=qr",
};
