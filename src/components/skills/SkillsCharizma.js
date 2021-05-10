import React from 'react';
//scss
import classes from './skills.module.scss';
//images
import intimidationImage from '../../assets/images/skills/zapugivanie.png'; //запугивание
import insightImage from '../../assets/images/skills/pronicatelnost.png'; //Проницательность
import appearanceImage from '../../assets/images/skills/vneshniivid.png'; // внешний вид
import manipulationImage from '../../assets/images/skills/manipulated.png'; // Манипулирование

function SkillsCharizma({
  personageSkills,
  onChangeSkills,
  charisma,
  intimidation,
  insight,
  appearance,
  manipulation,
}) {
  const updatedCharizma = (charisma) => {
    if (charisma > 5) {
      charisma = 5;
    }
    return charisma;
  };
  return (
    <div className={classes.charisma}>
      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, intimidation, charisma, 'charisma')}
            name="intimidation"
            className={classes.powers}
            src={intimidationImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Запугивание: {intimidation} из {updatedCharizma(charisma)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(intimidation)}</h3>
      </div>

      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, insight, charisma, 'charisma')}
            name="insight"
            className={classes.powers}
            src={insightImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Проницательность: {insight} из {updatedCharizma(charisma)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(insight)}</h3>
      </div>

      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, appearance, charisma, 'charisma')}
            name="appearance"
            className={classes.powers}
            src={appearanceImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Внешний вид: {appearance} из {updatedCharizma(charisma)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(appearance)}</h3>
      </div>

      <div className={classes.dexterity__item}>
        <button className={classes.btn} type="button">
          <img
            onClick={(event) => onChangeSkills(event, manipulation, charisma, 'charisma')}
            name="manipulation"
            className={classes.powers}
            src={manipulationImage}
            alt="rows"></img>
        </button>
        <h3 className={classes.title_skills}>
          Манипулирование: {manipulation} из {updatedCharizma(charisma)}
        </h3>
        <h3 className={classes.title_skills}>Ваш уровень: {personageSkills(manipulation)}</h3>
      </div>
    </div>
  );
}

export default SkillsCharizma;
