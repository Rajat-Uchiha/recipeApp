import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
// import loginPoster from "./loginPoster.png";
import loginImg from "./loginImg.jpg";
import Swal from "sweetalert2";
export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setUserpassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${props.WEBSERVICE}/auth/login`, {
        username,
        password,
      });

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      window.localStorage.setItem("username", response.data.username);
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "username or password is incorrect or the user doesn't exits!",
      });

      console.error(err);
    }
  };

  return (
    <section className="h-full w-full md:flex md:flex-row flex flex-col ">
      <div className=" z-30 w-full md:w-1/2  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white   dark:border shadow-2xl md:mt-0 sm:max-w-md xl:p-0 bg-black/80 border-black/80 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-Crimson font-light leading-tight tracking-tightmd:text-4xl text-white">
              Login
            </h1>
            <form
              onSubmit={login}
              className="space-y-4 md:space-y-6 z-60 "
              action="#"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 font-Crimson font-extralight text-lg text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border font-Crimson  sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-black/20  border-gray-600 text-white "
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 font-Crimson  font-extralight text-lg text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="on"
                  id="password"
                  className="bg-gray-50 border font-Crimson  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-black/20 border-gray-600 text-white"
                  onChange={(event) => {
                    setUserpassword(event.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full font-Crimson font-light text-lg text-white border-2 hover:bg-stone-900 border-gray-200  px-5 py-2.5 text-center "
              >
                Login
              </button>
              <p className="text-md font-Crimson font-thin text-gray-100">
                Don't have an account?
                <Link
                  to="/register"
                  href="#"
                  className="font-Crimson font-thin hover:underline pl-1"
                >
                  Join here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2">
        <img className="w-full h-full object-cover " src={loginImg} alt="bg" />
      </div>
    </section>
  );
};
