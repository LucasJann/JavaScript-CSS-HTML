import React, { useState } from "react";

import classes from "./Input.module.css";
import Card from "./Card";

// string.map((letter) => {
//   console.log(letter)
// })

// for (let i = 0; i < string.length; i++) {
//   for(let j = 1; j < string.length; j++){
//     return newString.push(string[j] + string[i])
//   }
// }
const Input = () => {
  const [stringState, setStringState] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const onInputChange = (event) => {
    event.preventDefault();
    let string = event.target.value;
    let newString = "";

    for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }

    return setIsValid(true), setMessage(newString), setStringState(string);
  };

  return (
    <Card classes={classes.input}>
      <form>
        <label htmlFor="input">
          <h2>Enter a String</h2>
        </label>
        <input
          min="0"
          name="input"
          type="text"
          value={stringState}
          onChange={onInputChange}
        />
        {isValid ? <h2>{message}</h2> : null}
      </form>
    </Card>
  );
};

export default Input;
