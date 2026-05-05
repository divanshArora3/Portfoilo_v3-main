import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  GraduationCap, 
  Briefcase, 
  Star, 
  Github, 
  Database, 
  Cloud, 
  Zap, 
  Heart 
} from "lucide-react";
import { Link } from "react-router-dom";

// Image Imports
import recordmate from "/uploads/recordmate.png";
import blog from "/uploads/blog.png";
import devDotJobs from "/uploads/devdotjobs.png";
import supplychain from "/uploads/supplychain.png";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      title: "Retail Supply Chain Intelligence",
      description: "End-to-end data pipeline utilizing Medallion Architecture to transform raw supply chain telemetry into actionable insights via Azure Databricks and Spark.",
      image: supplychain,
      tags: ["Azure Databricks", "PySpark", "ADLS Gen2", "Unity Catalog", "SQL"],
      link: "/projects",
      code: "https://github.com/divanshArora3/Retail-Supply-Chain-Intelligence-Platform"
    },
    {
      title: "DevDotJobs - Job Portal",
      description: "A comprehensive job portal for developers featuring secure authentication and real-time job posting capabilities.",
      image: devDotJobs, 
      tags: ["Express.js", "React.js", "Node.js", "MongoDB", "JWT"],
      link: "/projects",
      code: "https://github.com/divanshArora3/dev.jobs"
    },
    {
      title: "Divansh's Blog",
      description: "A full-stack blogging platform with a clean UI and markdown support for technical writing and sharing engineering insights.",
      image: blog,
      tags: ["Express.js", "React.js", "Node.js", "MongoDB", "Tailwind"],
      link: "/projects",
      code: "https://github.com/divanshArora3/Divansh-s-blog-FullStack"
    },
    {
      title: "Recordmate",
      description: "A web application for recording and sending transcripts automatically with integrated workflow automation.",
      image: recordmate,
      tags: ["React.js", "Puppeteer", "Node.js", "MongoDb", "Express.js"],
      link: "/projects",
      code: "https://github.com/divanshArora3/RECORDMATE"
    },
  ];

  const techStack = [
    { name: "Python & PySpark", proficiency: 90 },
    { name: "SQL (Snowflake/PostgreSQL)", proficiency: 95 },
    { name: "Azure & GCP Cloud", proficiency: 80 },
    { name: "Databricks & Delta Lake", proficiency: 85 },
    { name: "React.js & Next.js", proficiency: 85 },
    { name: "Node.js & Express", proficiency: 80 },
    { name: "Git & CI/CD", proficiency: 90 },
    { name: "C/C++", proficiency: 85 },
    { name: "MongoDB", proficiency: 80 },
  ];

  return (
    <Layout>
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Overview
            </span>
            <h2 className="text-4xl font-bold mb-6">Who I Am</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              I'm an Instrumentation and Control student at NIT Jalandhar and a Data Engineering Intern at Sigmoid. I specialize in building scalable data infrastructure, optimized ETL pipelines, and innovative software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg border border-white/5 hover:border-teal-500/30 transition-colors"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Database className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Data Engineering</h3>
              <p className="text-muted-foreground text-center text-sm">
                Designing end-to-end pipelines using Spark and Databricks. Expert in Medallion architecture and cloud data governance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg border border-white/5 hover:border-teal-500/30 transition-colors"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Code className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Software Engineering</h3>
              <p className="text-muted-foreground text-center text-sm">
                Full-stack development with the MERN stack. Building responsive, secure, and user-centric web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg border border-white/5 hover:border-teal-500/30 transition-colors"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Cloud className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Cloud & AI</h3>
              <p className="text-muted-foreground text-center text-sm">
                Implementing AI solutions and GenAI/RAG systems on Azure and GCP to solve complex business problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Skills
            </span>
            <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-lg border border-white/5"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">{tech.name}</h3>
                  <span className="text-xs text-muted-foreground">{tech.proficiency}%</span>
                </div>
                <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-teal-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/50" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-teal-500/30 transition-all"
              >
                <div className="h-56 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest py-1 px-2.5 bg-teal-500/5 text-teal-400 border border-teal-500/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <Link
                      to={project.link}
                      className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href={project.code}
                      className="text-muted-foreground hover:text-foreground transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Acknowledgement Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Zap className="w-10 h-10 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Professional Spotlight</h2>
            <p className="text-muted-foreground leading-relaxed italic text-lg">
              "Currently driving data innovation as a Data Engineering Intern at Sigmoid. Focused on large-scale cloud infrastructure, automated ETL pipelines, and the development of enterprise-grade RAG systems."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-2xl max-w-4xl mx-auto text-center border border-teal-500/20 shadow-2xl shadow-teal-500/5"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-6 mx-auto">
              <Star className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Let's Build Something Great</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
              Whether it's a complex data pipeline, a modern web app, or an AI integration—I'm always open to new challenges and collaborations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-600 transition-all hover:shadow-lg hover:shadow-teal-500/20 active:scale-95"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;