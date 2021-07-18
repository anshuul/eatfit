import { atom } from "recoil";

export const recipeState = atom({
    key: "recipe",
    default: [],
})

export const recipeFromApiState = atom({
    key: "recipeFromApi",
    default: []
})