import React, { useEffect } from "react";

const APP_ID = "3d7c22cc";
const APP_KEY = "7e3eebab05c5f89c988202dc715ff960"



const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  console.log(data);
}

const Home = () => {
  useEffect(() => {
    getRecipes();
  })
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <div className="flex flex-row mt-28 w-10/12 m-auto">
        <input
          type="text"
          placeholder="Search for Movies and TV Shows..."
          className="mr-12 px-3 py-3 placeholder-gray-800 text-gray-800 relative bg-gray-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10 dark:placeholder-gray-200 dark:bg-gray-700 dark:text-gray-200"
          /* onChange={handleChange} */
          aria-label="Search for Movies and TV Shows..."
        />
            <button className="bg-secondary hover:bg-secondaryHover rounded text-white p-2 pl-4 pr-4" >
            <p className="font-semibold text-xs">Search</p>
    </button>
      </div>
    </>
  )
}

export default Home;

