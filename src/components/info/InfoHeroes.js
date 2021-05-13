import classes from './InfoHeroes.module.scss';
import React, { Component } from 'react';
import Skills from '../skills/Skills';
import Damage from '../heroes/Damage';

class InfoHeroes extends Component {
  state = {
    power: 0,
    dexterity: 0,
    intellect: 0,
    charisma: 0,
  };

  inputOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (value < 0 || value > 10) {
      return;
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: Number(value),
      };
    });
  };

  render() {
    const currentParams = {
      liveForce: this.state.power + 3, // жизненная сила
      evasion: this.state.dexterity + 10, // уклонение
      energy: this.state.dexterity + this.state.intellect, //энергичность
    };
    const disableInfo = this.props.disableInfo;
    const { power, dexterity, intellect, charisma } = this.state;
    return (
      <div className={classes.about}>
        <h2 className={classes.name}>Введите имя</h2>
        <input className={classes.input} type="text" disabled={disableInfo}></input>
        <h2 className={classes.power}>Сила (от 1 до 10)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChange(event)}
          name="power"
          value={power}
          type="number"
          placeholder="Сила"
          min="0"
          max="10"
          step="1"
          disabled={disableInfo}></input>

        <h2 className={classes.power}>Ловкость (от 1 до 10)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChange(event)}
          name="dexterity"
          value={dexterity}
          type="number"
          placeholder="Ловкость"
          min="0"
          max="10"
          step="1"
          disabled={disableInfo}></input>

        <h2 className={classes.power}>Интелект (от 1 до 10)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChange(event)}
          name="intellect"
          value={intellect}
          type="number"
          placeholder="Интелект"
          min="0"
          max="10"
          step="1"
          disabled={disableInfo}></input>

        <h2 className={classes.power}>Харизма (от 1 до 10)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChange(event)}
          name="charisma"
          value={charisma}
          type="number"
          placeholder="Харизма"
          min="0"
          max="10"
          step="1"
          disabled={disableInfo}></input>

        <div className={classes.additional}>
          <h2 className={classes.power}>Жизненная сила {`: ${currentParams.liveForce}`}</h2>
          <h2 className={classes.power}>Уклонение {`: ${currentParams.evasion}`}</h2>
          <h2 className={classes.power}>Энергичность {`: ${currentParams.energy}`}</h2>
          <Skills power={power} dexterity={dexterity} intellect={intellect} charisma={charisma} />
          <Damage lifeForce={currentParams.liveForce} />
        </div>
      </div>
    );
  }
}

export default InfoHeroes;
