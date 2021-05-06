import classes from './InfoHeroes.module.scss';
import React, { Component } from 'react';
import Skills from '../skills/Skills';

class InfoHeroes extends Component {
  state = {
    baseParams: {
      power: 0,
      dexterity: 0,
      intellect: 0,
      charisma: 0,
    },
  };

  inputOnChangePower = (event) => {
    event = Number(event.target.value);
    if (event < 0 || event > 20) {
      return;
    }
    this.setState((prevState) => {
      return {
        power: (prevState.baseParams.power = event),
      };
    });
  };

  inputOnChangeDexterity = (event) => {
    event = Number(event.target.value);
    if (event < 0 || event > 20) {
      return;
    }
    this.setState((prevState) => {
      return {
        power: (prevState.baseParams.dexterity = event),
      };
    });
  };

  inputOnChangeIntellect = (event) => {
    if (event < 1 || event > 20) {
      return;
    }
    this.setState((prevState) => {
      return {
        power: (prevState.baseParams.intellect = event),
      };
    });
  };

  inputOnChangeCharisma = (event) => {
    if (event < 1 || event > 20) {
      return;
    }
    this.setState((prevState) => {
      return {
        power: (prevState.baseParams.charisma = event),
      };
    });
  };

  render() {
    const currentParams = {
      liveForce: this.state.baseParams.power + 3, // жизненная сила
      evasion: this.state.baseParams.dexterity + 10, // уклонение
      energy: this.state.baseParams.dexterity + this.state.baseParams.intellect, //энергичность
    };

    const disableInfo = this.props.disableInfo;

    return (
      <div className={classes.about}>
        <h2 className={classes.name}>Введите имя</h2>
        <input className={classes.input} type="text" disabled={disableInfo}></input>
        <h2 className={classes.power}>Сила (от 1 до 20)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChangePower(event)}
          value={this.state.baseParams.power}
          type="number"
          placeholder="Сила"
          min="0"
          max="20"
          step="1"
          disabled={disableInfo}></input>

        <h2 className={classes.power}>Ловкость (от 1 до 20)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChangeDexterity(event)}
          value={this.state.baseParams.dexterity}
          type="number"
          placeholder="Ловкость"
          min="0"
          max="20"
          step="1"
          disabled={disableInfo}></input>

        <h2 className={classes.power}>Интелект (от 1 до 20)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChangeIntellect(Number(event.target.value))}
          value={this.state.baseParams.intellect}
          type="number"
          placeholder="Интелект"
          min="0"
          max="20"
          step="1"
          disabled={disableInfo}></input>

        <h2 className={classes.power}>Харизма (от 1 до 20)</h2>
        <input
          className={classes.input}
          onChange={(event) => this.inputOnChangeCharisma(Number(event.target.value))}
          value={this.state.baseParams.charisma}
          type="number"
          placeholder="Харизма"
          min="0"
          max="20"
          step="1"
          disabled={disableInfo}></input>
        <div className={classes.additional}>
          <h2 className={classes.power}>Жизненная сила {`: ${currentParams.liveForce}`}</h2>
          <h2 className={classes.power}>Уклонение {`: ${currentParams.evasion}`}</h2>
          <h2 className={classes.power}>Энергичность {`: ${currentParams.energy}`}</h2>
          <Skills
            power={this.state.baseParams.power}
            dexterity={this.state.baseParams.dexterity}
            intellect={this.state.baseParams.intellect}
            charisma={this.state.baseParams.charisma}
          />
        </div>
      </div>
    );
  }
}

export default InfoHeroes;
