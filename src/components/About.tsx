import React from "react";

interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="py-20 px-4 md:px-6 lg:px-18 bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Software Was Always My Passion.
            </h2>
            <p className="text-gray-600">
              A career in programming has always been my passion. I remember the
              day I missed my first programming lecture at university, and how
              it left me feeling lost and confused. But I didn't let that stop
              me. I turned to YouTube and watched a couple of C++ tutorials, and
              before I knew it, I was hooked. I loved the idea of building
              something that people could interact with. A few weeks later, I
              got into web development, and I've been doing it ever since.
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              My favorite part of programming is the problem-solving aspect. I
              love the feeling of finally figuring out a solution to a problem.
              I'm currently on the lookout for a role in Frontent web
              development, ideally writing JavaScript or Python. I do like to
              work on AI projects or a startup that has some AI projects in
              mind. If you're hiring, let's chat!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 p-6">
            <p className="text-gray-600 uppercase text-sm tracking-wider mb-2">
              Born in
            </p>
            <h3 className="text-xl font-bold">New York</h3>
          </div>
          <div className="border border-gray-200 p-6">
            <p className="text-gray-600 uppercase text-sm tracking-wider mb-2">
              Experience
            </p>
            <h3 className="text-xl font-bold">3+ Years</h3>
          </div>
          <div className="border border-gray-200 p-6">
            <p className="text-gray-600 uppercase text-sm tracking-wider mb-2">
              Date of Birth
            </p>
            <h3 className="text-xl font-bold">27 June 1992</h3>
          </div>
          <div className="border border-gray-200 p-6">
            <p className="text-gray-600 uppercase text-sm tracking-wider mb-2">
              Based in
            </p>
            <h3 className="text-xl font-bold">New Work</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
