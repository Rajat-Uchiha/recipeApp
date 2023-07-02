import { Recipecard } from "./recipecard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader.js";

export const Home = (props) => {
  const [recipes, setRecipes] = useState([]);
  const userID = window.localStorage.getItem("userID");
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchRecpies = async () => {
      try {
        const response = await axios.get(`${props.WEBSERVICE}/recipes`);
        setRecipes(response.data);
        setIsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipes = async (req, res) => {
      try {
        const response = await axios.get(
          `${props.WEBSERVICE}/recipes/savedrecipes/ids/${userID}`,
          {
            userID,
          }
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecpies();
    fetchSavedRecipes();
  }, []);

  const isSavedRecipePage = false;

  if (isLoaded) {
    return (
      <section className="text-gray-800 body-font px-10 bg-gradient-to-r from-gray-300 to-gray-700 ">
        <h1 className="font-Nunito text-7xl font-bold text-start py-8 underline underline-offset-4">
          Top Recipes
        </h1>

        <div className="container py-8 mx-auto">
          <div className="flex flex-wrap m-4">
            {recipes.map((recipe) => {
              return (
                <Recipecard
                  key={recipe._id}
                  recipe={recipe}
                  savedRecipes={savedRecipes}
                  isSavedRecipePage={isSavedRecipePage}
                  setSavedRecipes={setSavedRecipes}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }
};
