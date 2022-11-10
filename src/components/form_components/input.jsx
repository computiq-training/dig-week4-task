import React from "react";
import "./input.css";

const Input = (probs) => {
  return (
    <input
      className="input"
      value={probs.var}
          onChange={(e) => { probs.set_var(e.target.value)}}
      type="text"
      placeholder={probs.placeholder}
    />
  );
};

export default Input;
