import React, { useState } from "react";

import classes from "./Input.module.css";
import Card from "./Card";

const Input = () => {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const onInputChange = (event) => {
    let inputChanged = event.target.value;

    if (inputChanged !== "") {
      setNumber(inputChanged);
      setIsValid(true);

      let firstNumber = 0;
      let secondNumber = 1;
      let inputValue = parseInt(inputChanged);

      while (secondNumber < inputValue) {
        let nextValue = secondNumber + firstNumber;
        firstNumber = secondNumber;
        secondNumber = nextValue;
      }

      if (firstNumber === inputValue || secondNumber === inputValue) {
        const info = `The number ${inputValue} belongs to the fibonacci sequence`;
        setMessage(info);
      } else {
        const info = `The number ${inputValue} does not belong to the fibonacci sequence`;
        setMessage(info);
      }
    } else {
      setNumber("");
      setMessage("");
      setIsValid(false);
    }
  };

  return (
    <Card classes={classes.input}>
      <form>
        <label htmlFor="input">
          <h2>Enter a number</h2>
        </label>
        <input
          min="0"
          name="input"
          type="number"
          value={number}
          onChange={onInputChange}
        />
        {isValid ? <h2>{message}</h2> : null}
      </form>
    </Card>
  );
};

export default Input;
