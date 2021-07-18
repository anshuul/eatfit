import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { recipeState } from "../../recoil/atoms";
import Head from "next/head";
import Meta from "../../components/MetaTags/meta";
import Link from "next/link";
import { useEffect } from "react";


const Item = () => {

  const router = useRouter();

  const [recipe, setRecipe] = useRecoilState(recipeState);
  console.log(recipe);
/*   console.log(recipe.title, recipe.calories, recipe.image)
  console.log(recipe.ingredients) */

  useEffect(() => {
    if(recipe.length === 0) {
      router.push("/404")
    }
  } , [])

    return(
        <>
        <Head>
          <title>
            {recipe.title}
          </title>
          < Meta 
            title={recipe.title}
            description={recipe.title}
            imageURL={recipe.image}
          />
        </Head>

        {recipe.length !== 0 && (
                  <section className="text-gray-600 body-font mt-28">
                  <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={recipe.image} />
                      </div>
                      <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                          <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-bold title-font mt-4 text-gray-900 text-xl">{recipe.title}</h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <h3 className="tracking-widest text-gray font-medium font-body text-sm mb-2">Total Calories: {recipe.calories} cal</h3>
                          </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0">
                        <h2 className="font-bold title-font mt-4 text-gray-900 text-xl">Ingredients:</h2>
                          <ol className="list-decimal mt-5 ml-4">
                            {recipe.ingredients.map(ingredient => (
                              <li>
                                {ingredient.text}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        )}

</>
    )
}

export default Item;