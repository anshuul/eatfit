import Link from "next/link"
import { useRouter } from "next/dist/client/router";

const RecipeCard = ({ title, image, calories, ingredients }) => {
    console.log(ingredients, "ingredients")

    const handleClick = () => {
        const router = useRouter();

        router.push({pathname: `/recipe/${title}`, query : {ingredients: ingredients } })
    }

    return (

            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt={title} />
                    <h4 className="text-lg text-gray-900 font-medium title-font mb-1">{title}</h4>
                    <h3 className="tracking-widest text-gray text-xs font-medium title-font mb-2">Total Calories: {calories} cal</h3>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    <Link href={`/recipepage/${title}`}>
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 mt-2" onClick={handleClick}>See Ingredients
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </Link>
                </div>
            </div>


    )
}

export default RecipeCard;