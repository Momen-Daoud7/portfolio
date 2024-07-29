import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-18 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-xl mb-8">
          Let's collaborate and create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            View my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
