import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        className="w-[48%] text-lg btn btn-success text-white"
        onClick={() => loginWithGoogle()}
      >
        Login With Google
      </button>
      <button
        className="w-[48%] text-lg btn btn-warning"
        onClick={() => loginWithGithub()}
      >
        Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
