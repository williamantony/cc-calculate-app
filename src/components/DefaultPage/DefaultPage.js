import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DefaultPage extends Component {

  state = {
    value: 0,
    newValue: 0
  }

  handleInput = (e) => {

    const { value } = e.target;

    this.setState({ 
      value: parseInt(value, 10),
     });

  }

  handleCalculate = () => {

    this.setState({
      newValue: this.state.newValue + this.state.value
    });

  }

  render() {
    return (
      <div className="DefaultPage">
        <div id="message">{ this.state.newValue }</div>
        <input type="number" name="textInput" onChange={ this.handleInput.bind(this) }/>
        <button onClick={ this.handleCalculate.bind(this) }>Calculate</button>
      </div>
    );
  }

}

export default withRouter(DefaultPage);
