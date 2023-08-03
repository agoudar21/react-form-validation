import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "cardName",
      type: "text",
      message: "Please enter the name on card",
      label: "Name on card",
      pattern: "^[A-Za-z]{4,16}$",
      required: true,
    },
    {
      id: 2,
      name: "cardNumber",
      type: "number",
      message: "Please enter your full payment card number",
      label: "Please enter your full payment card number",
      required: true,
    },
    {
      id: 3,
      name: "cvv",
      type: "number",
      message: "This is the 3-digit number found on the back of the card",
      label: "CVV",
      pattern: "^[0-9]{3}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      message:
        "Password should be 6-12 characters and include at least 1 letter, 1 number, and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      message: "Passwords don't match",
      label: "Confirm password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Create your account Here!!</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;