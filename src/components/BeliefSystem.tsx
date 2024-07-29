import React from "react";
import { motion } from "framer-motion";

interface Belief {
  principle: string;
  description: string;
  icon: string; // This could be an emoji or an SVG path
}

interface Props {
  id?: string;
}

const beliefs: Belief[] = [
  {
    principle: "AI Is Here To Stay",
    description: "Collaboration breeds innovation and success.",
    icon: "👥",
  },
  {
    principle: "Understanding is half the solution",
    description: "Deep problem comprehension leads to effective solutions.",
    icon: "💡",
  },
  {
    principle: "Our Job As Software Engineers Is Just Solve Problems",
    description: "Embrace new technologies and methodologies.",
    icon: "📚",
  },
  {
    principle: "Think Twice Code Once.",
    description: "Always prioritize the end-user experience.",
    icon: "🎨",
  },
  {
    principle: "Built It Manual, Test it, If It Works Automate it",
    description: "Strive for elegant, uncomplicated solutions.",
    icon: "🗝️",
  },
  {
    principle: "Embrace failure",
    description: "Learn from mistakes and grow stronger.",
    icon: "🌱",
  },
];

const BeliefSystem: React.FC<Props> = ({id}) => {
  return (
    <section id={id} className="py-20 px-4 md:px-6 lg:px-18 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My Belief System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4 bg-red text-red">{belief.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{belief.principle}</h3>
              <p className="text-gray-600">{belief.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeliefSystem;
