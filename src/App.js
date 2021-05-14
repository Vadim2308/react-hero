import React from 'react';
//scss
import './App.module.scss';
import classes from './App.module.scss';
//images
import hero1 from './assets/images/heroes/hero1.png';
import hero2 from './assets/images/heroes/hero2.png';
import hero3 from './assets/images/heroes/hero3.png';
import hero4 from './assets/images/heroes/hero4.png';
import leftArrow from './assets/images/heroes/left-arrow.png';
import rightArrow from './assets/images/heroes/right-arrow.png';
//components
import InfoHeroes from './components/info/InfoHeroes';
import AllHeroes from './components/heroes/AllHeroes';

class App extends React.Component {
  allHeroes = [
    {
      id: 1,
      photo: hero1,
    },
    {
      id: 2,
      photo: hero2,
    },
    {
      id: 3,
      photo: hero3,
    },
    {
      id: 4,
      photo: hero4,
    },
  ];

  state = {
    currentHero: 1,
    disableInfo: true, // true
  };

  nextHero = () => {
    if (this.state.disableInfo) {
      if (this.state.currentHero > this.allHeroes.length - 1) {
        this.setState((prevState) => {
          return {
            currentHero: (prevState.currentHero = 0),
          };
        });
      }
      this.setState((prevState) => {
        return {
          currentHero: prevState.currentHero + 1,
        };
      });
    }
  };

  prevHero = () => {
    if (this.state.disableInfo) {
      if (this.state.currentHero < 2) {
        this.setState((prevState) => {
          return {
            currentHero: (prevState.currentHero = 5),
          };
        });
      }
      this.setState((prevState) => {
        return {
          currentHero: prevState.currentHero - 1,
        };
      });
    }
  };

  heroIsChoosen = (event) => {
    if (this.state.disableInfo) {
      event.target.innerHTML = 'Изменить';
    } else {
      event.target.innerHTML = 'Выбрать';
    }
    this.setState((prevState) => {
      return {
        disableInfo: !prevState.disableInfo,
      };
    });
  };

  render() {
    let currentPhotoHero = this.allHeroes[this.state.currentHero - 1].photo;
    return (
      <>
        <div className={classes.main}>
          <div className={classes.container}>
            <div className={classes.main__inner}>
              <div className={classes.main__hero}>
                <img
                  className={classes.leftArrow}
                  src={leftArrow}
                  alt="rows"
                  onClick={this.prevHero}
                />
                <img
                  className={classes.rightArrow}
                  src={rightArrow}
                  alt="rows"
                  onClick={this.nextHero}
                />

                {this.allHeroes.map((hero, id) => {
                  if (this.state.currentHero === id + 1) {
                    return <AllHeroes photo={hero.photo} id={id + 1} key={id} />;
                  }
                  return null;
                })}

                <button className={classes.choose} onClick={this.heroIsChoosen}>
                  Выбрать
                </button>
              </div>
              <div className={classes.main__info}>
                <InfoHeroes
                  disableInfo={this.state.disableInfo}
                  photo={currentPhotoHero}
                  id={this.state.currentHero}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
