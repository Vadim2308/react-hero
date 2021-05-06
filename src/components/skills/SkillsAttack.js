import React from 'react';
import classes from './skills.module.scss';
import powersImage from './images/power.png';

function SkillsAttack({ power, onChangePower, attack, personageSkills }) {
  const updatedPower = (power) => {
    if (power > 5) {
      power = 5;
    }
    return power;
  };

  return (
    <div className={classes.attack}>
      <button onClick={() => onChangePower(power)} className={classes.btn} type="button">
        <img className={classes.powers} src={powersImage} alt="rows"></img>
      </button>
      <h3 className={classes.title_skills}>
        Атака: {attack} из {updatedPower(power)}
      </h3>
      <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(attack)}</h3>
    </div>
  );
}

export default SkillsAttack;
