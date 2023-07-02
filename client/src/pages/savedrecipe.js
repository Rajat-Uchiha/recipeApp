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
        <section className="text-gray-800 body-font px-10 min-h-screen">
          <h1 className="font-Nunito text-7xl font-bold text-start py-8 underline underline-offset-4">
            Your Saved Recipes
          </h1>

          <div className="container py-8 mx-auto">
            <div className="flex flex-wrap -m-4">
              {savedRecipes.length === 0 ? (
                <div className="flex flex-col justify-center mx-auto items-center space-y-4">
                  <h1 className="font-Nunito mx-auto font-bold text-xl text-center">
                    You haven't saved any recipe yet.
                  </h1>
                  <button
                    onClick={saveRecipeBtn}
                    className="border-2 border-green-800 hover:bg-green-900 hover:border-green-900 bg-green-800 rounded-lg text-white font-Nunito text-base font-bold px-2 py-1"
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
