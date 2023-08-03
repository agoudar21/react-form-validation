import React, { useState } from "react";
import "./FromInput.css";
import { TextField, FormHelperText } from "@material-ui/core";

const FormInput = ({ label, message, onChange, id, required, ...inputProps }) => {
  const [focusedMove, setFocusedMove] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFocus = (e) => {
    setFocusedMove(true);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(e);

    if (inputProps.pattern) {
      const regex = new RegExp(inputProps.pattern);
      if (!regex.test(inputValue)) {
        setErrorMessage(message);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="inputs">
      <TextField
        className="custom-form-input"
        variant="outlined"
        label={label}
        required={required}
        {...inputProps}
        focusedMove={focusedMove.toString()}
        autoComplete="off"
        inputProps={{
          pattern: inputProps.pattern,
        }}
        error={Boolean(errorMessage)}
        onChange={handleInputChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
      />
      {message && <FormHelperText>{message}</FormHelperText>}
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};

export default FormInput;
