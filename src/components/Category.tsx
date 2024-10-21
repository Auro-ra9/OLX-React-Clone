import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = () => {
  return (
    <div className="my-2 border-b border-t shadow-inner py-2">
      <ul className="capitalize flex flex-wrap items-center gap-4 container mx-auto text-sm sm:text-base">
        <li className="uppercase font-semibold cursor-pointer flex items-center w-full sm:w-auto sm:pr-2">
          ALL CATEGORY <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </li>
        <li className="cursor-pointer w-1/2 sm:w-auto">cars</li>
        <li className="cursor-pointer w-1/2 sm:w-auto">motorcycles</li>
        <li className="cursor-pointer w-1/2 sm:w-auto">mobile phones</li>
        <li className="cursor-pointer hidden sm:inline">For Sale: Houses & Apartments</li>
        <li className="cursor-pointer hidden sm:inline">Scooter</li>
        <li className="cursor-pointer hidden sm:inline">Commercial and other vehicles</li>
        <li className="cursor-pointer hidden sm:inline">For Rent: Houses & Apartments</li>
      </ul>
    </div>
  );
};

export default Category;
