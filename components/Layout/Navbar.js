import React from "react";
import Link from "next/link"

const Navbar = ({handleThemeToggle, hasDarkModeEnabled}) => {
  return ( 
    <div className="py-2 px-4 md:px-8 w-full bg-white dark:bg-gray-900 transition-colors duration-500 ease-out border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white h-16 z-50">
      <div className="flex justify-between items-center">
      <Link href="/">
        {hasDarkModeEnabled ? (
          <span className="ml-8 text-3xl font-title cursor-pointer">EatFit</span>
        ) : (
          <span className="ml-8 text-3xl font-title cursor-pointer dark:text-white">EatFit</span>
        )}
        </Link>
        <div className="flex flex-row">
          <div
            className="ml-2 p-2 bg-gray-200 dark:bg-gray-600 transition-colors duration-500 ease-out rounded-full cursor-pointer text-center text-gray-800 dark:text-white font-bold"
            onClick={handleThemeToggle}
          >
            <span>
              {hasDarkModeEnabled ? (
                // SUN ICON
                <svg
                  className="w-7 transition-all ease-out duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Switch to Light Mode"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // MOON ICON
                <svg
                  className="w-7 transition-all ease-out duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Switch to Dark Mode"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar;