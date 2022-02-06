import React from "react";
import { Link } from "react-router-dom";
import { BeakerIcon } from "@heroicons/react/solid";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-gray-100 shadow-2xl h-32">
      <div className="flex items-center pl-10">
        <BeakerIcon className="w-10 h-10" />
        <h2 className=" text-3xl pl-2 hover:">
          <Link to="/">Future Lab</Link>
        </h2>
      </div>
      <ul className="flex items-center text-4xl space-x-10 pr-32 text-slate-900 h-35">
        <li className="hover:text-slate-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-slate-600">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-slate-600">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
