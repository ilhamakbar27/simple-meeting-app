import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setLogin({ ...login, [field]: e.target.value });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:3000/login", login);
      localStorage.setItem("access_token", data.access_token);
      navigate("/home");
      Swal.fire({
        title: "Login Success",
        text: "You have successfully logged in",
        icon: "success",
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="w-full h-screen flex flex-col items-center shadow-lg justify-center px-4">
      <div className="max-w-sm w-full  text-gray-600">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600">meeting</h1>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-2xl">
              Sign up here now
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmitLogin} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              onChange={handleChange("email")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              onChange={handleChange("password")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            {isLoading ? <Loading /> : "Login"}
          </button>
        </form>
        <p className="text-center pt-5">
          Already sign up ? &nbsp;
          <Link to={"/"} className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-700">
            login here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
