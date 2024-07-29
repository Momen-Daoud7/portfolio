import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-tighter">
            Momen
            <span className="text-[33px] inline-block ml-[1px] text-moxa-blue font-bold">
              .
            </span>
          </h3>
          <p className="mb-4">
            Crafting digital solutions with passion and precision.
          </p>
          <p>© 2024 Momen. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/Momen-Daoud7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-moxa-blue transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/momen-daoud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-moxa-blue transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://medium.com/@momendaoud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-moxa-blue transition-colors duration-300"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="mailto:momendaoud.soft@gmail.com"
                className="hover:text-moxa-blue transition-colors duration-300"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
