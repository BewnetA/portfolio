export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "education", label: "Education", href: "#education" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Bewnet Addisalem",
  title:
    "Software Developer | Machine Learning Engineer | Full Stack Developer",
  summary: "[SHORT PROFESSIONAL SUMMARY PLACEHOLDER]",
  about:
    "I'm a software engineering student at Addis Ababa Science and Technology University, currently in my 4th year. I'm really passionate about building software and exploring how technology solves real-world problems.\n\nOver the past 3+ years, I've been learning and building projects in web development and software engineering, and I've gained a lot of experience along the way through both academic work and personal projects.\n\nI enjoy improving my skills step by step and staying consistent with learning new technologies. I'm especially interested in building meaningful projects that combine creativity and functionality.",
  location: "[LOCATION PLACEHOLDER]",
  education: "B.Sc. Software Engineering",
  experienceYears: "[X]+ Years",
  email: "bewnetaddisalem@gmail.com",
  phone: "+251939724433",
  resumeUrl:
    "https://drive.google.com/file/d/1UfxEvsEl8AGXunXRk2RthzLM88sHkONm/view?usp=sharing",
};

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/BewnetA",
    label: "GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bewneta",
    label: "LinkedIn profile",
  },
  { name: "Telegram", href: "https://t.me/bewnet", label: "Telegram profile" },
  { name: "Email", href: "mailto:bewnetaddisalem@gmail.com", label: "Email" },
];

export const quickFacts = [
  { label: "Location", value: "Addis Ababa, Ethiopia" },
  { label: "Education", value: "B.Sc. Software Engineering" },
  { label: "Experience", value: "3+ Years" },
  { label: "Focus", value: "Full Stack & ML" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "C++", "SQL", "Solidity"],
    accent: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    accent: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Django", "Node.js", "Express.js"],
    accent: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },
  {
    title: "Machine Learning & AI",
    skills: ["PyTorch", "NumPy", "Pandas", "OpenCV"],
    accent: "from-fuchsia-500/20 to-fuchsia-500/5",
    border: "border-fuchsia-500/20",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    accent: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Firebase", "Vercel"],
    accent: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/20",
  },
];

export const experiences = [
  {
    title: "Freelance Software Developer",
    period: "2024 - Present",
    description:
      "Developed and deployed software solutions for local businesses and clients, including commercial websites, business management systems, and custom web applications. Worked directly with project requirements, implementation, deployment, and maintenance while delivering user focused and scalable solutions.",
    tags: ["React", "Next.js", "FastAPI", "JavaScript"],
  },
  {
    title: "ERP System Developer",
    period: "2025 - Present",
    description:
      "Designed and developed ERP systems to support business operations, user management, reporting, and workflow automation. Implemented backend services, database integration, authentication systems, and role based access control to improve operational efficiency.",
    tags: ["FastAPI", "PostgreSQL", "React", "ERP"],
  },
  {
    title: "Machine Learning Projects",
    period: "2024 - Present",
    description:
      "Built machine learning and computer vision projects including salary prediction, house price prediction, and image recognition systems. Worked on data preprocessing, model training, evaluation, and experimentation while applying machine learning techniques to solve real world problems.",
    tags: ["PyTorch", "OpenCV", "NumPy", "Pandas"],
  },
];

export const projects = [
  {
    title: "Paradise Sable",
    description:
      "Modern restaurant landing page featuring menu presentation, business information, responsive design, and online customer engagement.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://paradise-sable.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/paradise-sable.png",
    featured: false,
  },
  {
    title: "Soma Zeta",
    description:
      "Elegant dining website showcasing signature dishes, ambiance, location details, and a mobile-first layout for customer discovery.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://soma-zeta.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/soma-zeta.png",
    featured: false,
  },
  {
    title: "Amrogn Chicken",
    description:
      "Vibrant fast-casual restaurant site with menu highlights, ordering information, and polished branding for easy browsing on any device.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://amrogn-chicken.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/amrogn-chicken.png",
    featured: false,
  },
  {
    title: "ERP Management System",
    description:
      "Developed a web based ERP platform to streamline business operations through a centralized system. Implemented user management, role based access control, reporting features, and workflow automation to improve operational efficiency and data management.",
    tech: ["FastAPI", "PostgreSQL", "React"],
    liveUrl: "https://stock.dipcomtech.com",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/erp.jpg",
    featured: true,
  },
  {
    title: "Image Recognition System",
    description:
      "Built a computer vision application for image recognition and analysis using OpenCV. Implemented image preprocessing, feature extraction, and object recognition techniques while exploring practical applications of computer vision and deep learning.",
    tech: ["Python", "OpenCV", "PyTorch"],
    liveUrl:
      "https://colab.research.google.com/drive/1JakSkuIIvGJHijuFRAc_JgRIDM-0_KLI?usp=sharing",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/image-reco.jpg",
    featured: true,
  },
  {
    title: "House Price Prediction Model",
    description:
      "Developed a machine learning model capable of predicting house prices using historical housing data. Performed data preprocessing, feature engineering, model training, and evaluation to generate accurate predictions and actionable insights.",
    tech: ["Python", "Pandas", "PyTorch"],
    liveUrl: "#",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/house-price.jpg",
    featured: false,
  },
  {
    title: "Salary Prediction Model",
    description:
      "Built a predictive machine learning model to estimate salaries based on multiple input factors. Worked with data cleaning, feature preparation, model training, and performance evaluation to improve prediction accuracy.",
    tech: ["Python", "NumPy", "PyTorch"],
    liveUrl: "#",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/salary-pridict.jpg",
    featured: false,
  },
  {
    title: "Telegram Job Opportunity Filtering Bot",
    description:
      "Developed a Telegram bot that automatically collects job opportunities from multiple Telegram channels and forwards relevant listings to users based on their selected preferences. Designed to reduce information overload and help users discover opportunities that match their interests and skills.",
    tech: ["Python", "Telegram Bot API"],
    liveUrl: "https://t.me/Job_notifyBot",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/job-bot.jpg",
    featured: false,
  },
  {
    title: "Hi Falafel",
    description:
      "Clean Mediterranean restaurant landing page with menu sections, hours and contact details, and responsive design for local customers.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://hi-falafel.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/hi-falafel.png",
    featured: false,
  },
  {
    title: "Golden Plate",
    description:
      "Contemporary restaurant website presenting daily specials, gallery imagery, and essential business information with a smooth user experience.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://golden-plate-kappa.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/golden-plate.png",
    featured: false,
  },
  {
    title: "Alchemist",
    description:
      "Stylish cocktail bar and dining website featuring drink menus, venue atmosphere, and event-ready presentation across desktop and mobile.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://alchemist-nu.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/alchemist.png",
    featured: false,
  },
  {
    title: "Rofam",
    description:
      "Professional restaurant web presence with curated menu display, location access, and intuitive navigation for diners exploring the brand online.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://rofam.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/rofam.png",
    featured: false,
  },
  {
    title: "Union Cocktail",
    description:
      "Sophisticated bar and lounge website highlighting craft cocktails, venue details, and immersive visuals with a fully responsive layout.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://union-cocktail.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/union-cocktail.png",
    featured: false,
  },
  {
    title: "Choke Burger",
    description:
      "Bold burger restaurant landing page with menu showcase, brand identity, and customer-friendly design built for engagement and visibility.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://choke-burger.vercel.app/",
    githubUrl: "https://github.com/BewnetA",
    image: "/screenshots/choke-burger.png",
    featured: false,
  },
];

export const education = {
  institution: "Addis Ababa Science and Technology University",
  degree: "Bachelor of Science in Software Engineering",
  graduation: "Expected Graduation: 2028",
  description:
    "Currently pursuing a degree in Software Engineering with strong foundations in Data Structures and Algorithms, Database Systems, Object Oriented Programming, Software Engineering, Computer Networks, Operating Systems, Artificial Intelligence, Machine Learning, and System Analysis and Design. Actively applying academic knowledge through real world software development and machine learning projects.",
};

export const trainings = [
  {
    title: "ALX Backend Development",
    period: "2025",
    description:
      "Completed an intensive backend development program focused on Django and modern backend engineering practices. Gained hands on experience building REST APIs, database driven applications, authentication systems, and scalable web applications.",
  },
  {
    title: "GDG Frontend Development",
    period: "2024 - 2025",
    description:
      "Completed frontend development training organized by Google Developer Groups. Learned React and modern frontend development practices while building responsive and interactive web applications with a focus on user experience and component based architecture.",
  },
  {
    title: "Dev3Pack Blockchain Training",
    period: "2024 - Present",
    description:
      "Participated in blockchain development training through community learning programs. Studied blockchain fundamentals, smart contract development, decentralized applications, and Web3 technologies while building practical projects using Solidity.",
  },
];

export const certifications = [
  {
    title: "Frontend Development Training",
    organization: "Google Developer Groups (GDG)",
    date: "2025",
    url: "https://drive.google.com/file/d/1aV6qsyf37ecYW42OTCmzV64xPIQ40aKP/view?usp=sharing",
  },
  {
    title: "Handong Global University",
    organization: "AI Image Processing & Computer Vision Training",
    date: "2024",
    url: "https://drive.google.com/file/d/1fyk2RK31E8Bl0ETPlG24963nfqrxJhcV/view?usp=sharing",
  },
  {
    title: "ALX Back-End Web Development",
    organization: "ALX Africa",
    date: "2025",
    url: "https://www.alxafrica.com/",
  },
  {
    title: "Polkadot Blockchain Academy",
    organization: "Polkadot Blockchain Academy",
    date: "2024",
    url: "https://drive.google.com/file/d/1HUcOdjSZTiVOSV7TqAXDkP0r3hxqsB1J/view?usp=sharing",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "bewnetaddisalem@gmail.com",
    href: "mailto:bewnetaddisalem@gmail.com",
  },
  { label: "Phone", value: "+251939724433", href: "tel:+251939724433" },
  {
    label: "LinkedIn",
    value: "Bewnet Addisalem",
    href: "https://www.linkedin.com/in/bewneta",
  },
  {
    label: "GitHub",
    value: "Bewnet Addisalem",
    href: "https://github.com/BewnetA",
  },
  { label: "Telegram", value: "@Bewnet", href: "https://t.me/bewnet" },
];
