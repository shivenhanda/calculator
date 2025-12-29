import React, { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import { useRef } from "react";

export default function App() {
  const [display, setDisplay] = useState("");
  const [decimal, setDecimal] = useState(10);
  const [previousValue, setpreviousValue] = useState("")
  const [action, setAction] = useState("Degree");
  const inputRef = useRef(null);
  function handleInput(value) {
    setDecimal(value)
    if (isNaN(value)) {
      setDecimal(0);
    }
  }

  const displayAction = (val) => {
    setDisplay(display + val);
  };

  const clearDisplay = () => {
    setpreviousValue("")
    setDisplay("");
  }
  const decimalInput = document.getElementById("decimalInput");
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.key >= "0" && e.key <= "9") ||
        ["+", "-", "*", "/", ".", "(", ")", "^"].includes(e.key)) {
        if (document.activeElement !== decimalInput.current) {
          displayAction(e.key);
        }
      }
      if (e.key === "Enter") {
        calculate(display);
      }
      if (e.key === "Backspace") {
        back();
      }
      if (e.key.toLowerCase() === "c") {
        clearDisplay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [display]);

  return (
    <>
      <div className="calculator">
        <div className="display">
          <p id="previousValue">{previousValue}</p>
          <input type="text" ref={inputRef} id="DisplayValue" value={display} readOnly />
        </div>
        <div className="calculate">
          <div className="btn operator" onClick={() => displayAction("+")}>+</div>
          <div className="btn btn7" onClick={() => displayAction("7")}>7</div>
          <div className="btn btn8" onClick={() => displayAction("8")}>8</div>
          <div className="btn btn9" onClick={() => displayAction("9")}>9</div>
          <div className="btn operator" onClick={() => displayAction("-")}>-</div>
          <div className="btn btn4" onClick={() => displayAction("4")}>4</div>
          <div className="btn btn5" onClick={() => displayAction("5")}>5</div>
          <div className="btn btn6" onClick={() => displayAction("6")}>6</div>
          <div className="btn operator" onClick={() => displayAction("*")}>*</div>
          <div className="btn btn1" onClick={() => displayAction("1")}>1</div>
          <div className="btn btn2" onClick={() => displayAction("2")}>2</div>
          <div className="btn btn3" onClick={() => displayAction("3")}>3</div>
          <div className="btn operator" onClick={() => displayAction("/")}>/</div>
          <div className="btn btn0" onClick={() => displayAction("0")}>0</div>
          <div className="btn btn10" onClick={() => displayAction(".")}>.</div>
          <div className="btn btn11" onClick={() => calculate(display)}>=</div>
          <div className="btn operator" onClick={clearDisplay}>C</div>
          <div className="btn operator" onClick={() => displayAction("(")}>(</div>
          <div className="btn operator" onClick={() => displayAction(")")}> )</div>
          <div className="btn operator" onClick={() => displayAction("sin(")}>sin</div>
          <div className="btn operator" onClick={() => displayAction("cos(")}>cos</div>
          <div className="btn operator activation" onClick={() => actionHandle()}>{action}</div>
          <div className="btn operator" onClick={() => displayAction("^")}>^</div>
          <div className="btn operator back" onClick={() => back()}>Back</div>
        </div>
      </div>
      <div id="decimalhandle">
        <input type="number" onChange={(event) => { handleInput(event.target.value) }} placeholder="Enter Decimal:" id="decimalInput" />
        <p>Current Decimal:{decimal}</p>
      </div>
    </>
  );
  function actionHandle() {
    if (action == "Degree") {
      setAction("Radian");
    } else {
      setAction("Degree")
    }
  }

  function calculate(display) {
    if (action == "Radian") {
      radianfetch();
    }
    else {
      degreefetch();
    }
  }
  function radianfetch() {
    fetch("https://calculator-70if.onrender.com/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression: display })
    }).then(res => res.json())
      .then(data => {
        setpreviousValue(display);
        setDisplay(data.result)
        if(display!="undefined"){
          setDisplay(data.result.toFixed(decimal))
        }
      }).catch(err => {
        console.log("Error:", err)
      })
  }
  function degreefetch() {
    fetch("https://calculator-70if.onrender.com/calculatedegree", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression: display })
    }).then(res => res.json())
      .then(data => {
        setpreviousValue(display);
        setDisplay(data.result)
        if(display!="undefined"){
          setDisplay(data.result.toFixed(decimal))
        }
      }).catch(err => {
        console.log("Error:", err)
      })
  }
  function back() {
    if (display === "") {
      return;
    }
    setDisplay(display.toString().slice(0, -1));
  }
}