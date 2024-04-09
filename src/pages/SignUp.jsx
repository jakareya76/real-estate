import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <div className="w-full max-w-lg p-8 border rounded-xl">
          <h2 className="mb-5 text-2xl font-bold">Sign Up</h2>
          <form>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="name"
                className="w-full px-4 py-3 my-2 border outline-none"
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="email"
                className="w-full px-4 py-3 my-2 border outline-none"
                required
              />
            </label>
            <label htmlFor="photo">
              <input
                type="text"
                placeholder="photo url"
                className="w-full px-4 py-3 my-2 border outline-none"
                required
              />
            </label>
            <label htmlFor="password" className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                className="w-full px-4 py-3 my-2 border outline-none"
                required
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
            <Link to="/login">Already have an account? please login</Link>
            <button className="w-full my-2 text-xl text-white btn bg-primary hover:bg-blue-800">
              Sign Up
            </button>
          </form>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button className="w-[48%] text-lg btn btn-success text-white">
              Login With Google
            </button>
            <button className="w-[48%] text-lg btn btn-warning">
              Login With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
