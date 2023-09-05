import { useState } from "react";
import startSharing from "./startSharing.png";
import { useCookies } from "react-cookie";
import { Login } from "./login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const Addrecipe = (props) => {
  const [cookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const userID = window.localStorage.getItem("userID");

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleAddRecipe = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${props.WEBSERVICE}/recipes`, recipe, {
        headers: { authorization: cookie.access_token },
      });
      Swal.fire("Cooking++ !", "Recipe Saved!", "success");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  if (!cookie.access_token) {
    return <Login />;
  } else {
    return (
      <>
        <h2 className="font-Crimson text-3xl lg:text-5xl font-light py-4 lg:py-4 underline underline-offset-8 text-center ">
          Add a Recipe
        </h2>
        <div className=" w-full flex flex-col md:flex md:flex-row md:w-full min-h-screen">
          <form
            onSubmit={handleAddRecipe}
            className=" w-full md:w-1/2 flex flex-col py-2 px-10 "
          >
            <label
              className="text-xl text-gray-800 font-base font-Crimson py-2"
              htmlFor="name"
            >
              Name your Recipe
            </label>
            <input
              className="border-2 border-gray-600 rounded-lg px-2 py-2 font-Crimson text-gray-900 font-base text-lg"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />

            <label
              className="text-xl text-gray-800 font-base font-Crimson py-2"
              htmlFor="name"
            >
              Ingredients (salt, butter, ...)
            </label>
            <input
              className="border-2 border-gray-600 rounded-lg px-2 py-2 font-Crimson text-gray-900 font-base text-lg"
              type="text"
              id="ingredients"
              name="ingredients"
              onChange={handleChange}
            />
            <label
              className="text-xl text-gray-800 font-base font-Crimson py-2"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="border-2 border-gray-600 rounded-lg px-2 py-2 font-Crimson text-gray-900 font-base text-lg"
              name="instructions"
              id="instructions"
              cols="30"
              rows="5"
              onChange={handleChange}
            ></textarea>
            <label
              className="text-xl text-gray-800 font-base font-Crimson py-2"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              className="border-2 border-gray-600 rounded-lg px-2 py-2 font-Crimson text-gray-900 font-base text-lg"
              type="text"
              id="imageUrl"
              name="imageUrl"
              onChange={handleChange}
            />
            <label
              className="text-xl text-gray-800 font-base font-Crimson py-2"
              htmlFor="cookingTime"
            >
              Cooking Time (Minutes)
            </label>
            <input
              className="border-2 border-gray-600 rounded-lg px-2 py-2 font-Crimson text-gray-900 font-base text-lg"
              type="number"
              name="cookingTime"
              id="cookingTime"
              onChange={handleChange}
            />
            <button
              onClick={handleAddRecipe}
              className="my-4 py-2 border-2 text-lg hover:bg-red-700 transition-all border-red-600 rounded-lg bg-rose-600 font-base font-Crimson text-gray-100"
            >
              Add Now
            </button>
          </form>
          <div className=" w-full md:w-1/2 ">
            <img src={startSharing} alt="sharingImage" />
          </div>
        </div>
      </>
    );
  }
};
