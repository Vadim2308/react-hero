import React, { Component } from 'react';
//scss
import classes from '../../styles/skills.module.scss';
//components
import SkillsAttack from './SkillsAttack';
import SkillsDexterity from './SkillsDexterity';
import SkillsIntellect from './SkillsIntellect';
import SkillsCharizma from './SkillsCharizma';
import Save from '../save/Save';
import Download from '../download/Download';

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
      intimidation: 0, // запугивание
      insight: 0, //проницательность
      appearance: 0, //внешний вид
      manipulation: 0, //манупилирование
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

  componentDidUpdate(prevProps, prevState) {
    const {
      power,
      dexterity,
      intellect,
      charisma,
      attack,
      stels,
      bow,
      trainability,
      survival,
      medicine,
      intimidation,
      insight,
      appearance,
      manipulation,
    } = this.state;

    if (this.props !== prevProps) {
      return this.setState(() => {
        return {
          power: this.props.power,
          dexterity: this.props.dexterity,
          intellect: this.props.intellect,
          charisma: this.props.charisma,
        };
      });
    }

    if (attack > power) {
      return this.setState((prevState) => {
        return {
          attack: (prevState.attack = power),
        };
      });
    }
    if (stels > dexterity) {
      return this.setState((prevState) => {
        return {
          stels: (prevState.stels = dexterity),
        };
      });
    }
    if (bow > dexterity) {
      return this.setState((prevState) => {
        return {
          bow: (prevState.bow = dexterity),
        };
      });
    }
    if (trainability > intellect) {
      return this.setState((prevState) => {
        return {
          trainability: (prevState.trainability = intellect),
        };
      });
    }
    if (survival > intellect) {
      return this.setState((prevState) => {
        return {
          survival: (prevState.survival = intellect),
        };
      });
    }
    if (medicine > intellect) {
      return this.setState((prevState) => {
        return {
          medicine: (prevState.medicine = intellect),
        };
      });
    }
    if (intimidation > charisma) {
      return this.setState((prevState) => {
        return {
          intimidation: (prevState.intimidation = charisma),
        };
      });
    }
    if (insight > charisma) {
      return this.setState((prevState) => {
        return {
          insight: (prevState.insight = charisma),
        };
      });
    }
    if (appearance > charisma) {
      return this.setState((prevState) => {
        return {
          appearance: (prevState.appearance = charisma),
        };
      });
    }
    if (manipulation > charisma) {
      return this.setState((prevState) => {
        return {
          appearance: (prevState.manipulation = charisma),
        };
      });
    }
  }

  onChangeStateFromDownload = () => {
    return this.setState(() => {
      return {
        attack: Number(localStorage.getItem('attack')),
        stels: Number(localStorage.getItem('stels')),
        bow: Number(localStorage.getItem('bow')),
        trainability: Number(localStorage.getItem('trainability')),
        survival: Number(localStorage.getItem('survival')),
        medicine: Number(localStorage.getItem('medicine')),
        intimidation: Number(localStorage.getItem('intimidation')),
        insight: Number(localStorage.getItem('insight')),
        appearance: Number(localStorage.getItem('appearance')),
        manipulation: Number(localStorage.getItem('manipulation')),
      };
    });
  };

  onChangeSkills = (event, skills, baseParams, baseParamsString) => {
    const value = baseParamsString.toString();
    const name = event.target.name;
    if (skills === baseParams || skills >= 5) {
      return this.setState((prevState) => {
        return {
          ...prevState,
          [name]: (prevState[name] = 0),
        };
      });
    }
    return this.setState((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
        [value]: baseParams,
      };
    });
  };

  personageSkills = (level) => {
    const { untrained, beginner, apprentice, adept, expert, master } = this.state.skills;
    if (level === 0) {
      return untrained;
    }
    if (level === 1) {
      return beginner;
    }
    if (level === 2) {
      return apprentice;
    }
    if (level === 3) {
      return adept;
    }
    if (level === 4) {
      return expert;
    }
    if (level === 5) {
      return master;
    }
  };

  render() {
    const {
      id,
      photo,
      name,
      power,
      dexterity,
      intellect,
      charisma,
      onChangeMainState,
      onChangeStateBase,
    } = this.props;
    return (
      <div className={classes.skills}>
        <SkillsAttack
          personageSkills={this.personageSkills}
          power={power}
          attack={this.state.attack}
          onChangeSkills={this.onChangeSkills}
        />
        <SkillsDexterity
          personageSkills={this.personageSkills}
          onChangeSkills={this.onChangeSkills}
          dexterity={dexterity}
          stels={this.state.stels}
          bow={this.state.bow}
        />
        <SkillsIntellect
          personageSkills={this.personageSkills}
          intellect={intellect}
          trainability={this.state.trainability}
          onChangeSkills={this.onChangeSkills}
          survival={this.state.survival}
          medicine={this.state.medicine}
        />
        <SkillsCharizma
          personageSkills={this.personageSkills}
          onChangeSkills={this.onChangeSkills}
          charisma={charisma}
          intimidation={this.state.intimidation}
          insight={this.state.insight}
          appearance={this.state.appearance}
          manipulation={this.state.manipulation}
        />
        <Save
          id={id}
          photo={photo}
          name={name}
          power={power}
          dexterity={dexterity}
          intellect={intellect}
          charisma={charisma}
          attack={this.state.attack}
          stels={this.state.stels}
          bow={this.state.bow}
          trainability={this.state.trainability}
          survival={this.state.survival}
          medicine={this.state.medicine}
          intimidation={this.state.intimidation}
          insight={this.state.insight}
          appearance={this.state.appearance}
          manipulation={this.state.manipulation}
        />
        <Download
          onChangeStateSkills={this.onChangeStateFromDownload}
          onChangeMainState={onChangeMainState}
          onChangeStateBase={onChangeStateBase}
        />
      </div>
    );
  }
}

export default Skills;
