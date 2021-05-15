import React, { Component } from 'react';
import classes from '../heroes/heroes.module.scss';
import LoadImg from '../../assets/images/skills/power.png';

function Download({ onChangeMainState }) {
  function onLoadHero() {
    onChangeMainState(localStorage.getItem('id'));
  }
  return (
    <>
      <img onClick={() => onLoadHero()} className={classes.loading} src={LoadImg}></img>
    </>
  );
}

export default Download;
