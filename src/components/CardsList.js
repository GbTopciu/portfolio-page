import React from 'react';
import { Data } from '../Data';
import Card from './Card';

const CardsList = () => {
  return <div>
      {Data.map(dta => <Card key={dta.id} cover={dta.cover} name={dta.name} description={dta.description} title={dta.title} link={dta.link} />)}
  </div>;
};

export default CardsList;
