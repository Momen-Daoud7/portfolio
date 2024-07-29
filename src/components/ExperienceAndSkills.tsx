import React from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string,
}

interface SkillCategory {
  category: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "Freelancer",
    role: "Full Stack Engineer",
    period: "Feb 2021 - Present",
  },
  {
    company: "Acutee",
    role: "Full Stack Engineer",
    period: "Sep 2023 - Present",
    location: "London",
  },
  {
    company: "iGate Studio",
    role: "React Developer",
    period: "Nov 2022 - Sep 2023",
    location: "Saudi Arabia",
  },
  {
    company: "Circles",
    role: "React developer",
    period: "Mar 2023 - Aug 2023",
    location: "Khartoum",
  },
  // Add more experiences as needed
];

const skillCategories: SkillCategory[] = [
  {
    category: "AI",
    skills: [
      "Prompt Engineering",
      "Fine Tuning",
      "Function Calling",
      "AI Agents Development",
      "Integrating Exiting AI models like chatgpt to any system",
      "Open Source Models"
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      "React.js",
      "Next.js",
      "React Query",
      "Redux",
      "Zustand",
      "TailwindCss",
      "HTML",
      "CSS",
      "Javascript",
      "API Development and Integraion",
      "SQL",
      "PostgreSQL",
      "Mongo DB",
      "Python",
      "Flask",
      "Node.js",
      "Express",
      "Prisma",
      "Git & Github",
      "Docker",
      "CI / CD",
      "Unit Testing",
      "Integration Testing",
    ],
  },
  {
    category: "AI Automation (Low code Tools)",
    skills: ["Make.com", "Airtable"],
  },
  {
    category: "Tools",
    skills: ["Figma", "jira", "clickup", "Github"],
  },
  // Add more categories as needed
];

const ExperienceAndSkills: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-18 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Experience Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-600">{exp.role}</p>
                  {exp.location && (<p className="text-gray-600">{exp.location}</p>)}
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndSkills;
