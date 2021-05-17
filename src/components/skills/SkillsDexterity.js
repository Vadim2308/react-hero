import React from 'react';
//scss
import classes from '../../styles/skills.module.scss';
//Images
import stelsImage from '../../assets/images/skills/stels.png'; // стелс
import bowImage from '../../assets/images/skills/strelbaluka.png'; // стрельба из лука

function SkillsDexterity({ personageSkills, dexterity, stels, bow, onChangeSkills }) {
  const updatedDexterity = (dexterity) => {
    if (dexterity > 5) {
      dexterity = 5;
    }
    return dexterity;
  };

  return (
    <div className={classes.dexterity}>
      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, stels, dexterity, 'dexterity')}
            name="stels"
            className={classes.powers}
            src={stelsImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Стелс: {stels} из {updatedDexterity(dexterity)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(stels)}</h3>
      </div>
      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, bow, dexterity, 'dexterity')}
            name="bow"
            className={classes.powers}
            src={bowImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Стрельба из лука: {bow} из {updatedDexterity(dexterity)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(bow)}</h3>
      </div>
    </div>
  );
}

export default SkillsDexterity;
