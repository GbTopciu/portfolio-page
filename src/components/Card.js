import React from "react";

const Card = ({name, description, cover, title, link}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className ="bg-white lg:flex lg:shadow-lg lg:rounded-lg">
        <div className="p-12 text-center">
      <img src={cover} alt={title}/>
      <h2 className="text-2xl text-gray-800 font-bold md:text-3xl">{name}</h2>
      <p className="mt-4 text-gray-600">{description}</p>
      <a href={link} className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded hover:bg-gray-800 hover:shadow-lg">Start Now</a>
      </div>
    </div>
    </div>
  );
};

export default Card;
