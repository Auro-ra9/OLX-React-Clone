import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import green_logo from "../assets/OLX_green_logo.svg";
import {
  faCaretDown,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuthCheck } from "../context/context";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { isUserPresent } = useUserAuthCheck();
  const navigate=useNavigate();
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
       toast.success("See you soon");
       navigate('/');
      })
      .catch((error) => {
       toast.error(error.message)
      });
  };
  return (
    <nav className="bg-gray-200 shadow-md py-3">
      <div className="container mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 px-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={green_logo} alt="OLX Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Location Dropdown */}
        <div className="relative flex items-center space-x-2 w-full sm:w-auto sm:flex-grow-0">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 text-gray-500"
          />
          <select className="appearance-none w-full sm:w-auto border-2 bg-gray-200 border-olx-green text-gray-700 py-2 pl-10 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-cyan-200">
            <option>Location</option>
            <option>Kolkata</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Pune</option>
          </select>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="absolute right-3 text-gray-500"
          />
        </div>

        {/* Central Search Bar */}
        <div className="flex items-center w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Find Mobile, Cars, and more..."
            className="w-full py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button className="bg-olx-green text-white px-6 py-2 rounded-r-lg">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Language Dropdown */}
        <div className="relative flex items-center w-full sm:w-auto sm:flex-grow-0">
          <select className="font-bold appearance-none bg-gray-200 border text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="absolute right-3 text-gray-500"
          />
        </div>

        {/* Login Link */}
        {isUserPresent ? (
          <button className="" onClick={handleLogout}>
            logout
          </button>
        ) : (
          <Link
            to="/login"
            className="font-bold text-gray-700 underline hover:no-underline w-full sm:w-auto text-center sm:flex-grow-0"
          >
            Login
          </Link>
        )}

        {/* Sell Button */}
        <Link
          to="/sell"
          className="border-4 border-t-cyan-400 border-r-blue-600 border-b-blue-600 border-l-yellow-300 text-black py-1 px-6 rounded-2xl hover:scale-110 w-full sm:w-auto text-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Sell
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
