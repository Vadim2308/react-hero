import classes from '../../styles/heroes.module.scss';
import React from 'react';

function Hero({ photo, id }) {
  return <img id={id} key={id} className={classes.hero} src={photo} alt="row"></img>;
}

export default Hero;
