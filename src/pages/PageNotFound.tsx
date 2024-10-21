import Category from "../components/Category";
import oops from "../assets/404.webp";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Category />
      <div className="flex flex-row items-center justify-center mt-10 mb-10">
        <div className="flex flex-col justify-center ">
          <h1 className="text-8xl font-bold mb-4 text-olx-green">Oops!</h1>
          <h1 className="text-4xl font-bold mb-4">
            We can't seem to find that
          </h1>
          <h1 className="text-4xl font-bold mb-4">Try searching for it</h1>
          <p className="text-gray-500 text-lg mt-8">Error 404</p>
          <div className="text-lg">
            <div className="flex flex-row gap-4">
              <p>Here are some helpful links:</p>
              <Link to="/">
                <p className="text-blue-500 pt-1 text-sm">Home</p>
              </Link>
              <Link to="/help">
                <p className="text-blue-500 pt-1 text-sm ">Help</p>
              </Link>
            </div>
          </div>
        </div>

        <img src={oops} alt="page not found" className="w-25 mb-8" />
      </div>
    </>
  );
};

export default PageNotFound;
