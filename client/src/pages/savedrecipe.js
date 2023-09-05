import { useCookies } from "react-cookie";
import { Recipecard } from "./recipecard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Login } from "./login";
import Loader from "../components/Loader";

export const Savedrecipe = (props) => {
  const [cookie] = useCookies(["access_token"]);

  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = window.localStorage.getItem("userID");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchSavedRecipes = async (req, res) => {
      try {
        const response = await axios.get(
          `${props.WEBSERVICE}/recipes/savedrecipes/${userID}`
        );
        setSavedRecipes(response.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSavedRecipes();
  }, []);

  const isSavedRecipePage = true;
  const navigate = useNavigate();

  const saveRecipeBtn = () => {
    navigate("/");
  };

  if (!cookie.access_token) {
    return <Login />;
  } else {
    if (isLoaded) {
      return (
        <section className="text-gray-800 body-font px-2 lg:px-10 min-h-screen">
          <h1 className="font-Crimson text-3xl lg:text-6xl font-light py-4 lg:py-8 underline underline-offset-8 text-start mt-4 lg:mt-10">
            Your saved recipes
          </h1>
          <div className="container py-8 mx-auto">
            <div className="flex flex-wrap m-4">
              {savedRecipes.length === 0 ? (
                <div className="flex flex-col justify-center mx-auto items-center space-y-4">
                  <h1 className="font-Crimson mx-auto font-base text-xl text-center">
                    You haven't saved any recipe yet.
                  </h1>
                  <button
                    onClick={saveRecipeBtn}
                    className="hover:bg-green-900 hover:border-green-900 bg-green-800  text-white font-Crimson text-lg font-base px-6 py-2"
                  >
                    Save Recipes
                  </button>
                </div>
              ) : (
                savedRecipes.map((recipe) => {
                  return (
                    <Recipecard
                      key={recipe._id}
                      recipe={recipe}
                      savedRecipes={savedRecipes}
                      isSavedRecipePage={isSavedRecipePage}
                      setSavedRecipes={setSavedRecipes}
                    />
                  );
                })
              )}
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
  }
};
// DO CONDITIONAL RENDERING AT THE ABOVE DIV IN ORDER TO REMOVE THE SAVE BUTTON OF RECIPES CARDS SHOWING IN SAVED RECIPES
