import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import blog from '/uploads/blog.png'; // Adjust path relative to your file
import devdotjobs from '/uploads/devdotjobs.png'
import recordmate from '/uploads/recordmate.png'; // Adjust path relative to your file
import fitness from '/uploads/fittness.png'; // Adjust path relative to your file
import weather from '/uploads/weather.png'; // Adjust path relative to your file
import dsa from '/uploads/dsa.png'; // Adjust path relative to your file
import iot from '/uploads/iot.png'; // Adjust path relative to your file
import attendance from '/uploads/attendance.png'; // Adjust path relative to your file


import { 
  Bot, 
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "DevDotJobs - Job Portal",
      description: "A job portal for developers to find and post job listings.",
      image:"/uploads/devdotjobs.png",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      code: "https://github.com/divanshArora3/dev.jobs",
      category: "web"
    },
    {
      id: 3,
      title: "Divansh's Blog",
      description: "Machine learning model to detect and classify oral cancer levels from images.",
      image: "/uploads/blog.png",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      code: "https://github.com/divanshArora3/dev.jobs",
      category: "web"
    },
    {
      id: 4,
      title: "Recordmate",
      description: "A web application for recording and sending transcripts automatically ",
      image:"/uploads/recordmate.png",
      tags: ["React.js", "Puppeteer","JWT","Node.js", "MongoDb", "Express.js"],
       code: "https://github.com/divanshArora3/RECORDMATE",
      category: "web"
    },
    {
      id: 5,
      title: "FitnessGuru",
      description: "FitnessGuru is a full-stack fitness tracking and workout management application designed to help users stay on top of their health and training goals. It allows users to create personalized workout routines, log daily exercises, track progress over time, and stay motivated through a clean, user-friendly dashboard.",
      image:"/uploads/fittness.png",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      code: "https://github.com/divanshArora3/FitnessGuru",
      category: "web"
    },
    {
      id: 6,
      title: "Weather app",
      description: "Weather Report is a responsive web application that allows users to get real-time weather updates for any city around the world. Built using HTML, CSS, and JavaScript, it fetches data from the OpenWeatherMap API and displays key weather parameters in a clean, user-friendly interface.",
      image: "/uploads/weather.png",
      tags: ["JavaScript", "Node.js", "html","CSS"],
      code: "https://github.com/divanshArora3/Weather_Report",
      category: "web"
    },
    {
      id: 7,
      title: "DSA Tracker",
      description: "A website that contains important questions for data structure and algorithms with many features like community, goals, compiler, etc.",
      image:"/uploads/dsa.png",
      tags: ["ReactGA", "Node", "HTML","BootStrap-CSS","Monaco","Font Awesome"],
      code: "https://github.com/divanshArora3/DSA-Tracker",
      category: "web"
    },
    {
      id: 8,
      title: "attendance-report-system",
      description: "Python-based application that uses OpenCV and face recognition to automatically mark student attendance through webcam input. It ensures accurate, real-time attendance logging and generates reports that can be saved for future records.",
      image: "/uploads/attendance.png",
      tags: ["Pyhton", "OpenCv","Machine Learning"],
      code: "https://github.com/divanshArora3/attendance-report-system",
      category: "ml"
    },
    {
      id: 2,
      title: "Retail Supply Chain Intelligence",
      description: "End-to-end data pipeline utilizing Medallion Architecture to transform raw supply chain telemetry into actionable insights via Azure Databricks and Spark.",
      image: "/uploads/supplychain.png",
      tags: ["Azure Databricks", "PySpark", "ADLS Gen2", "Unity Catalog", "SQL"],
      code: "https://github.com/divanshArora3/Retail-Supply-Chain-Intelligence-Platform",
      category: "DE"
    },
    {
      id: 10,
      title: "Portfolio RAG Assistant",
      description: "A Retrieval-Augmented Generation chatbot powered by Claude that answers questions about my portfolio, skills, projects, and experience. Uses vector embeddings for semantic search over resume data, showcasing production-grade GenAI architecture.",
      image: "/uploads/placeholder.svg",
      tags: ["RAG", "LangChain", "FAISS", "Claude API", "React.js"],
      code: "https://github.com/divanshArora3",
      demo: "/rag",
      category: "genai"
    },
    {
      id: 9,
      title: "Obstacle avoiding robot",
      description: "A dashboard for monitoring and controlling smart home devices.",
      image:"/uploads/iot.png",
      tags: ["C", "IoT", "NArdiuno"],
      code: "https://github.com/divanshArora3/Obstacle_avoiding",
      category: "iot"
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Bot;
      case "web":
        return MonitorSmartphone;
      case "blockchain":
        return Database;
      case "iot":
        return Cpu;
      case "ml":
        return Brain;
      case "data":
        return BarChart;
      case "de":
        return Database;
      case "genai":
        return Bot;
      default:
        return Code;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & ML" },
    { id: "ml", name: "Machine Learning" },
    { id: "DE", name: "Data Engineering" },
    { id: "genai", name: "Gen AI" },
    { id: "iot", name: "IoT" }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        filter === category.id 
                          ? "bg-brand-purple text-white" 
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  code={project.code}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
