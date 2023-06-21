import { Recipecard } from "./recipecard";
import { useEffect, useState } from "react";
import axios from "axios";
export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const userID = window.localStorage.getItem("userID");
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const fetchRecpies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipes = async (req, res) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedrecipes/ids/${userID}`,
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
};
