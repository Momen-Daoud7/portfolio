import React from "react";

interface ProcessStep {
  title: string;
  description: string;
  icon: string; // This could be an emoji or an SVG path
}

const processSteps: ProcessStep[] = [
  {
    title: "Understanding The Problem",
    description:
      "I begin by thoroughly understanding your goals, target audience, and project requirements.",
    icon: "🔍",
  },
  {
    title: "Planning",
    description:
      "Next, I create a detailed project plan, including timelines, milestones, and deliverables.",
    icon: "📝",
  },
  {
    title: "Design",
    description:
      "I then craft intuitive and visually appealing designs that align with your brand and user needs.",
    icon: "🎨",
  },
  {
    title: "Development",
    description:
      "Using cutting-edge technologies, I bring the designs to life with clean, efficient code.",
    icon: "💻",
  },
  {
    title: "Testing",
    description:
      "Rigorous testing ensures that the final product is bug-free and performs optimally across all devices.",
    icon: "🧪",
  },
  {
    title: "Launch & Support",
    description:
      "After a successful launch, I provide ongoing support and maintenance to ensure continued success.",
    icon: "🚀",
  },
];

interface Props {
  id?: string;
}

const WorkProcess: React.FC<Props> = ({id}) => {
  return (
    <section id={id} className="py-20 px-4 md:px-6 lg:px-18 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My Work Process
        </h2>
        <p className="text-2xl font-light mb-12 text-center">Start with The Software Development Life Cycle</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
