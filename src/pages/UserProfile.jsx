import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
          <div
            className="flex flex-col justify-center gap-5 p-5 border rounded-md md:flex-row"
            data-aos="fade-up"
          >
            <img
              src={user.photoURL}
              alt="user"
              className="md:w-[250px] object-cover"
            />
            <div>
              <p className="p-5 mb-4 font-bold border">Id: {user.uid}</p>
              <h2 className="font-bold my-3text-xl ">{user.displayName}</h2>
              <h3 className="my-2 font-medium">{user.email}</h3>
              <h3 className="my-2 font-medium">{user.photoURL}</h3>
              <h3 className="my-2 font-medium">
                <span className="mr-2 font-bold underline">Is Verified :</span>
                {user.emailVerified.toString()}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
