import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loginImage from "../assets/loginEntryPointPost.webp";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signInWithPopup } from "firebase/auth";
import {  provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate=useNavigate();
  const handleGoogleAuthentication = () => {
    try {
      const auth = getAuth();
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        if(user){
          toast.success(`Welcome ${user.displayName}`);
          navigate('/');
        }else{
          toast.error("Cannot proceed with login at the moment")
        }
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error.message)
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-xs sm:max-w-sm w-full">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faX}
            className="text-gray-500 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={loginImage}
            alt="Login"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
          />
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
          Welcome to OLX
        </h1>
        <p className="text-gray-600 text-center mb-4 sm:mb-6">
          Log in to continue to your account
        </p>
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <button className="border border-gray-300 text-gray-700 py-2 px-3 sm:px-4 rounded-lg w-full">
            Continue with Phone
          </button>

          <button
            onClick={handleGoogleAuthentication}
            className="bg-black hover:bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-lg w-full"
          >
            Continue with Google
          </button>
        </div>
        <p className="text-center mt-4">OR </p>
        <p className="text-sm sm:text-s mt-3 text-center">Login with Email</p>
        <p className="text-xs text-gray-500 mt-8 sm:mt-12 text-center">
          Your personal details are safe with us
        </p>
        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to OLX's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
