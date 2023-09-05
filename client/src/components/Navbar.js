import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import useravatar from "../pages/useravatar.png";
import Flavor_Fusion_Logo from "./Flavor_Fusion_Logo.png";
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const location = useLocation();
  const pathName = location.pathname;

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("username");
    navigate("/login");
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(window.localStorage.getItem("username"));
  });

  return (
    <>
      <nav className="font-light py-2 md:bg-white flex-col lg:flex lg:flex-row w-full px-2 md:px-10 lg:justify-start items-center sm:text-lg lg:text-2xl flex-wrap ">
        <div className="py-2 w-full text-center lg:flex lg:justify-start lg:w-1/2 ">
          <Link
            to="/"
            className={
              pathName === "/"
                ? "mr-5 text-green-600 font-Crimson underline underline-offset-4"
                : "mr-5 hover:text-green-600 font-Crimson"
            }
          >
            Home
          </Link>

          {/* USER IS LOGGED IN */}
          {!cookies.access_token ? (
            <>
              <Link
                to="/register"
                className={
                  pathName === "/register"
                    ? "mr-5 text-green-600 font-Crimson underline underline-offset-4"
                    : "mr-5 hover:text-green-600 font-Crimson"
                }
              >
                Register
              </Link>
              <Link
                to="/login"
                className={
                  pathName === "/login"
                    ? "mr-5 text-green-600 font-Crimson underline underline-offset-4"
                    : "mr-5 hover:text-green-600 font-Crimson"
                }
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/savedrecipe"
                className={
                  pathName === "/savedrecipe"
                    ? "mr-5 text-green-600 font-Crimson underline underline-offset-4"
                    : "mr-5 hover:text-green-600 font-Crimson"
                }
              >
                Saved Recipes
              </Link>
              <Link
                to="/addrecipe"
                className={
                  pathName === "/addrecipe"
                    ? "mr-5 text-green-600 font-Crimson underline underline-offset-4"
                    : "mr-5 hover:text-green-600 font-Crimson"
                }
              >
                Add Recipe
              </Link>
            </>
          )}
        </div>
        {/* IF USER NOT LOGGED IN  */}
        <div className="w-full lg:w-1/2 flex justify-between lg:justify-end items-center lg:space-x-6 ">
          <div className="flex flex-col justify-center items-center ">
            {!cookies.access_token ? (
              ""
            ) : (
              <>
                <img className=" w-4 md:w-6" src={useravatar} alt="userpng" />
                <p className=" px-0 lg:px-6 font-light text-base font-Crimson">
                  {username}
                </p>
                <button
                  onClick={logout}
                  className=" transition-all text-sm lg:text-base text-white font-light px-3 bg-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white font-Crimson"
                >
                  Log out
                </button>
              </>
            )}
          </div>
          <div className=" py-4 ">
            <img
              className="w-16 md:w-32 "
              src={Flavor_Fusion_Logo}
              alt="logo"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
