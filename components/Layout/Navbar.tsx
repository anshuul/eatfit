import React from "react";

const Navbar = () => {
  return ( 
    <nav className="fixed top-0 inset-x-0 z-50 py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-white transition-colors duration-500 ease-out dark:bg-gray-800 shadow-lg w-full">
        <span className="ml-8 text-3xl font-title">EatFit</span>
    </nav>
  )
}

export default Navbar;