import React from 'react';
//scss
import classes from '../../styles/skills.module.scss';
//Images
import powersImage from '../../assets/images/skills/power.png';

function SkillsAttack({ power, attack, personageSkills, onChangeSkills }) {
  const updatedPower = (power) => {
    if (power > 5) {
      power = 5;
    }
    return power;
  };

  return (
    <div className={classes.attack}>
      <button className={classes.btn} type="button">
        <img
          onClick={(event) => onChangeSkills(event, attack, power, 'power')}
          name="attack"
          className={classes.powers}
          src={powersImage}
          alt="rows"></img>
      </button>
      <h3 className={classes.title_skills}>
        Атака: {attack} из {updatedPower(power)}
      </h3>
      <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(attack)}</h3>
    </div>
  );
}

export default SkillsAttack;
