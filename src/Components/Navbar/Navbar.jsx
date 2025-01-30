
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const handleScroll = () => {
        if(window.scrollY > 20){
          setScrolling(true)
        }
        else setScrolling(false) 
  }
  const [isScrolling , setScrolling] = useState(false);
  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={`${isScrolling === false ? "py-4" : "py-2"} transition-[padding] duration-500 bg-secondary fixed top-0 left-0 right-0 z-10 text-white`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">START FRAMEWORK</span>
      </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden  focus:outline-none focus:ring-4 focus:ring-black "
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
        <ul className="font-bold  flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <NavLink to={'/about'} className=" block text-white py-2 px-3 ">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to={'/portfolio'} className="block text-white  py-2 px-3 ">PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className="block text-white py-2 px-3 ">CONTACT</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}