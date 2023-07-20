import React, { useState } from "react";
import "./FromInput.css";
const FormInput = (props) => {
    const [focusedMove, setFocusedMove] = useState(false)
    const {label, errormessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocusedMove(true)
    }
  return (
    <div className="inputs">
      <label>{label}</label>
      <input 
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => 
          inputProps.name==="confirmPassword" && setFocusedMove(true)
        }
        focusedMove={focusedMove.toString()}
        autocomplete="off"
      />
      <span>{errormessage}</span>
    </div>
  );
};

export default FormInput;
