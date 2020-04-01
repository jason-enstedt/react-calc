import React, { useState, useEffect } from 'react';


const Buttons = () => {
    const [equation, setEquation] = useState("");
    const [answer, setAnswer] = useState("0");
    const [counter, setCounter] = useState(false);
    const addToScreen = (number) => {
        if(isNaN(number)){
            if(equation.slice(-1) == ""){
                return;
            }
            if(isNaN(equation.slice(-1))){
                return;
            }
            if(number == "."){
                setCounter(true);
                
            }
        }
        if(number == "+" || number == "-" || number == "*" || number == "/"){
            setCounter(false);
        }
        if(number == "." && counter == true){
            return;
        }
        let stringNumber = number.toString();
        let currentEquation = equation;
        setEquation(currentEquation + stringNumber);
    }
    useEffect(() =>{
        if(equation.includes("+") || equation.includes("-") || equation.includes("*") || equation.includes("/")){
           if(Number.isInteger(parseInt(equation.slice(-1)))){
               getAnswer();
           }
            
         }
    }, [equation]);
    const getAnswer = () => {
        let newAnswer = eval(equation);
        setAnswer(newAnswer);
    }
    const commitAnswer = () => {
        if(Number.isInteger(parseInt(equation.slice(-1)))){
            let newAnswer = eval(equation);
            setAnswer(newAnswer.toString());
            setEquation(newAnswer.toString());
        }
        
    }
    const clearScreen = () => {
        setEquation("");
        setAnswer("0");
    }
    const clearEntry = () => {
        setEquation(equation.slice(0, -1));
    }
    return (
        <div className="calculator">
            <div className="results"> 
                <p className="main">{answer}</p>
                <p className="calc">{equation}</p>
            </div>
            <div className="buttons"> 
                <div className="button-row">
                    <button className="clear" onClick={clearScreen}>C</button>
                    <button onClick={clearEntry}>CE</button>
                    <button onClick={()=> addToScreen("/")}>/</button>
                </div>
                <div className="button-row">
                    <button onClick={()=> addToScreen(7)} >7</button>
                    <button onClick={()=> addToScreen(8)}>8</button>
                    <button onClick={()=> addToScreen(9)}>9</button>
                    <button onClick={()=> addToScreen("*")}>x</button>
                </div>
                <div className="button-row">
                    <button onClick={()=> addToScreen(4)}>4</button>
                    <button onClick={()=> addToScreen(5)}>5</button>
                    <button onClick={()=> addToScreen(6)}>6</button>
                    <button onClick={()=> addToScreen("-")}>-</button>
                </div>
                <div className="button-row">
                    <button onClick={()=> addToScreen(1)}>1</button>
                    <button onClick={()=> addToScreen(2)}>2</button>
                    <button onClick={()=> addToScreen(3)}>3</button>
                    <button onClick={()=> addToScreen("+")}>+</button>
                </div>
                <div className="button-row">
                    <button onClick={()=> addToScreen(0)}>0</button>
                    <button onClick={()=> addToScreen(".")}>.</button>
                    <button className="equal" onClick={commitAnswer}>=</button>
                </div>
            </div>
      </div>
    );
  };

export default Buttons;