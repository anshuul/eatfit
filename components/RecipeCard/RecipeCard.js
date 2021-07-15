const RecipeCard = ({ title, image, calories }) => {
    return (

            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt={title} />
                    <h4 className="text-lg text-gray-900 font-medium title-font mb-1">{title}</h4>
                    <h3 className="tracking-widest text-gray text-xs font-medium title-font mb-2">Total Calories: {calories} cal</h3>
                     <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>


    )
}

export default RecipeCard;