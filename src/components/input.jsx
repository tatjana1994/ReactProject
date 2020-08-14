import React, { useState } from "react";
import "../custom.css";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        className="input"
        placeholder="Please write something"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button className="submit" onClick={() => props.getInput(inputValue)}>
        Submit
      </button>
    </div>
  );
};

export default Input;
