import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  return (  
    <nav className="bg-white shadow-md">  
      <div className="container mx-auto p-4 flex justify-between items-center">  
        {/* Left Links */}  
        <div className="flex space-x-8">  
          <Link to="/" className="text-gray-800 hover:text-gray-500">Home</Link>  
          <Link to="/about" className="text-gray-800 hover:text-gray-500">About</Link>  
          <Link to="/portfolio" className="text-gray-800 hover:text-gray-500">Quick Portfolio</Link>  
        </div>  

        {/* Center Logo */}  
        <div className="text-center flex-grow">  
          <h1 className="text-2xl font-serif font-bold">  
            <span className="text-gray-800">-</span> Krishna Parmar <span className="text-gray-800">-</span>  
            <br/>
            <span className="text-gray-500 text-sm"> photography</span>  
          </h1>  
        </div>  

        {/* Hamburger Menu for Mobile */}  
        <div className="md:hidden">  
          <button  
            onClick={() => setIsOpen(!isOpen)}  
            className="text-gray-800 focus:outline-none"  
          >  
            <svg  
              className="h-6 w-6"  
              xmlns="http://www.w3.org/2000/svg"  
              fill="none"  
              viewBox="0 0 24 24"  
              stroke="currentColor"  
            >  
              {isOpen ? (  
                <path  
                  strokeLinecap="round"  
                  strokeLinejoin="round"  
                  strokeWidth={2}  
                  d="M6 18L18 6M6 6l12 12"  
                />  
              ) : (  
                <path  
                  strokeLinecap="round"  
                  strokeLinejoin="round"  
                  strokeWidth={2}  
                  d="M4 6h16M4 12h16m-7 6h7"  
                />  
              )}  
            </svg>  
          </button>  
        </div>  

        {/* Right Links */}  
        <ul  
          className={`hidden md:flex space-x-8 text-gray-800 ${  
            isOpen ? "block" : "hidden"  
          }`}  
        >  
          <li className="hover:text-gray-500">  
            <Link to="/wedding-stories">Wedding Stories</Link>  
          </li>  
          <li className="hover:text-gray-500">  
            <Link to="/wedding-films">Wedding Films</Link>  
          </li>  
          <li className="hover:text-gray-500">  
            <Link to="/contact">Contact</Link>  
          </li>  
        </ul>  
      </div>  
    </nav>  
  );  
};  

export default Navbar;