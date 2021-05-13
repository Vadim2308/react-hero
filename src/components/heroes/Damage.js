import React, { Component } from 'react';
import classes from './heroes.module.scss';

// function Damage({ lifeForce }) {
//   lifeForce = lifeForce * 10;

//   let defaultLive = 100;

//   function renderHP(lifeForce) {
//     let currentlifeForce = lifeForce;
//     return function () {
//       currentlifeForce = currentlifeForce - 1;
//       console.log(currentlifeForce);
//       return currentlifeForce;
//     };
//   }
//   const changedHP = renderHP(lifeForce);
//   return (
//     <div className={classes.bar}>
//       <div
//         id="progressbar"
//         className={classes.health}
//         style={{ width: changedHP(lifeForce) + '%' }}></div>
//       <button onClick={() => changedHP(lifeForce)} className={classes.damage}>
//         Damage
//       </button>
//     </div>
//   );
// }

// export default Damage;

class Damage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeForce: this.props.lifeForce,
    };
  }

  changedHP = (lifeForce) => {
    return this.setState((prevState) => {
      return {
        lifeForce: prevState.lifeForce - 1,
      };
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.lifeForce !== prevProps.lifeForce) {
      this.setState(() => {
        return {
          lifeForce: this.props.lifeForce,
        };
      });
    }
  }

  render() {
    let lifeForceFromProps = this.props.lifeForce;
    let progressLiveBar = this.state.lifeForce;
    if (progressLiveBar > 100) {
      progressLiveBar = 100;
    }
    if (progressLiveBar <= 0) {
      progressLiveBar = 0;
    }
    let liveBarChanged = Math.trunc((100 * progressLiveBar) / lifeForceFromProps) + '%';
    return (
      <div className={classes.bar}>
        <div id="progressbar" className={classes.health} style={{ width: liveBarChanged }}></div>
        <button onClick={() => this.changedHP(progressLiveBar)} className={classes.damage}>
          Damage
        </button>
      </div>
    );
  }
}

export default Damage;
