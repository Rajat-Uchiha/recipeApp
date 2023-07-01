import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export const Recipecard = (props) => {
  const userID = window.localStorage.getItem("userID");
  const [cookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const saveRecipe = async (recipeId) => {
    try {
      const response = await axios.put(
        "https://letscooktasty.onrender.com/recipes",
        {
          recipeId,
          userID,
        },
        { headers: { authorization: cookie.access_token } }
      );
      props.setSavedRecipes(response.data.savedRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  const isRecipeSaved = (id) => props.savedRecipes.includes(id);

  const btnClass1 =
    "border-2 border-red-800 bg-red-800 opacity-50 transition-all text-gray-100 text-sm text-end font-semibold py-0 px-2 rounded-md";
  const btnClass2 =
    "border-2 border-green-800 bg-green-800 transition-all text-gray-100 text-sm text-end font-semibold py-0 px-2 rounded-md";

  return (
    <div className=" xl:w-1/4 md:w-1/2 p-4 font-Nunito font-bold">
      <div className="bg-gray-200 p-6 rounded-lg shadow-2xl">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={props.recipe.imageUrl}
          alt="content"
        />
        <h2 className="text-2xl text-gray-800 font-bold title-font mb-2 flex justify-between">
          {props.recipe.name.charAt(0).toUpperCase() +
            props.recipe.name.slice(1)}

          {props.isSavedRecipePage ? (
            ""
          ) : (
            <button
              onClick={() => {
                if (!cookie.access_token) {
                  navigate("/login");
                } else {
                  saveRecipe(props.recipe._id);
                }
              }}
              className={
                isRecipeSaved(props.recipe._id) ? btnClass1 : btnClass2
              }
              disabled={isRecipeSaved(props.recipe._id)}
            >
              {isRecipeSaved(props.recipe._id) ? "Saved" : "Save"}
            </button>
          )}
        </h2>
        <h3 className=" text-green-700 text-base font-bold title-font mb-2 ">
          {props.recipe.cookingTime} minutes to prepare.
        </h3>
        <h6 className="font-Nunito text-lg font-extrabold underline underline-offset-2 my-1 ">
          Ingredients Needed:
        </h6>
        {/* <br /> */}
        <p className="leading-relaxed text-base mb-2">
          {props.recipe.ingredients.charAt(0).toUpperCase() +
            props.recipe.ingredients.slice(1)}
        </p>
        <h6 className="font-Nunito text-lg font-extrabold underline underline-offset-2 my-1 ">
          Intructions to make the cooking easy:
        </h6>
        <p className="leading-relaxed text-base">
          {props.recipe.instructions.charAt(0).toUpperCase() +
            props.recipe.instructions.slice(1)}
        </p>
      </div>
    </div>
  );
};
