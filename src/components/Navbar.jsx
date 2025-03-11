import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons
import logo from "../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // Toggle mobile menu

  return (
    <>
      <div className="bg-black flex justify-between items-center px-6 md:px-12 py-4 shadow-md sticky top-0 w-full z-50 ">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-24 md:w-32" />

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:space-x-8 text-lg font-medium text-white md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="cursor-pointer transition px-6 md:px-0 py-3 md:py-0 text-center">
            <AnchorLink
              className="anchor-link"
              href="#home"
              onClick={() => {
                setMenu("home");
                setIsOpen(false);
              }}
            >
              <p className={menu === "home" ? "text2" : ""}>Home</p>
            </AnchorLink>
          </li>
          <li className="cursor-pointer transition px-6 md:px-0 py-3 md:py-0 text-center">
            <AnchorLink
              className="anchor-link"
              href="#about"
              onClick={() => {
                setMenu("about");
                setIsOpen(false);
              }}
            >
              <p className={menu === "about" ? "text2" : ""}>About</p>
            </AnchorLink>
          </li>
          <li className="cursor-pointer transition px-6 md:px-0 py-3 md:py-0 text-center">
            <AnchorLink
              className="anchor-link"
              href="#services"
              onClick={() => {
                setMenu("services");
                setIsOpen(false);
              }}
            >
              <p className={menu === "services" ? "text2" : ""}>Skills</p>
            </AnchorLink>
          </li>
          <li className=" cursor-pointer transition px-6 md:px-0 py-3 md:py-0 text-center">
            <AnchorLink
              className="anchor-link"
              href="#work"
              onClick={() => {
                setMenu("work");
                setIsOpen(false);
              }}
            >
              <p className={menu === "work" ? "text2" : ""}>Work</p>
            </AnchorLink>
          </li>
          <li className=" cursor-pointer transition px-6 md:px-0 py-3 md:py-0 text-center">
            <AnchorLink
              className="anchor-link"
              href="#contact"
              onClick={() => {
                setMenu("contact");
                setIsOpen(false);
              }}
            >
              <p className={menu === "contact" ? "text2" : ""}>Contact</p>
            </AnchorLink>
          </li>
        </ul>

        {/* Connect Button (Visible on larger screens) */}
        <button className="hidden md:block px-6 py-2 text-white font-semibold rounded-full btn1">
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </button>
      </div>
    </>
  );
};

export default Navbar;
