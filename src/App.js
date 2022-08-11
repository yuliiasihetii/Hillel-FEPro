import React, { Component } from 'react';

export default class App extends Component {
  state = {
    firstValue: '',
    secondValue: '',
    result: '',
  };
  render() {
    return (
      <div>
        <input value={this.state.firstValue} onChange={this.onFirstInputChange} />
        <div>+</div>
        <input value={this.state.secondValue} onChange={this.onSecondInputChange} />
        <div>=</div>
        <div>{this.onResultShow(this.state.firstValue, this.state.secondValue)}</div>
      </div>
    );
  }
  onFirstInputChange = (e) => {
    this.setState({
      firstValue: e.target.value,
    })
  }

  onSecondInputChange = (e) => {
    this.setState({
      secondValue: e.target.value,
    })
  }

  onResultShow(firstInp, secondInp) {
    if (this.isValid(firstInp) || this.isValid(secondInp)) {
      return '';
    }
    return +firstInp + +secondInp;
  }

  isValid(inpValue) {
    return inpValue == '' || isNaN(inpValue);
  }
}
