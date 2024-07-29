import React from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
}

const experiences: Experience[] = [
  {
    company: "Webflow",
    role: "Product Designer",
    period: "Aug 2022 - Present",
  },
  {
    company: "Mattered",
    role: "Product Designer",
    period: "Jun 2021 - Aug 2022",
  },
  {
    company: "Coca-Cola",
    role: "UX/UI Designer",
    period: "Jan 2020 - Jun 2021",
  },
  {
    company: "Adobe",
    role: "Visual Designer",
    period: "Jul 2018 - Jan 2020",
  },
  {
    company: "Subway",
    role: "Visual Designer",
    period: "Mar 2017 - Jul 2018",
  },
  {
    company: "Code Academy",
    role: "Visual Developer",
    period: "Sep 2015 - Mar 2017",
  },
];

const Experiences: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-18 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="mb-2 md:mb-0">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-gray-600">{exp.role}</p>
              </div>
              <p className="text-gray-500">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
