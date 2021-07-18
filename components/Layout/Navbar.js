import React from "react";
import Link from "next/link"

const Navbar = () => {
  return ( 
    <nav className="py-2 px-4 md:px-8 w-full bg-white dark:bg-gray-900 transition-colors duration-500 ease-out">
      <Link href="/">
        <span className="ml-8 text-3xl font-title cursor-pointer">EatFit</span>
        </Link>
    </nav>
  )
}

export default Navbar;