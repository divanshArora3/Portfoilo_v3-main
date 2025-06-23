import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
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
      image: "https://private-user-images.githubusercontent.com/150253488/457561397-cc7268b6-68c5-452c-a45c-9bc3f1287f20.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2MDIxOTYsIm5iZiI6MTc1MDYwMTg5NiwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NTYxMzk3LWNjNzI2OGI2LTY4YzUtNDUyYy1hNDVjLTliYzNmMTI4N2YyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyMlQxNDE4MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01N2U3YzcwNjE4ZjY0YTEwNmQ3ZDEyM2Y4NzhkYjdkOTA3ODYxZjIwZDViZmZjYzgxNmY1MjAzZWMwNTQ1ZTYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.S0gZRNipQ2hf671uPvmHHd_GkBfXOVVDTk6GyJ5JXYY",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      code: "https://github.com/divanshArora3/dev.jobs",
      category: "web"
    },
    {
      id: 2,
      title: "Divansh's Blog",
      description: "Machine learning model to detect and classify oral cancer levels from images.",
      image: "https://private-user-images.githubusercontent.com/150253488/457561005-807c0751-92ef-4964-81fc-ecd6bffe4182.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2MDIxNDIsIm5iZiI6MTc1MDYwMTg0MiwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NTYxMDA1LTgwN2MwNzUxLTkyZWYtNDk2NC04MWZjLWVjZDZiZmZlNDE4Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyMlQxNDE3MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ODA2ZGMyZTYwMDI2ZjRlMTllMThjNDFlMmZlM2I0NjdjMDFmYjQ2MzdhYTNmMzUzYWQ0OTAxMGJiNjQxMGQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.I2qQqlm3TG_7k99wyhRDb0VzjTLB3-XY0zRGg3rWBbo",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      code: "https://github.com/divanshArora3/dev.jobs",
      category: "web"
    },
    {
      id: 3,
      title: "Recordmate",
      description: "A web application for recording and sending transcripts automatically ",
      image: "https://private-user-images.githubusercontent.com/150253488/457756044-80f8f668-489c-4e74-b120-17b9e3f94f34.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2NTk1NjUsIm5iZiI6MTc1MDY1OTI2NSwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NzU2MDQ0LTgwZjhmNjY4LTQ4OWMtNGU3NC1iMTIwLTE3YjllM2Y5NGYzNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QwNjE0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MjBiN2ZhOTE5Njk1OTc4ZjViMDJlODIwMjYyNzQ4YjI0ZDFkYmQ4ZTFkYWEzYzg5MGI1Zjk3NDIzOWU3YThhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7G8-zldoWzAnN8Fg8EuwusSd2NZRHuQX8Q5h2NM3vII",
      tags: ["React.js", "Puppeteer","JWT","Node.js", "MongoDb", "Express.js"],
       code: "https://github.com/divanshArora3/RECORDMATE",
      category: "web"
    },
    {
      id: 4,
      title: "FitnessGuru",
      description: "FitnessGuru is a full-stack fitness tracking and workout management application designed to help users stay on top of their health and training goals. It allows users to create personalized workout routines, log daily exercises, track progress over time, and stay motivated through a clean, user-friendly dashboard.",
      image: "https://private-user-images.githubusercontent.com/150253488/457760261-4f70f37a-bc71-466c-bc67-7977c2e321f0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2NjAzNDEsIm5iZiI6MTc1MDY2MDA0MSwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NzYwMjYxLTRmNzBmMzdhLWJjNzEtNDY2Yy1iYzY3LTc5NzdjMmUzMjFmMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QwNjI3MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZjM2ODExNDQxNzRjMWUyNjQ3MDRjM2FlMjU2MDE0MWQzNGI3NjlhN2RlMzNmMjhjMTU2OTVmZWI5NjQxZWExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SQjp0T8Jrx6AlDMSsxEXyExLMK_nfiFNJnCg8d7vuxo",
      tags: ["Express.js","React.js", "Node.js", "MongoDB","JWT"],
      code: "https://github.com/divanshArora3/FitnessGuru",
      category: "web"
    },
    {
      id: 5,
      title: "Weather app",
      description: "Weather Report is a responsive web application that allows users to get real-time weather updates for any city around the world. Built using HTML, CSS, and JavaScript, it fetches data from the OpenWeatherMap API and displays key weather parameters in a clean, user-friendly interface.",
      image: "https://private-user-images.githubusercontent.com/150253488/457762247-7803fa13-b8d7-45aa-bb7e-e0a65f5b319b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2NjA3NDksIm5iZiI6MTc1MDY2MDQ0OSwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NzYyMjQ3LTc4MDNmYTEzLWI4ZDctNDVhYS1iYjdlLWUwYTY1ZjViMzE5Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QwNjM0MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZWNmN2QzN2ExMDI1NGNjNTIyOGZkNmExYjIxNGJkZGFjZTA5OGQwNmM5ZjVjYTI0NjI2MjU5ZGMyYzAyNDEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.i7M-p64Vr9lx8juy7PRnneFFZTiz0lqrbJ-WpIsQRSk",
      tags: ["JavaScript", "Node.js", "html","CSS"],
      code: "https://github.com/divanshArora3/Weather_Report",
      category: "web"
    },
    {
      id: 6,
      title: "DSA Tracker",
      description: "A website that contains important questions for data structure and algorithms with many features like community, goals, compiler, etc.",
      image: "https://private-user-images.githubusercontent.com/150253488/457763780-57b8dd67-25ba-4c39-beeb-d8547c66ce7e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2NjExOTEsIm5iZiI6MTc1MDY2MDg5MSwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NzYzNzgwLTU3YjhkZDY3LTI1YmEtNGMzOS1iZWViLWQ4NTQ3YzY2Y2U3ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QwNjQxMzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYmYxNWQ0ZDU5OTYxYzAxMzJhMDU5MWM5NzZhZDc1ZTk5NjcyNDYwMDgyYTY1MTc4Nzk4ZjVmMTQ5ZDUwN2IwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.xX_7unppEoMn4cNA_TIcGDU-plFs6AkKjfrKwmtTAl4",
      tags: ["ReactGA", "Node", "HTML","BootStrap-CSS","Monaco","Font Awesome"],
      code: "https://github.com/divanshArora3/DSA-Tracker",
      category: "web"
    },
    {
      id: 7,
      title: "attendance-report-system",
      description: "Python-based application that uses OpenCV and face recognition to automatically mark student attendance through webcam input. It ensures accurate, real-time attendance logging and generates reports that can be saved for future records.",
      image: "https://private-user-images.githubusercontent.com/150253488/457768755-6550fc43-6d41-4491-b76e-b96895072694.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2NjE5MTEsIm5iZiI6MTc1MDY2MTYxMSwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NzY4NzU1LTY1NTBmYzQzLTZkNDEtNDQ5MS1iNzZlLWI5Njg5NTA3MjY5NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QwNjUzMzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNWQ1NDEzN2Y1YTgyYmZhOTYzOGY3NDBhNGE5YmEwMjk4MDFmNWZhNzE1MzQ1NDI0ZTc2NzYwMmFkZjk5OWQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.26ap0QBjKgVg7wTs_6TSr0G8Z5tdwRi-QKdvCw_STx4",
      tags: ["Pyhton", "OpenCv","Machine Learning"],
      code: "https://github.com/divanshArora3/attendance-report-system",
      category: "ml"
    },
    {
      id: 8,
      title: "Obstacle avoiding robot",
      description: "A dashboard for monitoring and controlling smart home devices.",
      image: "https://private-user-images.githubusercontent.com/150253488/457769527-938c6b7e-464b-497b-997f-d2225363ae72.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2NjIxMDIsIm5iZiI6MTc1MDY2MTgwMiwicGF0aCI6Ii8xNTAyNTM0ODgvNDU3NzY5NTI3LTkzOGM2YjdlLTQ2NGItNDk3Yi05OTdmLWQyMjI1MzYzYWU3Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QwNjU2NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MjM5Y2RjNzI5NjNkZmMyMzlhNTE5Njc0MTYyOTM2ZDU0NWQ2YjI3NjY0MDcxZDQ5ZjRhMzI1MTdiMGFlOTZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.athT10hPamtIiNdGUg5WBV2kOKr97LAWjVw_3S6Qv4I",
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
    { id: "blockchain", name: "Blockchain" },
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
