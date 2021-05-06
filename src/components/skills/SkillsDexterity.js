import React from 'react';
import classes from './skills.module.scss';
import stelsImage from './images/stels.png'; // стелс
import bowImage from './images/strelbaluka.png'; // стрельба из лука

function SkillsDexterity({ personageSkills, dexterity, stels, onChangeStels, bow, onChangeBow }) {
  const updatedDexterity = (dexterity) => {
    if (dexterity > 5) {
      dexterity = 5;
    }
    return dexterity;
  };
  return (
    <div className={classes.dexterity}>
      <div className={classes.dexterity__item}>
        <button onClick={() => onChangeStels(dexterity)} className={classes.btn} type="button">
          <img className={classes.powers} src={stelsImage} alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Стелс: {stels} из {updatedDexterity(dexterity)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(stels)}</h3>
      </div>
      <div className={classes.dexterity__item}>
        <button onClick={() => onChangeBow(dexterity)} className={classes.btn} type="button">
          <img className={classes.powers} src={bowImage} alt="rows"></img>
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
