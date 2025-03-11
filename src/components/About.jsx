import React from "react";
import profile from "../assets/about_profile.svg";
import profile2 from "../assets/profile_img2.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="text-white py-10 px-5 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 ">
        <span className="text2"> About me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* <img src={profile} alt="Profile" className="rounded-lg w-60   border" /> */}
        <img src={profile2} alt="Profile" className="rounded-lg w-60   border" />
        <div className="flex-1 text-gray-300">
          <p className="lg:text-lg mb-5 ">
            {/* I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth. */}
            To become a Full-Stack Web Developer with strong frontend skills in Bootstrap, Tailwind, JavaScript, and React. Currently learning backend technologies like Node.js, Express, and MongoDB to build complete and efficient web applications. Eager to contribute to innovative projects and grow in a dynamic development environment.
          </p>
          <p className="text-lg mb-5">
          I am passionate about full-stack web development and bring dedication and excitement to every project."
          </p>
          <div className="flex flex-col gap-y-5 justify-between  ">
            <div className="flex items-center gap-x-5 about">
              {" "}
              {/*about for hover effect*/}
              <p className="font-semibold ">Tailwind </p>
              <hr
                style={{ width: "80%" }}
                className="btn1 h-1 border-0 rounded"
              />
            </div>
            <div className="flex items-center gap-x-5 about">
              <p className="font-semibold">JS </p>
              <hr
                style={{ width: "70%" }}
                className="btn1 h-1 border-0 rounded "
              />
            </div>
            <div className="flex items-center gap-x-5 about">
              <p className="font-semibold">React </p>
              <hr
                style={{ width: "85%" }}
                className="btn1 h-1 border-0 rounded"
              />
            </div>
            <div className="flex items-center gap-x-5 about ">
              <p className="font-semibold">Express </p>
              <hr
                style={{ width: "60%" }}
                className="btn1 h-1 border-0 rounded"
              />
            </div>
          </div>  

        </div>
      </div>
      <div className="mt-10 flex justify-around text-center">
        <div className="about2 text-gray-300">
          {/**about2 for hove effect */}
          <h3 className="text-5xl font-bold text1">10+</h3>  {/** text2  -color gradient */}
          <p className="text-lg">Projects</p>
        </div>
        <div className="about2">
          {/**about2 for hove effect */}
          <h3 className="text-5xl font-bold text2">3</h3>
          <p className="text-lg">Month Internship</p>
        </div>
          {/**about2 for hove effect */}
        {/* <div className="about2 ">
          <h3 className="text-5xl font-bold text2">10+</h3>
          <p className="text-lg">Years of Experience</p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
