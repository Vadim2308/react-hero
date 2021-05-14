import React, { Component } from 'react';

// function Save(props) {
//   console.log(props);
//   return <></>;
// }

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
    return <></>;
  }
}

export default Save;
