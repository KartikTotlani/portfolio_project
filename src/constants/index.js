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
  definedge,
  quickheal,
  dsc_pccoe_logo,
  owasp,
  carrent,
  jobit,
  tripguide,
  threejs,
  network_intrusion,
  petmitra,
  kartik_buddo,
  elastic_search,
  burpsuite,
  cplus,
  fastapi,
  confluence,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Cybersecurity Enthusiast & CTF Practitioner",
    icon: mobile,
  },
  {
    title: "AI/ML Practitioner",
    icon: backend,
  },
  {
    title: "Data Processing & Visaulization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Burpsuite",
    icon: burpsuite,
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
    name: "JavaScript",
    icon: javascript,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "R&D Intern",
    company_name: "SEQRITE Labs @Quick Heal, Pune",
    icon: quickheal,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Enhanced Web Security: Developed a functional browser plugin under the URLCAT initiative to streamline malicious URL detection and improve user safety, presented this POC in Ideathon'25 at Quickheal, Pune.",
      "Cloud Infrastructure & Migration Support: Collaborated on system integration efforts and assisted in optimizing storage/database operations during a major backend migration.",
      "Threat Intelligence Automation: Researched and integrated external threat feeds (SafeDNS, PhishTank, VirusTotal, etc.) to enhance the real-time URL categorization pipeline.",
      "Anti-Fraud AI: Assisted in refining data pipelines and preprocessing modules for an upcoming AI-powered anti-fraud platform, contributing to improved breach detection capabilities."
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Definedge, Pune",
    icon: definedge,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Implemented secure middleware with JWT authentication for secure data transactions.",
      "Translated a Python-based client API adapter library to Golang, ensuring compatibility and scalability.",
      "Conducted API testing using Postman for validation and debugging of multiple endpoints.",
      "Developed and optimized backend systems for financial order management using Go and MySQL, focusing on RESTful API testing & development for OCO and GTT orders.",
      "Collaborated with mentors to enhance the adapter library and ensure seamless API integration."
    ],
  },
  {
    title: "Lead & CP Head",
    company_name: "Google Developer Groups - PCCOE",
    icon: dsc_pccoe_logo,
    iconBg: "#383E56",
    date: "Sept 2024 - Present",
    points: [
      "Led a core team to organize technical workshops, hackathons - AlphaByte2.0 National Hackathon & hands-on Study Jams on Google technologies, enhancing students' practical development skills.", 
      "Guided multiple solution-driven projects, including participation in the Google Solution Challenge, fostering innovation to solve real-world problems.",
      "Competitive Programming Head & Exceutive - collaborated with my team for coding challenges and sessions alongside Coding Ninjas"
    ],
  },
  {
    title: "CTF & Security Member",
    company_name: "OWASP - PCCOE",
    icon: owasp,
    iconBg: "#383E56",
    date: "Sep 2023 - Oct 2024",
    points: [
      "Hands-on experience in Capture The Flag (CTF) challenges on platforms such as CyberChef, picoCTF, TryHackMe." ,
      "Delivered cybersecurity workshops & seminars on AI security, Kali Linux & tools for fellow students to enhance their skills & knowledge.",
    ],
  },
];

const testimonials = [
  {
    testimonial: 
      "Kartik brought enthusiasm and technical clarity to every phase of our work at Seqrite Labs. His contributions to plugin development, threat intelligence automation and DB optimization were truly impactful.",  
    name: "Pratik Kadam",
    designation: "Senior Software Engineer",
    company: "Quick Heal",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    testimonial: 
      "Kartik is a thoughtful leader who brought structure and innovation to GDGC at PCCOE. From managing national-level hackathons to mentoring peers on solution development, his passion and execution stood out.",
    name: "Radha Deoghare",
    designation: "Faculty Advisor of Google Developers Group",
    company: "PCCOE",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    testimonial: 
      "Kartik's frontend expertise gave our brand a digital presence we're truly proud of. The ARKA website turned out fast, aesthetic and super intuitive. Couldn't have asked for a better tech partner!",
    name: "Harsha",
    designation: "Founder & CMO",
    company: "ARKA Productions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Network Intrusion Detection System",
    description:
      "A real-time system that uses ML for packet analysis and anomaly detection. Ranked 2nd at IEEE CodeClash International Hackathon'25 hosted by Purdue University, USA.",
    tags: [
      { name: "machine learning", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "cybersecurity", color: "pink-text-gradient" },
    ],
    image: network_intrusion,
    source_code_link: "https://github.com/KartikTotlani",
  },
  {
    name: "PetMitra - Lost & Found Pet Portal",
    description:
      "A responsive MERN stack web app enabling pet owners to connect with NGOs and vets with feature of appointment scheduling and real-time updates.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: petmitra,
    source_code_link: "https://github.com/KartikTotlani",
  },
  {
    name: "Buddo - AI Image Generator",
    description:
      "AI-driven image generation pipeline using Stable Diffusion, with NSFW filtering and Google Colab acceleration to generate images as per user prompts.",
    tags: [
      { name: "stable diffusion", color: "blue-text-gradient" },
      { name: "colab", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: kartik_buddo,
    source_code_link: "https://github.com/KartikTotlani",
  },
];

export { services, technologies, experiences, testimonials, projects };
