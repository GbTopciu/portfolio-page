import { React, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [show, setShow] = useState(false);

  const menuRef = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav ref={menuRef}>
      <div className="px-8 mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
          
            <Link
              className="font-bold text-slate-500 py-5 px-1"
              to="/"
            >
              <p>
                <span>&lt;</span>
                <span className="text-slate-500">Hello</span>{" "}
                <span className="text-slate-900">World</span>
                <span>/&gt;</span>
              </p>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              className="font-semibold text-slate-500 py-5 px-3 hover:text-slate-900"
              to="/"
            >
              Projects
            </Link>
            <Link
              className="font-semibold text-slate-500 py-5 px-3 hover:text-slate-900"
              to="/about"
            >
              About
            </Link>
            <Link
              className="font-semibold text-slate-500 py-5 px-3 hover:text-slate-900"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button ref={menuRef} onClick={() => setShow(!show)}>
              <MenuIcon className="w-6 h-6 text-slate-500 hover:text-slate-900" />
            </button>
          </div>
        </div>
      </div>
      {show && <MobileNav show={show} setShow={setShow} />}
    </nav>
  );
};

export default Nav;
