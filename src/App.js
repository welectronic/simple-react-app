// src/App.js
import React, { Component } from 'react';
import Display from './components/display/Display';
import ButtonPanel from './components/buttonpanel/ButtonPanel';
import Calculator from './logic/Calculator';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      previousOperation: false,
      selectedOperator: null, // Nuevo estado para el operador seleccionado
    };

    this.calculator = new Calculator({
      currentValue: () => this.state.displayValue,
      tagOperation: () => this.state.previousOperation,
      clear: this.clearDisplay,
      append: this.appendDisplay,
      update: this.updateDisplay,
      setPreviousOperation: this.setPreviousOperation,
      setSelectedOperator: this.setSelectedOperator // Pasamos el nuevo método
    });
  }

  clearDisplay = () => {
    this.setState({ 
      displayValue: '0',
      selectedOperator: null // Resetear el operador seleccionado
    });
  }

  appendDisplay = (value) => {
    this.setState((prevState) => ({
      displayValue: prevState.displayValue === '0' ? value : prevState.displayValue + value
    }));
  }

  updateDisplay = (value) => {
    this.setState({
      displayValue: value
    });
  }

  setPreviousOperation = (operation) => {
    this.setState({
      previousOperation: operation
    });
  }

  setSelectedOperator = (operator) => {
    this.setState({
      selectedOperator: operator
    });
  }
  
  handleClick = (buttonName) => {
    this.calculator.pressButton(buttonName);
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.displayValue} />
        <ButtonPanel 
          onClick={this.handleClick} 
          selectedOperator={this.state.selectedOperator} // Pasamos el estado del operador seleccionado
        />
      </div>
    );
  }
}

export default App;
