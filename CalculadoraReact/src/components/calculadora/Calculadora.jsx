import React, { useState } from "react";
import "./Calculadora.css";

function Calculadora() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error: Expressão inválida");
    }
  };

  return (
    <div className="caixa">
      <div className="calculadora">
        <div className="nomeCalculadora">CALCULADORA</div>
        <div className="caixaResultado">
          <div className="linhaResultado">{display}</div>
        </div>
        <div className="linha1">
          <button onClick={() => handleClick("AC")}>AC</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
        </div>
        <div className="linha2">
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("7")}>7</button>
        </div>
        <div className="linha3">
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="linha4">
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button id="resultado" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
