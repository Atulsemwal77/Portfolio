import React from "react";
import project from '../assets/project_1.png';
import project2 from '../assets/project_2.png';
import project3 from '../assets/project_3.png';
import project4 from '../assets/project_4.png';
import project5 from '../assets/project_5.svg';
import project6 from '../assets/project_6.png';

const projects = [
  { id: 1, title: "Tour & Travel Dashboard", image: project },
  { id: 2, title: "Stay BNB Website", image: project2 },
  { id: 3, title: "BootStrap Demo", image: project3 },
  { id: 4, title: "E-commerce Website", image: project4 },
  { id: 5, title: "Dental Care Website", image: project5 },
  { id: 6, title: "Portfolio Website", image: project6 },
];

const Work = () => {
  return (
    <section id="work" className="text-white py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          <span className="text2"> My Latest Work</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg border-2 border-gray-700 hover:border-purple-400 transition-all duration-300 cursor-pointer img2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300">
              <p className="text-lg font-semibold italic blur-lg text-white">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
