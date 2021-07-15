import RecipeCard from "../RecipeCard/RecipeCard"

const RecipeCardSummary = ({ recipe }) => {
    return recipe.map((recipe) => {
        return (

                <RecipeCard 
                    key={recipe.recipe.label} 
                    title={recipe.recipe.label}
                    image={recipe.recipe.image} 
                    calories={Math.round(recipe.recipe.calories)}
                />

        )
    })

}
export default RecipeCardSummary;