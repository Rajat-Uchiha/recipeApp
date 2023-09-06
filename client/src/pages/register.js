import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import registerImg from "./registerImg.jpg";
import Swal from "sweetalert2";
export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setUserpassword] = useState("");
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${props.WEBSERVICE}/auth/register`, {
        username,
        password,
      });
      Swal.fire("User created successfully!");

      navigate("/login");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Already exits!",
      });
    }
  };

  return (
    <section className="flex min-h-screen w-full md:flex md:flex-row flex-col ">
      <div className=" z-30 w-full md:w-1/2  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full shadow-2xl md:mt-0 sm:max-w-md xl:p-0 bg-black/80 border-black/80 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl lg:4xl font-Crimson font-light leading-tight tracking-tight md:text-4xl text-white">
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
                  className="block mb-2 font-Crimson font-extralight text-lg text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" border font-Crimson sm:text-sm block w-full p-2.5 bg-black/20 text-white "
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
                  id="password"
                  autoComplete="on"
                  className="border font-Crimson sm:text-sm block w-full p-2.5 bg-black/20 text-white"
                  onChange={(event) => {
                    setUserpassword(event.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full font-Crimson font-light text-lg text-white border-2 hover:bg-stone-900 px-5 py-2.5 text-center "
              >
                Create an account
              </button>
              <p className="text-md font-Crimson font-thin text-gray-100">
                Already have an account?
                <Link
                  to="/login"
                  href="#"
                  className="font-Crimson font-thin hover:underline pl-1"
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
          className="w-full h-full object-cover  "
          src={registerImg}
          alt="bg"
        />
      </div>
    </section>
  );
};
