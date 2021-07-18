import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Meta from "../components/MetaTags/meta";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <Meta
          title="EatFit"
          description="Eatfit is a recipe searching application made with ReactJS, Next.js, and TailwindCSS with data from Edamam API."
          /* URL="https://movies.sanketnaik.dev/" */
          imageURL="https://firebasestorage.googleapis.com/v0/b/skribble-ae793.appspot.com/o/EatFit%2Flogo.png?alt=media"
        />
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/skribble-ae793.appspot.com/o/EatFit%2Flogo.png?alt=media" />
      </Head>
      <section className="text-gray-600 body-font h-screen">
        <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto flex flex-row justify-center">
            <Image
              className="mx-auto"
              alt="hero"
              src="/assets/404.png"
              height={512}
              width={512}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-heading sm:text-4xl text-3xl mb-2 font-extrabold text-gray-900 dark:text-gray-200">
              Page Not Found
            </h1>
            <p className="mb-4 leading-relaxed dark:text-gray-300">
              The page you were looking for was not found. Please go back to the
              home page.
            </p>
            <div className="flex">
              <Link href="/">
                <button className="inline-flex text-black text-left bg-reactflix-start border-0 py-2 px-6 focus:outline-none bg-opacity-100 hover:bg-opacity-90 rounded text-lg font-bold customButton">
                  Back to Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;