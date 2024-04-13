import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import SocialLogin from "../components/SocialLogin";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { signUpUser, user } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (password.length < 6) {
      toast("Password Must Be 6 Character");
      return;
    }

    if (!regex.test(password)) {
      toast.error(
        "password must container an uppercase letter and a lowercase letter"
      );
      return;
    }

    try {
      const signUpResult = await signUpUser(email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      if (signUpResult) {
        toast.success("User Sign Up Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);

      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("email already in use please use a different email");
      } else {
        toast.error("Something is wrong");
      }
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center">
          <div className="w-full max-w-lg p-8 border rounded-xl">
            <h2 className="mb-5 text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="w-full px-4 py-3 my-2 border outline-none"
                  required
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full px-4 py-3 my-2 border outline-none"
                  required
                />
              </label>
              <label htmlFor="photo">
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="w-full px-4 py-3 my-2 border outline-none"
                  required
                />
              </label>
              <label htmlFor="password" className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
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
              <button
                type="submit"
                className="w-full my-2 text-xl text-white btn bg-primary hover:bg-blue-800"
              >
                Sign Up
              </button>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
