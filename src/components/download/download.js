import React, { Component } from 'react';
import classes from '../heroes/heroes.module.scss';
import LoadImg from '../../assets/images/skills/download.png';

function Download({ onChangeMainState, onChangeStateSkills, onChangeStateBase }) {
  function onLoadHero() {
    onChangeMainState();
    onChangeStateBase();
    onChangeStateSkills();
  }
  return (
    <>
      <img onClick={onLoadHero.bind()} className={classes.loading} src={LoadImg}></img>;
      <h2 className={classes.loading_name}>
        Профиль :{' '}
        <span className={classes.loading_name__active}>{localStorage.getItem('name')}</span>
      </h2>
    </>
  );
}

export default Download;
