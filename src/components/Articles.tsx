import React from "react";
import { Link } from "react-router-dom";

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  id?: string;
}
 interface Props {
   id?: string;
 }
const articles: Article[] = [
  {
    title:
      "Efficient and Elegant Web Development with Next.js: A Deep Dive into Component Streaming and Chunked Transfer Encoding",
    description:
      "deep dive into component streaming and chunked transfer encoding,exploring how Next.js leverages these technologies to optimize content delivery and enhance user experience. We’ll also examine the nuances of HTTP transmission and how Next.js aligns with the realities of web browsing.",
    date: "Nov 18, 2023",
    readTime: "10 min read",
    link: "https://medium.com/@momendaoud/efficient-and-elegant-web-development-with-next-js-6087b3fd86e1",
  },
  
];

const Articles: React.FC<Props> = ({id}) => {
  return (
    <section id={id} className="py-20 px-4 md:px-6 lg:px-18 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    to={article.link}
                    target="_blank"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="https://medium.com/@momendaoud"
            target="_blank"
            className="inline-block px-6 py-3 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;
