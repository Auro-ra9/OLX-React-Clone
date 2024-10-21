import olx from "../assets/olx.svg";
import careWale from "../assets/carwale.svg";
import carTradeTech from "../assets/cartrade_tech.svg";
import carTrade from "../assets/cartrade.svg";
import bikeWale from "../assets/bikewale.svg";
import mobilityOutlook from "../assets/mobility.svg";
const Footer = () => {
  return (
    <>
      <div className=" bg-olx-gray  py-8 shadow-inner">
        <div className="container mx-auto flex justify-around flex-wrap">
        <ul className="capitalize">
          <li className="uppercase font-semibold mb-4">Popular locations</li>
          <li>Kolkata</li>
          <li>Mumbai</li>
          <li>Chennai</li>
          <li>Pune</li>
        </ul>
        <ul className="capitalize">
          <li className="uppercase font-semibold mb-4">Trending locations</li>
          <li>Bhubaneshwar</li>
          <li>Hyderbad</li>
          <li>Chandigath</li>
          <li>Nashik</li>
        </ul>
        <ul className="capitalize">
          <li className="uppercase font-semibold mb-4">About Us</li>
          <li>Tech@OLX</li>
        </ul>
        <ul className="capitalize">
          <li className="uppercase font-semibold mb-4">OLX</li>
          <li>Blog</li>
          <li>Help</li>
          <li>Sitemap</li>
          <li>Legal & Privacy information</li>
          <li>Vulnerability Disclosure Program</li>
        </ul>
        <ul className="capitalize">
          <li className="uppercase font-semibold mb-4">Follow us</li>
          <li className="text-xl flex gap-4">
            <i className="fa-brands fa-facebook-f cursor-pointer text-olx-green"></i>
            <i className="fa-brands fa-instagram cursor-pointer text-olx-green" ></i>
            <i className="fa-brands fa-twitter cursor-pointer text-olx-green"></i>
            <i className="fa-brands fa-youtube cursor-pointer text-olx-green"></i>
          </li>
        </ul>
        </div>
      </div>
      <div className=" flex flex-col bg-olx-green text-white  py-8 gap-4">
        <div className="container mx-auto flex items-center justify-around">
          <div className="cursor-pointer">
            <img src={carTradeTech} className="w-40" />
          </div>
          <div className="border-r-2 h-28"></div>
          <div className="cursor-pointer">
            <img src={olx} className="w-10" />
          </div>
          <div className="cursor-pointer">
            <img src={careWale} className="w-24" />
          </div>
          <div className="cursor-pointer">
            <img src={bikeWale} className="w-24" />
          </div>
          <div className="cursor-pointer">
            <img src={carTrade} className="w-24" />
          </div>
          <div className="cursor-pointer">
            <img src={mobilityOutlook} className="w-24" />
          </div>
        </div>
        <div className="flex justify-around">
          <p className="cursor-pointer">Help. SiteMap</p>
          <p>All rights reserved &copy; 2006-2024 OLX</p>
        </div>
      </div>
    </>
  );
};

export default Footer;