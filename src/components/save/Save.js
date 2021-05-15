import React, { Component } from 'react';
import classes from '../heroes/heroes.module.scss';

class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
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
    console.log(this.state);
    return (
      <div className={classes.save}>
        <button className={classes.save_btn}>Save</button>
        <h1 className={classes.save_header}>Сохраненные герои:</h1>
      </div>
    );
  }
}

export default Save;
