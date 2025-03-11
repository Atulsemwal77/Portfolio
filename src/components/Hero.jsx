import profile from "../assets/profile_img.svg";
import profile2 from "../assets/profile_img2.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import resume from "../assets/Atulsemwal.pdf";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <div
        id="home"
        className="hero flex flex-col items-center gap-6 px-4 md:px-10 lg:px-20 text-center  "
      >
        {/* <img src={profile} alt="Profile" className="mt-10 w-40 h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" /> */}
        <img
          src={profile2}
          alt="Profile"
          className="mt-10 w-40 h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full  "
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          I'm <span className="text1">Atul Semwal</span>,{" "}
          <br className="hidden md:block" />
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Full-stack Web Developer,
        </h1>

        <p className="w-full sm:w-3/4 lg:w-1/2 text-lg md:text-xl leading-relaxed text-gray-300">
          I am a full-stack web developer, from Dehradun, Uttarakhand. I have
          completed a 3-month internship at NovaNectar Service Pvt Ltd.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 text-lg font-semibold mb-10">
          <button className="px-6 py-2 md:py-3 rounded-full border border-transparent text-white hover:border-white transition btn1">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me{" "}
            </AnchorLink>
          </button>
          <button
            className="px-7 py-2 md:py-3 rounded-full border border-white hover:border-purple-500 transition duration-300"
            onClick={() => setShowResume(true)}
          >
            My Resume
          </button>

          {/* Modal */}
          {showResume && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-5 rounded-lg max-w-3xl w-full relative">
                {/* Close Button (Fixed to Top-Right) */}
                <button
                  className="absolute top-0 right-0 text-red-600 text-lg"
                  onClick={() => setShowResume(false)}
                >
                  ❌
                </button>

                {/* PDF Viewer */}
                <iframe src={resume} className="w-full h-96"></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Hero;
