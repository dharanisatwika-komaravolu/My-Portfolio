import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  UB,
  foodhub,
  uhg,
  eitacies,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "SQL",
    icon: docker,
  },
{
  name: "Python",
  icon: css,
}

];

const experiences = [
  {
    title: "AI-ML Virtual Internship",
    company_name: "AICTE",
    icon: foodhub,
    iconBg: "#383E56",
    date: "Oct 2021 – Dec 2021",
    points: [
      "Gained hands-on experience in developing and deploying machine learning models, working with real-world datasets to build predictive solutions. Key contributions include:",
"Data Preprocessing & Analysis: Cleaned, processed, and visualized datasets to extract meaningful insights for model training.",
"Machine Learning Model Development: Implemented and fine-tuned supervised and unsupervised learning algorithms, including regression, classification, and clustering techniques.",
"AI Model Optimization: Applied hyperparameter tuning and performance evaluation metrics to enhance model accuracy and efficiency.",
"Real-World Applications: Developed predictive models for industry-relevant problems, leveraging frameworks like TensorFlow, Scikit-Learn, and PyTorch.",
"Deployment & Documentation: Presented model findings through well-documented reports and interactive visualizations, ensuring clarity and reproducibility.",
"This experience strengthened my ability to work with AI-driven solutions, improving my proficiency in data science methodologies and problem-solving with machine learning." ,   ],
  },
  {
    title: "Salesforce Developer Virtual Internship",
    company_name: "SmartInternz",
    icon: uhg,
    iconBg: "#E6DEDD",
    date: "April 2022 – June 2022",
    points: [
      "Acquired hands-on experience in Salesforce development, focusing on automation, customization, and integration. Key contributions include:",

"Salesforce Fundamentals & CRM Customization: Configured and customized Salesforce objects, fields, and page layouts to enhance user experience.",
"Process Automation: Implemented workflows, process builders, and triggers using Apex to streamline business operations.",
"Apex Development: Developed and optimized Apex classes, triggers, and batch jobs to automate complex business logic.",
"Lightning Web Components (LWC): Built dynamic and responsive UI components to enhance Salesforce applications.",
"API Integrations: Integrated third-party services with Salesforce using REST and SOAP APIs for seamless data exchange.",
"Security & Access Control: Configured user roles, profiles, and permission sets to ensure data security and compliance.",
"Project Implementation: Developed and deployed real-world Salesforce applications, following best practices in version control and documentation.",
"This experience strengthened my skills in Salesforce development, enabling me to build scalable and efficient enterprise applications." ,   ],
  },

  {
    title: "Masters in CS",
    company_name: "University of Texas at Arlington",
    icon: UB,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Currently pursuing a Master’s degree in Computer Science, specializing in Intelligent Systems and Software Engineering. Gaining expertise in:",

"Artificial Intelligence & Machine Learning: Advanced knowledge of ML algorithms, deep learning, and AI-driven decision-making systems.",
"Software Development & Engineering: Strong foundation in software design, system architecture, and full-stack development, with coursework in Software Engineering 2, Advanced Software Engineering, and Web Data Management.",
"Data Science & Analytics: Hands-on experience in data preprocessing, visualization, and predictive modeling.",
"Cloud Computing & DevOps: Understanding of CI/CD pipelines, cloud deployment, and automation.",
"Scalability & Performance Optimization: Techniques for building efficient, scalable, and high-performance applications.",
"This combination of coursework and hands-on experience strengthens my ability to develop intelligent, scalable, and high-performing software solutions for real-world applications.",
      ,
    ],
  },
  
];

const careerImpact = [
  {
    title: "How My Internships and Master’s Specialization Complement Each Other",
    points: [
      "The AI-ML Virtual Internship reinforced my understanding of machine learning model development, aligning with my coursework in Intelligent Systems.",
      "Gained practical experience in model optimization, deployment, and evaluation, complementing my studies in AI-driven decision-making.",
      "The Salesforce Developer Virtual Internship strengthened my skills in software development, automation, and cloud-based enterprise solutions, aligning with my Software Engineering coursework.",
      "Hands-on experience in AI, full-stack development, and CRM solutions enhances my ability to develop intelligent, scalable software systems.",
    ],
  },
  {
    title: "How This Adds Value to My Career",
    points: [
      "Industry-ready expertise in AI/ML, full-stack development, and cloud-based enterprise solutions.",
      "Real-world experience in solving business problems using AI-driven automation and scalable software architectures.",
      "Ability to integrate AI solutions into enterprise applications, improving efficiency and decision-making.",
      "Prepared for roles in AI/ML engineering, full-stack development, and software engineering with a strong technical foundation.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Task Management System - Medication Reminder",
    description:
      "Designed a healthcare platform integrating augmented reality for medication verification and machine learning algorithms to analyze adherence patterns. Developed using React Native and MySQL, the system off ers real-time reminders, secure data storage, and a user-friendly interface for diverse healthcare needs.",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/dharanisatwika-komaravolu/Task-Management-Medication-Reminder",
  },
  {
    name: "Smart Health Hub",
    description:
      "Developed Smart Health Hub, a comprehensive healthcare platform using React, and MySQL. Implemented user-centric features for patients, healthcare providers, administrators, and pharmacists, including appointment scheduling, medication management, secure messaging, and real-time chat using Node.js. Ensured database integrity and met all project criteria.",    
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Revolutionizing Urban Mobility",
    description:
      "Developed an urban transportation optimization framework using genetic algorithms and K-means clustering to enhance bus scheduling effi ciency. Achieved improvements in passenger reliability and operational rates while minimizing costs. Implemented on real-world bus operation data.",   
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects ,careerImpact};
