import React, { useState } from "react";
import "./FromInput.css";
import { TextField, FormHelperText, FormControl, makeStyles as inputMakeStyles } from "@material-ui/core";

const useStyles = inputMakeStyles((theme) => ({
  textFieldRoot: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffcccb', 
      },
    },
    '& .MuiInputLabel-root': {
      color: 'grey',
      '&.Mui-focused': {
        color: 'black',
      },
    },
  },
}));

const FormInput = ({ label, message, errMessage, onChange, id, required, ...inputProps }) => {
  const [focusedmove, setfocusedmove] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();

  const handleFocus = (e) => {
    setfocusedmove(true);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(e);

    if (inputProps.pattern) {
      const regex = new RegExp(inputProps.pattern);
      if (!regex.test(inputValue)) {
        setErrorMessage(errMessage);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="inputs">
      <FormControl variant="outlined" error={Boolean(errorMessage)}>
        <TextField
          variant="outlined"
          size="small"
          label={required ? `${label}*` : `${label}`}
          required={required}
          {...inputProps}
          focusedmove={focusedmove.toString()}
          autoComplete="off"
          error={Boolean(errorMessage)}
          onChange={handleInputChange}
          onBlur={handleFocus}
          onFocus={handleFocus}
          classes={{ root: classes.textFieldRoot }}
        />
      </FormControl>
      {errorMessage ? <FormHelperText error>{errorMessage}</FormHelperText> : <FormHelperText>{message}</FormHelperText>}
    </div>
  );
};

export default FormInput;
