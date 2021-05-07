import React from 'react';
import Hero from './Hero';

const AllHeroes = (props) => {
  return <Hero photo={props.photo} id={props.id} />;
};

export default AllHeroes;
