import classes from '../heroes.module.scss';
import React from 'react';

function AllHeroes({ photo, id }) {
  return <img key={id} className={classes.hero} src={photo} alt="row"></img>;
}

export default AllHeroes;
