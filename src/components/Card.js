import React from "react";

const Card = ({ author, description, cover, title, link, date }) => {
  return (
    <div className="py-25 flex items-center justify-center mt-10">
      <div className="bg-white rounded-lg shadow-2xl w-3/4">
        <img
          src={cover}
          alt={title}
          className="rounded-t-lg h-60 w-full object-cover"
        ></img>
        <div className="p-8">
          <h2 className="text-xl font-extrabold mb-5">{title}</h2>
          <p>{description}</p>
          <button className="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5">
            Get Started
          </button>
        </div>
        <footer className="bg-gray-100 rounded-b-lg text-right py-3 px-8 text-xs text-gray-500">
          Author: {author}
        </footer>
      </div>
    </div>
  );
};

export default Card;
