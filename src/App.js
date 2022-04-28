import React, {useState} from "react";

function App() {
  const [calculation,setCalculation]  = useState("");
  const [result,setResult] = useState("");

  let ops = ['/', '*', '+', '-', '.'];

  function updateCalc(value){
    if(
      ops.includes(value) && calculation ==='' ||
      ops.includes(value) && ops.includes(calculation.slice(-1))
    ){
      return;
    }
    setCalculation(calculation + value);

    if(!ops.includes(value)){
      setResult(eval(calculation+value).toString())
    }
  }

  function createDigits(){
    let digits = [];

    for(let i=1; i<=9; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      );
    }

    return digits;
  }

  function calculate(){
    setCalculation(eval(calculation).toString())
  }

  function backspace(){
    if(calculation === ''){
      return;
    }

    let value = calculation.slice(0,-1);
    setCalculation(value);

  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          &nbsp; 
          {calculation || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={backspace}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}

          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
