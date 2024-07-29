import React from "react";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  github?: string;
  blogPost?: string;
}

interface Props {
  id?: string;
}

const projects: Project[] = [
  {
    title: "MVP for UK healthcare startup",
    description:
      "Acutee is UK based company foucing in providing fast and cheap Fastest and Cheapest Journey to Complete Diagnosis in Under a Week using AI. I've built the MVP platform",
    imageUrl: "/acutee.svg",
    
    link: "https://acutee.co",
  },
  {
    title: "Co founding Alimny - علمني",
    description:
      "Full-stack e-commerce solution with user authentication, product management, and payment integration.",
    imageUrl: "/alimny.jpg",
    link: "https://alimny.education",
  },
  
];

const Projects: React.FC<Props> = ({id}) => {
  return (
    <section id={id} className="py-20 px-4 md:px-6 lg:px-18 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg mb-3 overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Visit Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  )}
                  {project.blogPost && (
                    <a
                      href={project.blogPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 transition-colors duration-300"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
