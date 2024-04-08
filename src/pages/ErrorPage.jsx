import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h2 className="text-4xl font-bold">404 Page Not Found</h2>
      <Link to="/" className="px-8 my-5 text-xl btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
