import { Link, useRouteError } from "react-router-dom";
import PageError from "./src/Images/PageError.png";

const Error = () => {
  let error = useRouteError();
  return (
    <div className="flex flex-col items-center my-5">
      <img src={PageError} className="" />
      <p className="font-medium text-lg py-5">
        {error.status + " : " + error.statusText}
      </p>

      <p className="font-medium text-2xl">
        Unfortunately the page you are looking for has been moved or deleted
      </p>

      <button className="mt-5 py-2  text-lg px-5 button-class">
        <Link to={"/"}>Home Page</Link>
      </button>
    </div>
  );
};

export default Error;
