import { React } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
 
  return (
    <div className="md:hidden">
      <Link className="text-slate-500 font-medium block py-2 px-4 text-sm hover:bg-slate-200 hover:text-slate-900" to="/">
        Projects
      </Link>
      <Link className="text-slate-500 font-medium block py-2 px-4 text-sm hover:bg-slate-200 hover:text-slate-900" to="/about">
        About
      </Link>
      <Link className="text-slate-500 font-medium block py-2 px-4 text-sm hover:bg-slate-200 hover:text-slate-900" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default MobileNav;
