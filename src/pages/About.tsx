import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart, Database, Cloud, Zap, Binary } from "lucide-react";
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
    { name: "GenAI / RAG", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Snowflake", level: "Learning" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Professional Profile
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Engineering Data & Intelligence" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instrumentation and Control student at <strong>NIT Jalandhar</strong> and <strong>Data Engineering Intern at Sigmoid</strong>, dedicated to architecting scalable data ecosystems and production-grade AI solutions.
              </p>
            </div>
          </motion.div>

          {/* Image & Narrative Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-xl overflow-hidden border border-white/10">
                  <img 
                    src="/uploads/me.png" 
                    alt="Divansh Arora" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Zap className="mr-3 text-brand-purple" />
                The Journey
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I am <span className="text-brand-purple font-semibold">Divansh Arora</span>. My technical journey is defined by a passion for transforming raw complexity into structured intelligence. 
                </p>
                <p>
                  Currently, as a <strong>Data Engineering Intern at Sigmoid</strong>, I specialize in building robust ETL/ELT pipelines and managing cloud infrastructure on Azure and GCP. I leverage tools like <strong>PySpark and Databricks</strong> to engineer high-performance data warehouses capable of serving thousands of concurrent users.
                </p>
                <p>
                  Beyond data orchestration, I have a deep-rooted interest in Generative AI and RAG-powered systems. My goal is to ensure that data isn't just stored, but utilized to build intelligent, conversational agents that solve real-world enterprise challenges.
                </p>
                <p>
                  Outside the terminal, I am a research-driven engineer who has published work on <strong>IMU-based hardware rehabilitation</strong> and developed data-driven systems for government initiatives like the <strong>Ministry of Jal Shakti</strong>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Professional Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Stack</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A focused toolkit centered on data engineering, cloud architecture, and full-stack development.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5, borderColor: "rgba(155, 135, 245, 0.5)" }}
                  className="glass-panel p-6 rounded-xl text-center border border-white/5 bg-white/5 transition-all"
                >
                  <h3 className="font-semibold text-sm mb-2">{skill.name}</h3>
                  <span className={`text-[9px] uppercase tracking-widest py-1 px-2 rounded-md ${
                    skill.level === 'Advanced' ? 'bg-brand-purple/20 text-brand-purple' : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard icon={Database} title="Data Engineering">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center"><Cloud className="h-4 w-4 text-brand-purple mr-2" /> Scalable ETL/ELT Pipeline Design</li>
                <li className="flex items-center"><Cloud className="h-4 w-4 text-brand-purple mr-2" /> Big Data Processing with PySpark</li>
                <li className="flex items-center"><Cloud className="h-4 w-4 text-brand-purple mr-2" /> Cloud Warehousing (Snowflake/BigQuery)</li>
                <li className="flex items-center"><Cloud className="h-4 w-4 text-brand-purple mr-2" /> Unity Catalog & Data Governance</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Zap} title="GenAI & RAG">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center"><Binary className="h-4 w-4 text-brand-purple mr-2" /> Vector Database Optimization</li>
                <li className="flex items-center"><Binary className="h-4 w-4 text-brand-purple mr-2" /> Enterprise Policy Assistants</li>
                <li className="flex items-center"><Binary className="h-4 w-4 text-brand-purple mr-2" /> LLM Application Orchestration</li>
                <li className="flex items-center"><Binary className="h-4 w-4 text-brand-purple mr-2" /> Prompt Engineering for Production</li>
              </ul>
            </InfoCard>

            <InfoCard icon={GraduationCap} title="Academic Excellence">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center"><BookOpen className="h-4 w-4 text-brand-purple mr-2" /> B.Tech in ICE (NIT Jalandhar) - 8.0 GPA</li>
                <li className="flex items-center"><BookOpen className="h-4 w-4 text-brand-purple mr-2" /> IEEE Sensors Published Author</li>
                <li className="flex items-center"><BookOpen className="h-4 w-4 text-brand-purple mr-2" /> Smart India Hackathon Finalist</li>
                <li className="flex items-center"><BookOpen className="h-4 w-4 text-brand-purple mr-2" /> Data Science Certifications (Udemy/Postman)</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Code} title="Engineering Core">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center"><Heart className="h-4 w-4 text-brand-purple mr-2" /> MERN Stack & Next.js Ecosystems</li>
                <li className="flex items-center"><Heart className="h-4 w-4 text-brand-purple mr-2" /> Robust RESTful API Architecture</li>
                <li className="flex items-center"><Heart className="h-4 w-4 text-brand-purple mr-2" /> Clean Code & System Design</li>
                <li className="flex items-center"><Heart className="h-4 w-4 text-brand-purple mr-2" /> Distributed Systems Enthusiast</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;