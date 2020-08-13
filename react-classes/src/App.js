import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';
import { getNewTimesTemp } from './helper/dataTimeHelper';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      clickArray: [],
    };
  }

  handleClick = () => {
    const newClickArray = Object.assign([], this.click);
    this.setState({ clickArray: newClickArray });
  };

  render() {
    return (
      <div>
        <h1>React components</h1>
        <button onClick={this.handleClick}>Clique aqui</button>
        <ul></ul>
      </div>
    );
  }
}
