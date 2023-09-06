import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import useravatar from "../pages/useravatar.png";
import mainLogo from "./mainLogo.png";
import { AlignJustify, X } from "lucide-react";
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const location = useLocation();
  const pathName = location.pathname;

  // For hamburger
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className=" hidden md:flex font-light w-full px-10 flex-wrap justify-start items-center text-2xl ">
        <div className="  w-1/2 ">
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

        <div className=" w-1/2 flex justify-end items-center space-x-6">
          <div className="flex flex-col justify-center items-center ">
            {!cookies.access_token ? (
              ""
            ) : (
              <>
                <img className="w-6" src={useravatar} alt="userpng" />
                <p className="px-6 font-light text-base font-Crimson">
                  {username}
                </p>
                <button
                  onClick={logout}
                  className=" transition-all text-base text-white font-light px-3 bg-red-600 rounded-sm hover:bg-red-700 hover:border-red-700 hover:text-white font-Crimson"
                >
                  Log out
                </button>
              </>
            )}
          </div>
          <div className=" py-4 ">
            <img className="w-32 " src={mainLogo} alt="logo" />
          </div>
        </div>
      </nav>
      <nav className=" px-4 md:hidden ">
        <div className="flex justify-between items-center">
          <div className=" py-4 ">
            <img className="w-20 " src={mainLogo} alt="logo" />
          </div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? <AlignJustify size={36} /> : <X size={32} />}
          </button>
        </div>
        <div
          className={
            !isOpen
              ? " hidden transition-opacity ease-in-out duration-300 h-0 justify-start items-center w-full absolute left-0 z-40 bg-white "
              : "flex transition-all min-h-[50%] justify-start items-center w-full absolute left-0 z-40 bg-white "
          }
        >
          <ul className="mx-auto">
            <li
              className={
                !isOpen
                  ? "flex-col flex justify-evenly items-evenly space-y-8"
                  : "flex flex-col justify-evenly items-evenly space-y-8"
              }
            >
              <Link
                to="/"
                className={
                  pathName === "/"
                    ? "text-green-600 font-Crimson underline underline-offset-4 font-light text-3xl"
                    : "font-Crimson font-light text-3xl"
                }
              >
                Home
              </Link>
              {!cookies.access_token ? (
                <>
                  <Link
                    to="/register"
                    className={
                      pathName === "/register"
                        ? "text-green-600 font-Crimson underline underline-offset-4 font-light text-3xl"
                        : "font-Crimson font-light text-3xl"
                    }
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className={
                      pathName === "/login"
                        ? "text-green-600 font-Crimson underline underline-offset-4 font-light text-3xl"
                        : "font-Crimson font-light text-3xl"
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
                        ? "text-green-600 font-Crimson underline underline-offset-4 font-light text-3xl"
                        : "font-Crimson font-light text-3xl"
                    }
                  >
                    Saved Recipes
                  </Link>
                  <Link
                    to="/addrecipe"
                    className={
                      pathName === "/addrecipe"
                        ? "text-green-600 font-Crimson underline underline-offset-4 font-light text-3xl"
                        : "font-Crimson font-light text-3xl"
                    }
                  >
                    Add Recipe
                  </Link>
                </>
              )}

              <div className="flex flex-col justify-center items-center ">
                {!cookies.access_token ? (
                  ""
                ) : (
                  <>
                    <img className="w-6" src={useravatar} alt="userpng" />
                    <p className="px-6 font-light text-base font-Crimson">
                      {username}
                    </p>
                    <button
                      onClick={logout}
                      className=" transition-all text-base text-white font-light px-3 bg-red-600 rounded-sm hover:bg-red-700 hover:border-red-700 hover:text-white font-Crimson"
                    >
                      Log out
                    </button>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
