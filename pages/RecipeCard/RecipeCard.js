const RecipeCard = () => {
    return (
<section classNameName="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Hungry??? <br /> Type ingredients to demolish your hunger!!</h2>
      </div>

  </div>
</section>
    )
}

export default RecipeCard;