import React from "react";

const skills = [
  { id: 1, title: "HTML & CSS",
     desc: "Proficient in HTML for structuring web content and CSS for styling, layout to create visually appealing and user-friendly web pages." },
  { id: 2, title: "Tailwind-Bootstrap",
     desc: "Tailwind CSS for utility-first styling and Bootstrap for responsive, pre-built UI components, ensuring efficient and modern web design" },
  { id: 3, title: "JavaScript",
     desc: "JavaScript for building interactive, dynamic web applications with DOM manipulation, event handling, and API integration." },
  { id: 4, title: "React",
     desc: "React.js for building dynamic and scalable user interfaces using component-based architecture, state management, React Router." },
  { id: 5, title: "ExpressJS",
     desc: "Express.js for building fast, scalable backend applications with routing, middleware, and RESTful API development." },
  { id: 6, title: "MongoDB",
     desc: " MongoDB for building scalable database solutions with CRUD operations, data modeling, and integration with Node.js and Express.js." },
];

const Skills = () => {
  return (
    <section id="services"className="text-white py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
           <span className="text2">My Skills</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6 ">
        {skills.map((skills) => (
          <div key={skills.id} className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition duration-300 img2">
            <p className="text-sm text-gray-100">{`0${skills.id}`}</p>
            <h3 className="text-xl font-semibold text1">{skills.title}</h3>
            <p className="text-gray-300 mt-2">{skills.desc}</p>
            {/* <a href="#" className="mt-4 inline-block text-purple-400 hover:text-orange-400 transition duration-200">
              Read More →
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
