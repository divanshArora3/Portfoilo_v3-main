
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { ArrowRight, Code, GraduationCap, Briefcase, Star, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      title: "DevDotJobs - Job Portal",
      description: "A job portal for developers to find and post job listings.",
      image: "https://private-user-images.githubusercontent.com/150253488/457561397-cc7268b6-68c5-452c-a45c-9bc3f1287f20.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2MDIxOTYsIm5iZiI6MTc1MDYwMTg5NiwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NTYxMzk3LWNjNzI2OGI2LTY4YzUtNDUyYy1hNDVjLTliYzNmMTI4N2YyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyMlQxNDE4MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01N2U3YzcwNjE4ZjY0YTEwNmQ3ZDEyM2Y4NzhkYjdkOTA3ODYxZjIwZDViZmZjYzgxNmY1MjAzZWMwNTQ1ZTYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.S0gZRNipQ2hf671uPvmHHd_GkBfXOVVDTk6GyJ5JXYY",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      link: "/projects",
      code: "https://github.com/divanshArora3/dev.jobs"
    },
    {
      title: "Divansh's Blog",
      description: "Machine learning model to detect and classify oral cancer levels from images.",
      image: "https://private-user-images.githubusercontent.com/150253488/457561005-807c0751-92ef-4964-81fc-ecd6bffe4182.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2MDIxNDIsIm5iZiI6MTc1MDYwMTg0MiwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NTYxMDA1LTgwN2MwNzUxLTkyZWYtNDk2NC04MWZjLWVjZDZiZmZlNDE4Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyMlQxNDE3MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ODA2ZGMyZTYwMDI2ZjRlMTllMThjNDFlMmZlM2I0NjdjMDFmYjQ2MzdhYTNmMzUzYWQ0OTAxMGJiNjQxMGQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.I2qQqlm3TG_7k99wyhRDb0VzjTLB3-XY0zRGg3rWBbo",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      link: "/projects",
      code: "https://github.com/divanshArora3/Divansh-s-blog-FullStack"
    },
    {
      title: "Recordmate",
      description: "A web application for recording and sending transcripts automatically ",
      image: "https://private-user-images.githubusercontent.com/150253488/457756044-80f8f668-489c-4e74-b120-17b9e3f94f34.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2NTk1NjUsIm5iZiI6MTc1MDY1OTI2NSwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NzU2MDQ0LTgwZjhmNjY4LTQ4OWMtNGU3NC1iMTIwLTE3YjllM2Y5NGYzNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QwNjE0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MjBiN2ZhOTE5Njk1OTc4ZjViMDJlODIwMjYyNzQ4YjI0ZDFkYmQ4ZTFkYWEzYzg5MGI1Zjk3NDIzOWU3YThhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7G8-zldoWzAnN8Fg8EuwusSd2NZRHuQX8Q5h2NM3vII",
      tags: ["React.js", "Puppeteer","JWT","Node.js", "MongoDb", "Express.js"],
      link: "/projects",
      code: "https://github.com/divanshArora3/RECORDMATE"
    },
  ];

  const techStack = [
    { name: "JavaScript", proficiency: 90 },
    { name: "C/C++",},
    { name: "React.js"},
    { name: "Node.js"},
    { name: "MongoDb"},
    { name: "Next.js"},
    { name: "Postman"},
    { name: "Git/Github"},
    { name: "Python"},
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
              About Me
            </span>
            <h2 className="text-4xl font-bold mb-6">Who I Am</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              I'm an Instrumentation and Control student. Passionate about programming, AI integration, and building innovative web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Code className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Web Development
              </h3>
              <p className="text-muted-foreground text-center">
                Experienced in building modern, responsive web applications using React.js, Next.js, and Node.js.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Computer Science
              </h3>
              <p className="text-muted-foreground text-center">
                Strong foundation in algorithms, data structures, and programming principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Briefcase className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                AI & Machine Learning
              </h3>
              <p className="text-muted-foreground text-center">
                Specializing in artificial intelligence and machine learning algorithms and applications.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
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
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A collection of technologies I work with to build web applications and solve complex problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{tech.name}</h3>
                  <span className="text-sm text-muted-foreground">{tech.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
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
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A selection of my recent web development and programming projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs py-1 px-3 bg-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href={project.code}
                      className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-lg max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-6 mx-auto">
              <Star className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently available for freelance work and open to new opportunities.
              If you have a project in mind or want to collaborate, let's connect!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
