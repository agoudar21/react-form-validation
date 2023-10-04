import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, FormHelperText, makeStyles as selectMakeStyles } from '@material-ui/core';

const useStyles = selectMakeStyles((theme) => ({
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
    },
    '& .MuiInputLabel-root': {
      color: 'grey',
      '&.Mui-focused': {
        color: 'black',
      },
    },
  },
  selectFieldRoot: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: 'grey', // Change the hover color to grey
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey', // Change the focused color to grey
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

const FormSelect = ({ label, message, errMessage, name, required, options, value, onChange, width }) => {
  const [focusedMove, setFocusedMove] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setErrorMessage('');
  }, [value]);

  const handleFocus = () => {
    setFocusedMove(true);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    onChange({ target: { name, value: selectedValue } });

    if (required && !selectedValue) {
      setErrorMessage(errMessage);
    } else {
      setErrorMessage('');
    }
  };

  const handleBlur = () => {
    setFocusedMove(false);
  };

  return (
    <div className="inputs">
      <TextField
        variant="outlined"
        size="small"
        style={{ width: width === 50 ? '50%' : '100%' }}
        label={required?`${label}*`:`${label}`}
        required={required}
        select
        value={value}
        onChange={handleSelectChange}
        onBlur={handleBlur} // Use the handleBlur function for onBlur event
        onFocus={handleFocus}
        classes={{ root: focusedMove ? classes.selectFieldRoot : classes.textFieldRoot }} // Apply the custom styles based on focus state
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {errorMessage ? (
        <FormHelperText error>{errorMessage}</FormHelperText>
      ) : (
        <FormHelperText>{message}</FormHelperText>
      )}
    </div>
  );
};

export default FormSelect;
