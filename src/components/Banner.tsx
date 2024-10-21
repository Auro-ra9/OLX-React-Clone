import olxAppBanner from "../assets/phone-app.webp";
import appDownload from "../assets/app-download.png";

const Banner = () => {
  return (
    <div className="bg-olx-gray my-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-evenly flex-wrap items-center gap-8">
        {/* App banner image */}
        <img
          src={olxAppBanner}
          alt="OLX app banner"
          className="w-full sm:w-1/3"
        />

        {/* App description */}
        <div className="text-olx-green text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            TRY THE OLX APP
          </h1>
          <h4 className="text-lg sm:text-xl">
            Buy, sell, and find just about anything using <br /> the app on your
            mobile.
          </h4>
        </div>

        {/* Divider */}
        <div className="hidden sm:block border-r-2 h-32 border-gray-500"></div>

        {/* App download section */}
        <div className="text-center sm:text-left">
          <h6 className="font-bold">GET YOUR APP TODAY</h6>
          <img src={appDownload} alt="Download the app" className="w-40 sm:w-52 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
