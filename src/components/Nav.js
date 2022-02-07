import {React ,useState} from "react";
import { Link } from "react-router-dom";
import { CogIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";
import MobileNav from "./MobileNav"

const Nav = () => {

  const [show, setShow] = useState(false);



  return (
    <nav className="bg-gray-100">
      <div className="px-8 mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <CogIcon className="w-6 h-6" />
            <Link
              className="font-bold text-gray-700 py-5 px-1 hover:text-gray-900"
              to="/"
            >
              FUEL
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              className="text-gray-700 py-5 px-3 hover:text-gray-900"
              to="/"
            >
              Projects
            </Link>
            <Link
              className="text-gray-700 py-5 px-3 hover:text-gray-900"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-gray-700 py-5 px-3 hover:text-gray-900"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={()=>setShow(!show) }>
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {show && <MobileNav show={show} setShow={setShow} />}
    </nav>
  );
};

export default Nav;
