import React from 'react';
//scss
import classes from '../../styles/skills.module.scss';
//images
import trainabilytyImage from '../../assets/images/skills/obuchaemost.png'; // обучаемость
import survivalImage from '../../assets/images/skills/vizhvanie.png'; // выживание
import medicineImage from '../../assets/images/skills/medicy.png'; // медицина

function SkillsIntellect({
  intellect,
  trainability,
  survival,
  medicine,
  onChangeSkills,
  personageSkills,
}) {
  const updatedIntellect = (intellect) => {
    if (intellect > 5) {
      intellect = 5;
    }
    return intellect;
  };
  return (
    <div className={classes.intellect}>
      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, trainability, intellect, 'intellect')}
            name="trainability"
            className={classes.powers}
            src={trainabilytyImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Обучаемость: {trainability} из {updatedIntellect(intellect)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(trainability)}</h3>
      </div>

      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, survival, intellect, 'intellect')}
            name="survival"
            className={classes.powers}
            src={survivalImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Выживание: {survival} из {updatedIntellect(intellect)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(survival)}</h3>
      </div>

      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, medicine, intellect, 'intellect')}
            name="medicine"
            className={classes.powers}
            src={medicineImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Медицина: {medicine} из {updatedIntellect(intellect)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(medicine)}</h3>
      </div>
    </div>
  );
}

export default SkillsIntellect;
