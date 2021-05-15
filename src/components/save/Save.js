import React, { Component } from 'react';
import classes from '../heroes/heroes.module.scss';
import LoadImg from '../../assets/images/skills/power.png';
import InfoHeroes from '../info/InfoHeroes';

class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  onLoadHero() {
    console.log(localStorage);
  }

  onSaveHero() {
    // Object.keys(this.props).map((key) => {
    //   localStorage.setItem(key, 'test');
    // });

    // сделать рефактор это колбасы /////

    localStorage.setItem('id', this.props.id);
    localStorage.setItem('photo', this.props.photo);
    localStorage.setItem('name', this.props.name);
    localStorage.setItem('power', this.props.power);
    localStorage.setItem('dexterity', this.props.dexterity);
    localStorage.setItem('intellect', this.props.intellect);
    localStorage.setItem('charisma', this.props.charisma);
    localStorage.setItem('attack', this.props.attack);
    localStorage.setItem('stels', this.props.stels);
    localStorage.setItem('bow', this.props.bow);
    localStorage.setItem('trainability', this.props.trainability);
    localStorage.setItem('survival', this.props.survival);
    localStorage.setItem('medicine', this.props.medicine);
    localStorage.setItem('intimidation', this.props.intimidation);
    localStorage.setItem('insight', this.props.insight);
    localStorage.setItem('appearance', this.props.appearance);
    localStorage.setItem('manipulation', this.props.manipulation);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState((prevState) => {
        return {
          ...this.props,
        };
      });
    }
  }

  render() {
    return (
      <div className={classes.save}>
        <button onClick={() => this.onSaveHero()} className={classes.save_btn}>
          Save
        </button>
        <h1 className={classes.save_hero}>
          Сохраненные герои:
          <img onClick={() => this.onLoadHero()} className={classes.loading} src={LoadImg}></img>
        </h1>
      </div>
    );
  }
}

export default Save;
