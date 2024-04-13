import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthProvider";
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { loginUser, user } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const loginResult = await loginUser(email, password);

      if (loginResult) {
        toast.success("Login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials");
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center">
          <div className="w-full max-w-lg p-8 border rounded-xl">
            <h2 className="mb-5 text-2xl font-bold">Login Now</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full px-4 py-3 my-2 border outline-none"
                />
              </label>
              <label htmlFor="password" className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="password"
                  name="password"
                  className="w-full px-4 py-3 my-2 border outline-none"
                />
                {showPassword ? (
                  <FaRegEye
                    size={24}
                    className="absolute top-0 cursor-pointer right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaRegEyeSlash
                    size={25}
                    className="absolute top-0 cursor-pointer right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </label>
              <Link to="/sign-up">New here? Create an account</Link>
              <button className="w-full my-2 text-xl text-white btn bg-primary hover:bg-blue-800">
                Login
              </button>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
