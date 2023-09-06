import { Recipecard } from "./recipecard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader.js";
import heroImg from "./heroImg.avif";

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
      <section className="text-gray-800 body-font px-4 md:px-10 bg-gradient-to-r">
        <main className=" flex-col lg:flex lg:flex-row justify-center items-center my-8 ">
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-Crimson text-2xl md:text-4xl font-thin underline underline-offset-8 mb-4 md:mb-10">
              Our Brief Story
            </h3>
            <p className="font-Crimson font-light text-md  md:text-xl lg:pr-40 md:tracking-wide leading-relaxed mb-10 ">
              In a world where culinary curiosity knows no bounds, the "
              <b>Let's Cook Tasty</b>" emerges as a culinary genius's dream.
              This digital kitchen companion boasts a vast library of
              mouthwatering recipes from every corner of the globe. With its
              intuitive interface, home chefs effortlessly browse and customize
              dishes, tailoring them to personal tastes and dietary preferences.
              But "Flavor Fusion" isn't just about recipes; it's a culinary
              adventure. Users can embark on virtual cooking journeys, exploring
              exotic ingredients and techniques guided by chefs just like you.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <img
              className="w-full bg-cover bg-center"
              src={heroImg}
              alt="heroImg"
            />
          </div>
        </main>

        <Link
          to="/register"
          className=" font-Crimson transition-all text-lg md:text-xl font-light bg-green-700 text-white px-8 md:px-10 py-2 hover:cursor-pointer hover:bg-green-800 mt-40"
        >
          Join Now
        </Link>

        <h1 className="font-Crimson text-3xl lg:text-6xl font-thin py-4 md:py-8 underline underline-offset-8 text-start mt-10">
          Our Top Recipes
        </h1>

        <div className="container lg:py-8 mx-auto ">
          <div className="flex flex-wrap lg:m-4">
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
