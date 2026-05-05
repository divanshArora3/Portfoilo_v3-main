import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  CheckCircle2,
  Database,
  Cpu,
  Bot
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution: "Nit Jalandhar",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Instrumentation and Control Engineering",
      duration: "2022 - 2026",
      gpa: "8.0/10.0",
      location: "Jalandhar, India",
    },
    {
      institution: "Holy heart day boarding sen. sec. public school, Fazilka",
      degree: "Senior Secondary education",
      field: "Science Stream",
      duration: "2020 - 2022",
      percentage: "90%",
      location: "Fazilka, Punjab, India",
    },
  ];

  const experience = [
    {
      position: "Data Engineering Intern",
      company: "Sigmoid",
      duration: "Jan 2026 - July 2026",
      description: "Specializing in building scalable AI data infrastructure and high-performance ETL pipelines leveraging Azure and GCP cloud ecosystems.",
      responsibilities: [
        "Developed and optimized end-to-end ETL/ELT pipelines using Azure Data Factory and GCP Dataflow to ingest and process multi-terabyte datasets.",
        "Engineered data processing workflows using Apache Spark (PySpark) and Python, improving data transformation efficiency for downstream AI models.",
        "Designed and maintained scalable data warehouses in Snowflake and BigQuery, implementing partitioned tables and optimized indexing for 30K+ concurrent users.",
        "Built robust RESTful data APIs using Node.js to bridge the gap between cloud data lakes and internal analytics dashboards.",
        "Collaborated on version-controlled data infrastructure (IaC) using Git, ensuring seamless deployment and integration across dev and production environments.",
        "Automated data quality checks and monitoring scripts to ensure 99.9% data integrity for critical business intelligence reports."
      ]
    }
  ];

  const projects = [
    {
      title: "Retail Supply Chain Intelligence Platform",
      description: "An enterprise-grade data architecture designed to optimize inventory management and forecast supply chain logistics through real-time streaming and batch processing.",
      technologies: ["Databricks", "ADLS Gen2", "Event Hub", "Unity Catalog", "PySpark", "SQL"],
      duration: "01/2026 - 04/2026",
      type: "Capstone Project",
      accomplishments: [
        "Architected a robust data pipeline integrating streaming data via Event Hub and batch data stored in Azure Data Lake Storage (ADLS Gen2).",
        "Implemented rigorous data governance, lineage tracking, and secure access controls utilizing Databricks Unity Catalog.",
        "Engineered scalable PySpark transformations to process high-volume retail transactions, feeding downstream predictive analytics models."
      ]
    },
    {
      title: "AutoFlow Well Regulation System",
      description: "A data-driven regulation system developed for the Ministry of Jal Shakti (Smart India Hackathon). It uses LiDAR sensors and real-time data processing to automate groundwater monitoring and well regulation.",
      technologies: ["IoT", "Python", "Data Visualization", "Real-time Analytics"],
      duration: "03/2024 - 04/2024",
      type: "Govt. Initiative",
      accomplishments: [
        "Designed a real-time data pipeline to process LiDAR sensor inputs for accurate well depth monitoring.",
        "Developed a centralized dashboard for visualization of groundwater levels across multiple nodes.",
        "Optimized sensor data transmission protocols to ensure 99% uptime in remote areas."
      ]
    },
    {
      title: "SynchroChat",
      description: "A high-performance full-stack chatting application featuring real-time bidirectional communication and instant message delivery.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
      duration: "01/2024 - 02/2024",
      type: "Full-Stack",
      accomplishments: [
        "Implemented seamless real-time messaging using Socket.io for low-latency communication.",
        "Architected a scalable backend with Node.js and Express to handle concurrent user connections.",
        "Integrated secure user authentication and state management for a persistent chat experience."
      ]
    },
    {
      title: "IMU-Based Hand Rehab Glove",
      description: "Published research on a portable glove designed for hand rehabilitation, utilizing IMU sensors to track movement and provide data-driven recovery feedback.",
      technologies: ["Embedded Systems", "Signal Processing", "Python", "IEEE Publication"],
      duration: "10/2023 - 02/2024",
      type: "Research Manuscript",
      accomplishments: [
        "Developed an algorithm to translate IMU sensor data into precise finger movement coordinates.",
        "Published in IEEE Sensors Letters, detailing the design and clinical potential of the hardware.",
        "Engineered a low-power, portable system suitable for at-home patient rehabilitation."
      ]
    }
  ];

  const resumeHighlights = [
    { 
      title: "Data Engineering", 
      description: "Expertise in PySpark, Databricks, and Cloud ETL pipelines (Azure/GCP/Snowflake)",
      icon: <Database className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Generative AI & RAG", 
      description: "Building production-grade AI systems with LLMs and Vector Databases",
      icon: <Bot className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Full-Stack Development", 
      description: "Building robust end-to-end applications using MERN and Next.js ecosystems",
      icon: <Code className="h-8 w-8 text-brand-purple" />
    },
  ];

  const softSkills = [
    { skill: "Problem Solving", description: "Analytical approach to complex technical challenges" },
    { skill: "Communication", description: "Clear technical and non-technical communication" },
    { skill: "Team Collaboration", description: "Effective work in cross-functional teams" },
    { skill: "Adaptability", description: "Quick learning of new technologies and methodologies" },
    { skill: "Time Management", description: "Efficient project delivery within deadlines" },
    { skill: "Critical Thinking", description: "Analytical evaluation of solutions and approaches" },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full flex-shrink-0">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">{edu.field}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple">
                  {edu.gpa || edu.percentage}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{edu.duration}</div>
                <div className="text-sm text-muted-foreground mt-1">{edu.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">{exp.description}</p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center mt-2 md:mt-0">
                <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.duration}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Accomplishments:</h4>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs py-1 px-3 bg-secondary/70 rounded-full text-secondary-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Portfolio & Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Journey" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Data Engineering Intern at Sigmoid with expertise in building scalable cloud data pipelines, 
                architecting RAG-powered GenAI systems, and developing full-stack applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "skills", icon: <Cpu className="h-5 w-5" />, label: "Skills" },
                { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
                { id: "projects", icon: <Code className="h-5 w-5" />, label: "Projects" },
                { id: "education", icon: <GraduationCap className="h-5 w-5" />, label: "Education" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;