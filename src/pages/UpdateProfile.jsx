import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { updateEmail, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
    setPhoto(user.photoURL);
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      await updateEmail(auth.currentUser, email);

      toast.success("Update User Successfully");
    } catch (error) {
      if (
        error.message ===
        "Firebase: Please verify the new email before changing email. (auth/operation-not-allowed)."
      ) {
        toast.success("Please verify the new email before changing email.");
      } else {
        toast.success("Something is wrong");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-[calc(100vh-100px)]">
        <form onSubmit={handleUpdateProfile} className="w-1/2">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full my-3 input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full my-3 input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="PhotoUrl">
            <input
              type="text"
              name="PhotoUrl"
              placeholder="Photo URL"
              className="w-full my-3 input input-bordered"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </label>
          <button className="w-full text-xl btn btn-primary">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
