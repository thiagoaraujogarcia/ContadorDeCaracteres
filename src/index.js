import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";

import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      digitado: 0
    };
  }

  // amountCaracter(){
  //   const conteudo = campo.value();
  //   const amount = conteudo.length;
  // }

  handleType() {
    const amount = findDOMNode.toString.length;
    console.log(amount);
    if (amount > 0) {
      this.state.digitado === amount;
      this.setState({ digitado });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Contador de Caracteres Digitados</h1>
        <h2>Entre com os dados</h2>
        <textarea onInput={() => this.handleType()} rows="8" cols="40" />
        <p>Quantidade de Caracteres: {this.state.digitado}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
