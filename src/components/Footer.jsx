import User from "../assets/user_icon.svg";

const Footer = () => {
  return (
    <>
    <footer className="text-white py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">
            <span className="text2">A</span>tul
          </h2>
          <p className="mt-2 text-gray-400 max-w-lg">
          I am a full-stack web developer, from Dehradun, Uttarakhand. I have
          completed a 3-month internship at NovaNectar Service Pvt Ltd.
        </p>
        </div>

        {/* Right Side */}
        <div className="flex gap-2 items-center md:items-end mt-6 md:mt-0 ">
          <div className="flex items-center space-x-3 bg-gray-800 px-4 py-2 rounded-full border border-transparent hover:border-white ">
            <img src={User} className="text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white placeholder-gray-500"
            />
          </div>
            <button className="btn1 px-4 py-2 rounded-full text-white font-semibold">
              Subscribe
            </button>
        </div>
      </div>
      
    </footer>
    <div className="w-full px-4 py-6">
    <hr className="max-w-6xl mx-auto border-gray-400 " />
    <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto text-center sm:text-left">
      <p className="mt-4 text-gray-500">
        © 2025 Atul Semwal. All rights reserved.
      </p>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 text-gray-400">
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Connect with me</a>
      </div>
    </div>
  </div>
  </>
  );
};

export default Footer;
