import Link from "next/link";
import RecipeCard from "../RecipeCard/RecipeCard"

const RecipeCardSummary = ({ recipe }) => {
    console.log(recipe);
    /* if (recipe.length !== 0) return <Link href="/"/> */
    return recipe.map((r, index) => {
        return (

                <RecipeCard 
                    key={index} 
                    title={r.recipe.label}
                    image={r.recipe.image} 
                    calories={Math.round(r.recipe.calories)}
                    ingredients={r.recipe.ingredients}
                />

        )
    })

}
export default RecipeCardSummary;