import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import useravatar from "../pages/useravatar.png";
import logo from "../pages/logo.png";
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

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
      <header className="text-gray-100 body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <nav className="md:mr-auto font-bold md:ml-4 md:py-1 md:pl-4  md:border-gray-800	flex flex-wrap items-center text-lg justify-center">
            <img className="w-12 mx-2" src={logo} alt="logo" />
            <Link to="/" className="mr-5 hover:text-green-600 font-Nunito">
              Home
            </Link>

            {/* USER IS LOGGED IN */}
            {!cookies.access_token ? (
              <>
                <Link
                  to="/register"
                  className="mr-5 hover:text-green-600  font-Nunito"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="mr-5 hover:text-green-600  font-Nunito"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/savedrecipe"
                  className="mr-5 hover:text-green-600  font-Nunito"
                >
                  Saved Recipes
                </Link>
                <Link
                  to="/addrecipe"
                  className="mr-5 hover:text-green-600  font-Nunito"
                >
                  Add Recipe
                </Link>
              </>
            )}

            {/* IF USER NOT LOGGED IN  */}
          </nav>
          <div className="flex flex-col justify-center items-center ">
            {!cookies.access_token ? (
              ""
            ) : (
              <>
                <img className="w-6" src={useravatar} alt="userpng" />
                <p className=" px-6 font-bold font-Nunito ">{username}</p>
                <button
                  onClick={logout}
                  className="border-2 transition-all text-gray-100 px-3 border-red-600 bg-red-600 rounded-sm hover:bg-red-800 hover:border-red-800 hover:text-white font-Nunito"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
