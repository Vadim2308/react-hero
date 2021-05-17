import React, { Component } from 'react';
import classes from '../../styles/heroes.module.scss';

class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  onSaveHero() {
    let keys = Object.keys(this.props);
    let values = Object.values(this.props);
    keys.map((key, index) => {
      return localStorage.setItem(key, values[index]);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState((prevState) => {
        return {
          ...this.props,
        };
      });
    }
  }

  render() {
    return (
      <div className={classes.save}>
        <button onClick={this.onSaveHero.bind(this)} className={classes.save_btn}>
          Save
        </button>
        <h1 className={classes.save_hero}>Загрузить сохраненные параметры:</h1>
      </div>
    );
  }
}

export default Save;
