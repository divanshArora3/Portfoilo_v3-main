import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart, Database, Cloud } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "PySpark", level: "Intermediate" },
    { name: "Databricks", level: "Intermediate" },
    { name: "Azure / GCP", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "GenAI / RAG", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Machine Learning", level: "Intermediate" },
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
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an Instrumentation and Control student and Data Engineering Intern passionate about building scalable data pipelines and AI-driven solutions.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel h-full p-8 rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-80 rounded-lg mb-8 overflow-hidden">
                  <img 
                    src="/uploads/me.png" 
                    alt="Divansh Arora" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                <AnimatedText text="The Journey" once />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm <motion.span 
                    className="text-brand-purple font-semibold"
                    whileHover={{ color: "#8B5CF6" }}
                  >Divansh Arora</motion.span>, currently pursuing my degree at NIT Jalandhar and working as a **Data Engineering Intern at Sigmoid**.
                </p>
                <p>
                  My expertise lies at the intersection of Big Data and AI. I specialize in building robust ETL pipelines, managing cloud infrastructure on Azure and GCP, and leveraging tools like PySpark and Databricks to turn raw data into actionable insights.
                </p>
                <p>
                  Beyond data engineering, I have a strong background in full-stack development (MERN) and a deep interest in **Generative AI** and **RAG-powered systems**, ensuring that the systems I build are not just functional, but intelligent.
                </p>
                <p>
                  When I'm not optimizing queries or debugging pipelines, you'll find me solving algorithmic challenges, exploring the latest in GenAI, or enjoying a good video game.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Professional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Expertise</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                My technical toolkit is focused on data orchestration, cloud architecture, and modern software engineering.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-panel p-6 rounded-lg text-center border border-white/10 hover:border-brand-purple/50 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <span className={`text-[10px] uppercase tracking-wider py-1 px-3 rounded-full ${
                    skill.level === 'Advanced' ? 'bg-brand-purple/20 text-brand-purple' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard icon={Database} title="Data Engineering">
              <ul className="space-y-2 text-muted-foreground">
                {["ETL/ELT Pipeline Design", "Cloud Data Warehousing", 
                  "Big Data Processing (Spark)", "Real-time Data Streaming"].map((item, i) => (
                  <motion.li key={i} className="flex items-center" whileHover={{ x: 5, color: "#9b87f5" }}>
                    <Cloud className="h-4 w-4 text-brand-purple mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon={Code} title="Engineering Core">
              <ul className="space-y-2 text-muted-foreground">
                {["Clean Code & Design Patterns", "MERN Stack Development", 
                  "RESTful API Architecture", "Version Control (Git/GitHub)"].map((item, i) => (
                  <motion.li key={i} className="flex items-center" whileHover={{ x: 5, color: "#9b87f5" }}>
                    <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon={GraduationCap} title="Education & Research">
              <ul className="space-y-2 text-muted-foreground">
                {["Instrumentation & Control (NITJ)", "Published Research in IEEE Sensors", 
                  "SQL & Big Data Certifications", "Data Structures & Algorithms"].map((item, i) => (
                  <motion.li key={i} className="flex items-center" whileHover={{ x: 5, color: "#9b87f5" }}>
                    <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon={User} title="Future Goals">
              <ul className="space-y-2 text-muted-foreground">
                {["Mastering Large-scale RAG Systems", "Architecting Data Lakes at Scale", 
                  "Open Source Data Tooling", "Advanced ML Ops integration"].map((item, i) => (
                  <motion.li key={i} className="flex items-center" whileHover={{ x: 5, color: "#9b87f5" }}>
                    <Heart className="h-4 w-4 text-brand-purple mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;