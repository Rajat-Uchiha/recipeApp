import { Recipecard } from "./recipecard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader.js";
import Start from "./Start.jpg";

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
      <section className="text-gray-800 body-font px-2 lg:px-10 bg-gradient-to-r">
        <main className="flex-col lg:flex justify-center items-center my-8 ">
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-Crimson text-xl font-light lg:text-3xl  underline underline-offset-8 mb-4 lg:mb-10">
              Our brief Story
            </h3>
            <p className="font-Crimson font-light font text-sm lg:text-2xl  tracking-wide leading-relaxed mb-10 ">
              In a world where culinary curiosity knows no bounds, the "Flavor
              Fusion" emerges as a culinary genius's dream. This digital kitchen
              companion boasts a vast library of mouthwatering recipes from
              every corner of the globe. With its intuitive interface, home
              chefs effortlessly browse and customize dishes, tailoring them to
              personal tastes and dietary preferences. But "Flavor Fusion" isn't
              just about recipes; it's a culinary adventure. Users can embark on
              virtual cooking journeys, exploring exotic ingredients and
              techniques guided by chefs just like you.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <img
              className="w-full bg-cover bg-center"
              src={Start}
              alt="hero-Img"
            />
          </div>
        </main>

        <Link
          to="/register"
          className=" font-Crimson transition-all text-lg lg:text-xl font-light bg-green-700 text-white px-6 py-2 lg:px-10 lg:py-2 hover:cursor-pointer hover:bg-green-800 mt-40"
        >
          Join Now
        </Link>

        <h1 className="font-Crimson text-3xl lg:text-6xl font-light py-4 lg:py-8 underline underline-offset-8 text-start mt-4 lg:mt-10">
          Our Top Recipes
        </h1>

        <div className="container lg:py-8 mx-auto">
          <div className="flex flex-wrap m-1 lg:m-4">
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
