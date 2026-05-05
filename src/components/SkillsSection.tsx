import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database } from "lucide-react";

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills = [
    // --- Data Engineering (New & Updated) ---
    { name: "PySpark", category: "Data Engineering", color: "#E25A1C", bgColor: "bg-orange-500/20" },
    { name: "Databricks", category: "Data Engineering", color: "#FF3621", bgColor: "bg-red-500/20" },
    { name: "Azure", category: "Data Engineering", color: "#0089D6", bgColor: "bg-blue-500/20" },
    { name: "GCP", category: "Data Engineering", color: "#4285F4", bgColor: "bg-blue-400/20" },
    { name: "Snowflake", category: "Data Engineering", color: "#29B5E8", bgColor: "bg-cyan-400/20" },
    { name: "BigQuery", category: "Data Engineering", color: "#4285F4", bgColor: "bg-blue-600/20" },
    { name: "SQL", category: "Database", color: "#4479A1", bgColor: "bg-blue-500/20" },

    // --- Frontend ---
    { name: "JavaScript", category: "Frontend", color: "#F7DF1E", bgColor: "bg-yellow-500/20" },
    { name: "NextJS", category: "Frontend", color: "#FFFFFF", bgColor: "bg-gray-900/40" },
    { name: "ReactJs", category: "Frontend", color: "#61DAFB", bgColor: "bg-cyan-500/20" },
    { name: "Tailwind", category: "Frontend", color: "#06B6D4", bgColor: "bg-cyan-500/20" },
    { name: "HTML", category: "Frontend", color: "#E34F26", bgColor: "bg-red-500/20" },
    { name: "CSS", category: "Frontend", color: "#1572B6", bgColor: "bg-blue-600/20" },

    // --- Backend & Database ---
    { name: "Node.JS", category: "Backend", color: "#339933", bgColor: "bg-green-600/20" },
    { name: "Express.JS", category: "Backend", color: "#FFFFFF", bgColor: "bg-gray-800/40" },
    { name: "MongoDB", category: "Database", color: "#47A248", bgColor: "bg-green-500/20" },
    { name: "MySQL", category: "Database", color: "#4479A1", bgColor: "bg-blue-500/20" },
    { name: "Firebase", category: "Database", color: "#FFCA28", bgColor: "bg-yellow-600/20" },

    // --- DSA & AI/ML ---
    { name: "Python", category: "DSA", color: "#3776AB", bgColor: "bg-blue-500/20" },
    { name: "C/C++", category: "DSA", color: "#00599C", bgColor: "bg-blue-700/20" },
    { name: "Tensorflow", category: "AI/ML", color: "#FF6F00", bgColor: "bg-orange-600/20" },
    { name: "Pandas", category: "AI/ML", color: "#150458", bgColor: "bg-indigo-900/20" },
    { name: "Numpy", category: "AI/ML", color: "#013243", bgColor: "bg-purple-900/20" },

    // --- Tools ---
    { name: "Git", category: "Tool", color: "#F05032", bgColor: "bg-red-500/20" },
    { name: "GitHub", category: "Tool", color: "#FFFFFF", bgColor: "bg-gray-900/40" },
    { name: "VSCode", category: "Tool", color: "#007ACC", bgColor: "bg-blue-900/20" },
  ];

  const categories = ["All", "Data Engineering", "Frontend", "DSA", "Backend", "Databases", "AI/ML", "Tools"];

  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => {
        if (activeFilter === "Databases") return skill.category === "Database";
        if (activeFilter === "Databases" && skill.name === "SQL") return true;
        return skill.category === activeFilter;
      });

  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
      "PySpark": "devicon-apachespark-original",
      "Databricks": "devicon-apachespark-plain",
      "Azure": "devicon-azure-plain",
      "GCP": "devicon-googlecloud-plain",
      "Snowflake": "devicon-snowflake-plain",
      "BigQuery": "devicon-googlecloud-plain",
      "SQL": "devicon-mysql-plain",
      "JavaScript": "devicon-javascript-plain",
      "Python": "devicon-python-plain",
      "C/C++": "devicon-cplusplus-plain",
      "NextJS": "devicon-nextjs-original",
      "ReactJs": "devicon-react-original",
      "HTML": "devicon-html5-plain",
      "CSS": "devicon-css3-plain",
      "Tailwind": "devicon-tailwindcss-plain",
      "Node.JS": "devicon-nodejs-plain",
      "Express.JS": "devicon-express-original",
      "Firebase": "devicon-firebase-plain",
      "MongoDB": "devicon-mongodb-plain",
      "MySQL": "devicon-mysql-plain",
      "GitHub": "devicon-github-original",
      "VSCode": "devicon-vscode-original",
      "Git": "devicon-git-plain",
      "Pandas": "devicon-pandas-original",
      "Numpy": "devicon-numpy-original",
      "Tensorflow": "devicon-tensorflow-original",
    };

    return iconMap[name] || "devicon-code-plain";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-8 rounded-xl backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold flex items-center text-white">
          <Database className="w-6 h-6 mr-3 text-brand-purple" />
          Technical Stack
        </h3>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 backdrop-blur-sm border ${
              activeFilter === category
                ? "bg-brand-purple text-white border-brand-purple/50 shadow-[0_0_15px_rgba(155,135,245,0.3)]"
                : "bg-gray-800/30 text-gray-400 border-white/5 hover:bg-gray-800/50 hover:text-white"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-8 gap-x-4"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center group"
          >
            <div
              className={`relative w-14 h-14 ${skill.bgColor} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/5 group-hover:border-brand-purple/40 transition-all duration-300`}
            >
              <i className={`${getSkillIcon(skill.name)} text-2xl`} style={{ color: skill.color }}></i>
            </div>
            
            <span className="text-[10px] uppercase tracking-wider font-semibold mt-3 text-center text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;