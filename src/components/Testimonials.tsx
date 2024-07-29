import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface Props {
  id?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with [Your Name] was an absolute pleasure. Their attention to detail and creative problem-solving skills significantly improved our project's outcome.",
    author: "Jane Doe",
    role: "Project Manager",
    company: "Tech Innovations Inc.",
  },
  {
    quote:
      "[Your Name] consistently delivered high-quality work that exceeded our expectations. Their ability to understand and implement our vision was impressive.",
    author: "John Smith",
    role: "CEO",
    company: "Digital Solutions Ltd.",
  },
  {
    quote:
      "I was blown away by [Your Name]'s technical expertise and collaborative approach. They're a true asset to any development team.",
    author: "Emily Johnson",
    role: "Lead Developer",
    company: "WebCraft Systems",
  },
];

const Testimonials: React.FC<Props> = ({id}) => {
  return (
    <section id={id} className="py-20 px-4 md:px-6 lg:px-18 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
