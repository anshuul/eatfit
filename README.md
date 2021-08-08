![React Pokedex](docs/images/github-banner.png)

# EatFit

[![Website](https://img.shields.io/badge/website-up-green?style=for-the-badge&logo=react&url?url=https%3A%2F%2Featfit.theoctagon.in)](https://eatfit.theoctagon.in/) &nbsp;&nbsp; [![Netlify Status](https://api.netlify.com/api/v1/badges/ede00c86-b1c3-4c5b-b6cd-495db637b6d6/deploy-status)](https://app.netlify.com/sites/distracted-wozniak-d6cf13/deploys)

## Contents

- [Technologies Used](#technologies-used)
- [Introduction](#introduction)
- [Home Page](#home-page)
  - [Home Page - Recipe Loaded](#home-page-recipe)
- [Recipe Card Page](#recipe-card-page)
- [Dark Mode](#dark-mode)

## Technologies Used <a name="technologies-used"></a>

| Name        | Description |
| ----------- | ---------------- |
| Next.js     | An open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications. |
| TailwindCSS | A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. |
| Edamam API    | An API to provide recipe information from ingredients and much, much more.|

## Introduction <a name="introduction"></a>

This is a simple Recipe application created using Next.js which is a React Framework for production. Next.js has various features that make it the ideal choice for a website with great SEO (Search Engine Optimization) and performance. Static Site Generation is a feature that Next.js comes with and it is great for generating webpages which have static content.

## Home Page <a name="home-page"></a>

![Home Page](docs/images/home-page-light.png)
The HomePage displays an input field for the user to provide any ingredient they like to get the respective recipe. The website uses TailwindCSS for styling and each pokemon and its details are displayed in a card. Additionally, when the data is being loaded, skeleton cards are displayed as placeholders. This helps to improve the first-paint performance of the application.

### Home Page - Recipe Loaded <a name="home-page-recipe"></a>
![Home Page](docs/images/home-light-recipe.png)
When the user provides an ingredient, the website looks up for recipe for the respective ingredient by using the Edamam API and then displays 20 recipes for the ingredient.The website uses TailwindCSS for styling and each recipe and its details are displayed in a card. 


## Recipe Card Page <a name="recipe-card-page"></a>

![Generation List](docs/images/recipe-card-page.png)
This page displays a card which contains the image of the dish, the name of the recipe, total calories of the recipe and the ingredients required for preparing the respective recipe.


## Dark Mode <a name="dark-mode"></a>

TailwindCSS 2.0 includes features for implementing dark mode for applications and this has been used to make the entire application dark mode compatible. When the user taps on the dark mode toggle, all elements of the website transition from a light theme to a dark theme with a smooth transition animation. The screenshots of all pages in dark mode are provided below.

![Dark Home Page](docs/images/home-page-dark.png)
![Dark Home Page Recipe Loaded](docs/images/home-dark-recipe.png)
![Dark Recipe Card Page](docs/images/recipe-card-page-dark.png)
