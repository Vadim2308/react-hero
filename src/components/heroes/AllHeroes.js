import React from 'react';
import Hero from './Hero';
import Skills from '../skills/Skills';

const AllHeroes = (props) => {
  return <Hero photo={props.photo} id={props.id} />;
};

export default AllHeroes;
