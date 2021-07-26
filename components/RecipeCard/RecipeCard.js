import Link from "next/link"
import { useRouter } from "next/dist/client/router";
import { atom, useRecoilState } from "recoil"
import { useEffect } from "react";
import { recipeState } from "../../recoil/atoms"

const RecipeCard = (props) => {

     /* console.log(props.title) */

    const [recipe, setRecipe] = useRecoilState(recipeState);
    const router = useRouter(); 


    const handleClick = () => {
        console.log(props);
        setRecipe(props);
        router.push({pathname: `/recipepage/${props.title}` })
    } 

    return (

            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={props.image} alt={props.title} />
                    <h4 className="text-lg text-gray-900 dark:text-gray-100 font-medium title-font mb-1">{props.title}</h4>
                    <h3 className="tracking-widest text-gray-900 dark:text-gray-100 text-xs font-medium title-font mb-2">Total Calories: {props.calories} cal</h3>

                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 mt-2 cursor-pointer" onClick={handleClick}>See Ingredients
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>

                </div>
            </div>


    )
}

export default RecipeCard;