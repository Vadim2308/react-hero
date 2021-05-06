import React, { Component } from 'react';
import classes from './skills.module.scss';
import SkillsAttack from './SkillsAttack';
import SkillsDexterity from './SkillsDexterity';
import SkillsIntellect from './SkillsIntellect';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: this.props.power,
      dexterity: this.props.dexterity,
      intellect: this.props.intellect,
      charisma: this.props.charisma,
      attack: 0, // атака
      stels: 0, // стелс
      bow: 0, //стрельба из лука
      trainability: 0, //обучаемость
      survival: 0, //выживание
      medicine: 0, // медицина
      skills: {
        untrained: 'Нетренированный',
        beginner: 'Новичок',
        apprentice: 'Ученик',
        adept: 'Адепт',
        expert: 'Эксперт',
        master: 'Мастер',
      },
    };
  }

  componentDidUpdate() {
    if (this.state.attack > this.state.power) {
      return this.setState((prevState) => {
        return {
          attack: (prevState.attack = this.state.power),
        };
      });
    }
    if (this.state.stels > this.state.dexterity) {
      return this.setState((prevState) => {
        return {
          stels: (prevState.stels = this.state.dexterity),
        };
      });
    }
    if (this.state.bow > this.state.dexterity) {
      return this.setState((prevState) => {
        return {
          bow: (prevState.bow = this.state.dexterity),
        };
      });
    }
  }

  onChangePower = (power) => {
    if (power === this.state.attack || this.state.attack >= 5) {
      return this.setState((prevState) => {
        return {
          attack: (prevState.attack = 0),
        };
      });
    }
    return this.setState((prevState) => {
      return {
        attack: prevState.attack + 1,
        power: (prevState.power = power),
      };
    });
  };

  onChangeStels = (dexterity) => {
    if (dexterity === this.state.stels || this.state.stels >= 5) {
      return this.setState((prevState) => {
        return {
          stels: (prevState.stels = 0),
        };
      });
    }
    return this.setState((prevState) => {
      return {
        stels: prevState.stels + 1,
        dexterity: (prevState.dexterity = dexterity), // записываем в стейт значение, введенное пользователем
      };
    });
  };

  onChangeBow = (dexterity) => {
    if (dexterity === this.state.bow || this.state.bow >= 5) {
      return this.setState((prevState) => {
        return {
          bow: (prevState.bow = 0),
        };
      });
    }
    return this.setState((prevState) => {
      return {
        bow: prevState.bow + 1,
        dexterity: (prevState.dexterity = dexterity), // записываем в стейт значение, введенное пользователем
      };
    });
  };

  personageSkills = (level) => {
    if (level === 0) {
      return this.state.skills.untrained;
    }
    if (level === 1) {
      return this.state.skills.beginner;
    }
    if (level === 2) {
      return this.state.skills.apprentice;
    }
    if (level === 3) {
      return this.state.skills.adept;
    }
    if (level === 4) {
      return this.state.skills.expert;
    }
    if (level === 5) {
      return this.state.skills.master;
    }
  };

  render() {
    const { power, dexterity, intellect, charisma } = this.props;
    return (
      <div className={classes.skills}>
        <SkillsAttack
          personageSkills={this.personageSkills}
          onChangePower={this.onChangePower}
          power={power}
          attack={this.state.attack}
        />
        <SkillsDexterity
          personageSkills={this.personageSkills}
          onChangeStels={this.onChangeStels}
          dexterity={dexterity}
          stels={this.state.stels}
          bow={this.state.bow}
          onChangeBow={this.onChangeBow}
        />
        <SkillsIntellect dexterity={dexterity} />
      </div>
    );
  }
}

export default Skills;
