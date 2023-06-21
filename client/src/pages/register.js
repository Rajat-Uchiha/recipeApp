import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import registerPoster from "./registerPoster.png";
import Swal from "sweetalert2";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setUserpassword] = useState("");
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      Swal.fire("User created successfully!");

      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex min-h-screen w-full md:flex md:flex-row flex-col  ">
      <div className=" w-full md:w-1/2  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg  dark:border shadow-2xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-500 dark:border-gray-500">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-Nunito font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Register
            </h1>
            <form
              onSubmit={register}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 font-Nunito font-bold text-lg text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border font-Nunito border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:text-white "
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 font-Nunito font-bold text-lg text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 font-Nunito border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:text-white "
                  onChange={(event) => {
                    setUserpassword(event.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full font-Nunito font-bold text-lg text-white border-2 hover:bg-gray-700 border-gray-200 rounded-lg px-5 py-2.5 text-center "
              >
                Create an account
              </button>
              <p className="text-md font-Nunito font-bold text-gray-100">
                Already have an account?
                <Link
                  to="/login"
                  href="#"
                  className="font-Nunito font-semibold hover:underline pl-1"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2">
        <img
          className="w-full h-full object-cover "
          src={registerPoster}
          alt="bg"
        />
      </div>
    </section>
  );
};
