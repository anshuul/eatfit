import React, { useEffect, useState, Component } from "react";
import Image from "next/image"
import { Formik, Field } from "formik";
import { string, object } from "yup";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import RecipeCardSummary from "../components/RecipeCardSummary/RecipeCardSummary"
import Food1 from "../public/assets/food1.png";
import Food2 from "../public/assets/food2.png";
import Food3 from "../public/assets/food3.png";
import Food4 from "../public/assets/food4.png";
import Food5 from "../public/assets/food5.png";
import Loader from "../components/Loader/loader";
import Head from "next/head";
import Meta from "../components/MetaTags/meta"

const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const APP_KEY = process.env.NEXT_PUBLIC_APP_KEY;

const validationSchema = object().shape({
    ingredient: string()
      .required("Ingredient is required.")
      .min(2, "Please enter ingredient."),
  });
  const images = [Food1, Food2, Food3, Food4, Food5];
const Home = () =>  {
/*     state = {
        recipe: [],
        currentImage: "",
        isLoading: false,
    } */

    const [recipe, setRecipe] = useState([]);
    const [currentImage, setCurrentImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
     
/*   componentDidMount() {
      this.setState({
        currentImage: images[Math.floor(Math.random() * 5)]
      }, () => {console.log(this.state.currentImage)});

  } */

  useEffect(() => {
    setCurrentImage(images[Math.floor(Math.random() * 5)]);
    console.log(currentImage)
  }, [])

  useEffect(() => {
    console.log(recipe);
  }, [recipe])


  const handleSubmit = async (values, {resetForm}) => {
    /* router.push({pathname: 'recipie', query : {id: '12345', name: 'ABC' } }) */
    console.log(values);
    resetForm({ values: ""});
 /*    this.setState({
      ...this.state,
      isLoading: true
    }) */
    setIsLoading(true)
    let result = await axios.get(`https://api.edamam.com/search?q=${values.ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`);

    if(result.status == 200){
      console.log(result);
      setRecipe(result.data.hits)
    }else{
      console.log(result.statusText);
    }

    await setIsLoading(false)
        //  .then((res) => {
        //   this.setState({
        //     ...this.state,
        //     recipe: res.data.hits,
        //     isLoading: false,
        //   })
        //  })
        //  .catch((err) => {
        //    console.log(err)
        //  }) 
  }

  return (
    <>
    <Head>
    <title>EatFit</title>
        <Meta
          title="EatFit"
          description="Eatfit is a recipe searching application made with ReactJS, Next.js, and TailwindCSS with data from Edamam API."
          /* URL="https://movies.sanketnaik.dev/" */
          imageURL="https://firebasestorage.googleapis.com/v0/b/skribble-ae793.appspot.com/o/EatFit%2Flogo.png?alt=media"
        />
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/skribble-ae793.appspot.com/o/EatFit%2Flogo.png?alt=media" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
    </Head>
    {!isLoading && (
                <div className="mt-10 w-10/12 m-auto">
                <Formik
                           initialValues={{ ingredient: "" }}
                           onSubmit={handleSubmit}
                           validationSchema={validationSchema}
                         >
                           {({ handleSubmit, errors, touched }) => (
                             <form onSubmit={handleSubmit}>
                               <label
                                 htmlFor="hero-field"
                                 className="leading-7 text-sm text-gray-600"
                               >
                                 Enter ingredient
                               </label>
                               <Field
                                 type="text"
                                 name="ingredient"
                                 className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-secondary focus:bg-transparent border border-gray-300 focus:border-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                               />
                               {errors.ingredient && touched.ingredient ? (
                                 <p className="text-red-600 text-sm">{errors.ingredient}</p>
                               ) : null}
{/*                                <div className="flex w-full justify-center mt-8">
                                 <button
                                   className="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondaryHover rounded text-lg"
                                   type="submit"
                                 >
                                   Get Recipe
                                 </button>
                               </div> */}
                             </form>
                           )}
                         </Formik>
                         </div>
    )}

             {(!isLoading && recipe.length === 0 && currentImage !== "")? (
                                    <section className="text-gray-600 font-body ">
                                    <div className="container px-5 py-24 mx-auto flex justify-center align-center">
                                      <div className="sm:w-1/2 mb-10 px-4">
                                      <h2 className="text-2xl font-medium text-gray-900 mt-6 mb-3 text-center font-body">Type ingredients to demolish your hunger!!</h2>
                                        <div className="rounded-lg h-100 overflow-hidden">
                                          <Image src={currentImage} alt="content" className="object-cover object-center h-full w-full" placeholder="blur" />
                                        </div>
                    
                                      </div>
                                    </div>
                                  </section>
              ): null}           

              {isLoading && (
                <Loader />
              )}


                {recipe.length !==0 && ( 
                        <section className="text-gray-600 body-font">
                          <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                              <RecipeCardSummary recipe={recipe}/>
                            </div>
                          </div>
                        </section>
                  ) }
    </>
  )



 
}

export default Home;
