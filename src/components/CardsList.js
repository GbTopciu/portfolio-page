import React from "react";
import { Data } from "../Data";
import Card from "./Card";

const CardsList = () => {
  return (
    <div>
      {Data.map((dta) => (
        <Card
          key={dta.id}
          cover={dta.cover}
          author={dta.author}
          description={dta.description}
          title={dta.title}
          date={dta.date}
          link={dta.link}
        />
      ))}
    </div>
  );
};

export default CardsList;
