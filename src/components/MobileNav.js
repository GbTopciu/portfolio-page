import { React } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
 
  return (
    <div>
      <Link className="text-white font-medium block py-2 px-4 text-sm hover:bg-blue-100 hover:text-black" to="/">
        Projects
      </Link>
      <Link className="text-white font-medium block py-2 px-4 text-sm hover:bg-blue-100 hover:text-black" to="/about">
        About
      </Link>
      <Link className="text-white font-medium block py-2 px-4 text-sm hover:bg-blue-100 hover:text-black" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default MobileNav;
