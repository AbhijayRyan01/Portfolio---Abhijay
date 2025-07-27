export const myProjects = [
  {
    id: 1,
    title: "NeuraNet",
    description:
      "A multi-page ML-integrated React app built for real-time inference using AWS services.",
    subDescription: [
      "Reduced code redundancy by 40% using reusable components and routing.",
      "Integrated a SageMaker model achieving 96% inference accuracy.",
      "Used AWS Lambda & API Gateway for seamless frontend-backend interaction (avg. latency: 120ms).",
      "Stored assets via AWS S3, improving content load time by 30%.",
    ],
    href: "https://aws-project-5.vercel.app/",
    logo: "",
    image: "/assets/projects/AWS.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "Component-Based UI",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "KinectPosture",
    description:
      "A posture classification system using deep learning and real-world pose estimation data.",
    subDescription: [
      "Used MediaPipe Pose to extract 132 keypoints per frame from recorded videos.",
      "Trained a neural network using TensorFlow with custom .npy datasets.",
      "Improved accuracy using dropout, batch normalization, and learning rate scheduling.",
      "Achieved ~99.4% validation accuracy on real-world classroom data.",
    ],
    href: "https://github.com/AbhijayRyan01/AI_Posture_Project",
    logo: "",
    image: "/assets/projects/Posture.png",
    tags: [
      { id: 1, name: "TensorFlow", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "MediaPipe", path: "/assets/logos/react.svg" },
      { id: 3, name: "Python", path: "/assets/logos/sqlite.svg" },
    ],
  },
  {
    id: 3,
    title: "GreenSphere",
    description:
      "A multi-page ML-integrated React app built for real-time inference using AWS services.",
    subDescription: [
      "Reduced code redundancy by 40% using reusable components and routing.",
      "Integrated a SageMaker model achieving 96% inference accuracy.",
      "Used AWS Lambda & API Gateway for seamless frontend-backend interaction (avg. latency: 120ms).",
      "Stored assets via AWS S3, improving content load time by 30%.",
    ],
    href: "https://greensph.vercel.app/",
    logo: "",
    image: "/assets/projects/GreenSphere.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/GreenSphere.png" },
      { id: 2, name: "AWS", path: "/assets/logos/aws.svg" },
      { id: 3, name: "SageMaker", path: "/assets/logos/sagemaker.svg" },
    ],
  },
  {
    id: 4,
    title: "Profitability App – TuTeck Technologies",
    description:
      "A financial analysis app to track profitability metrics at employee, project, and company levels.",
    subDescription: [
      "Automated over 85% of manual data entry using RESTful API integrations with Zoho and Razorpay.",
      "Reduced processing time by 60% and improved financial analysis efficiency by 40%.",
      "Now used across 3+ departments for 120+ employees and 20+ projects.",
      "Features real-time tracking and dashboard insights for key financial indicators.",
    ],
    href: "https://vestiti.vercel.app/", // You can add a link if available
    logo: "",
    image: "/assets/projects/Profit.jpg", // Replace with correct path if needed
    tags: [
      { id: 1, name: "REST API", path: "/assets/logos/api.svg" },
      { id: 2, name: "Zoho", path: "/assets/logos/zoho.svg" },
      { id: 3, name: "Razorpay", path: "/assets/logos/razorpay.svg" },
      { id: 4, name: "PowerApps", path: "/assets/logos/powerapps.svg" },
    ],
  },
  {
  id: 5,
  title: "Vestiti",
  description:
    "A web-based visualization app leveraging OpenGL Shading Language (GLSL) for real-time interactive graphics.",
  subDescription: [
    "Developed an interactive web application using GLSL for dynamic rendering effects.",
    "Structured the frontend using JavaScript and styled it with Tailwind CSS.",
    "Wrote custom shader programs to create visually compelling animations and transitions.",
    "Designed a clean, responsive UI and deployed the full-stack project independently.",
  ],
  href: "", // Add deployment link if available
  logo: "",
  image: "/assets/projects/Vestiti.png", // Replace with actual image path
  tags: [
    { id: 1, name: "GLSL", path: "/assets/logos/glsl.svg" },
    { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    { id: 4, name: "WebGL", path: "/assets/logos/webgl.svg" },
  ],
}

];

export const mySocials = [
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/abhijay-dhar-a6b798241",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/abhijay_ryan/?next=%2F",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Development Intern",
    job: "TuTeck Technologies, Kolkata",
    date: "May 2025 - June 2025",
    contents: [
      "Developed a Profitability App for calculating employee, project, and company-level profitability.",
      "Integrated Zoho and Razorpay APIs to automate financial data entry, reducing processing time by 60%.",
      "Deployed real-time tracking for over 120 employees and 20+ projects across departments.",
    ],
  },
  {
    title: "Machine Learning Developer",
    job: "Qiskit FallFest (Finalist)",
    date: "Nov 2024",
    contents: [
      "Designed and implemented a quantum fraud detection model using Qiskit and classical ML techniques.",
      "Built an interactive prototype for identifying anomalous transactions using hybrid quantum-classical logic.",
      "Collaborated with a multi-disciplinary team and presented the solution at IBM’s Qiskit FallFest Hackathon.",
    ],
  },
  {
    title: "Full Stack & ML Developer",
    job: "Freelance / Personal Projects",
    date: "2023 - Present",
    contents: [
      "Created GreenSphere, a React-based sustainability platform used by 500+ users for carbon tracking.",
      "Built NeuraNet, an ML-integrated web app with AWS SageMaker, Lambda, and API Gateway.",
      "Developed KinectPosture, a DL-based posture detector using MediaPipe and TensorFlow, achieving ~99.4% accuracy.",
      "Continuously learning and applying modern technologies like React, Node.js, AWS, and TensorFlow.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
