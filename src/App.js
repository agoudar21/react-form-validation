import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import { TextField } from "@material-ui/core";

function App() {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    month: "",
    year: "",
    country: "",
    address:"",
    city:"",
    postcode:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "cardName",
      field: "input",
      width: 100,
      type: "text",
      message: "Please enter the name on card",
      errMessage: "Please enter a valid name",
      label: "Name on card",
      pattern: "^[A-Za-z]{4,16}$",
      required: true,
    },
    {
      id: 2,
      name: "cardNumber",
      field: "input",
      width: 100,
      type: "number",
      message: "Please enter your full payment card number",
      errMessage: "Please enter a valid name",
      label: "Please enter your full payment card number",
      required: true,
    },
    {
      id: 3,
      name: "cvv",
      field: "input",
      width: 100,
      type: "number",
      message: "This is the 3-digit number found on the back of the card",
      errMessage: "Please enter a valid name",
      label: "CVV",
      pattern: "^[0-9]{3}$",
      required: true,
    },
    {
      id: 4,
      name: "month",
      field: "select",
      width: 50,
      message: "Please select a month",
      errMessage: "Please select a valid month",
      label: "Month",
      required: true,
      options: [
        { value: "", label: "Month" },
        { value: "01", label: "January" },
        { value: "02", label: "February" },
        { value: "03", label: "March" },
        { value: "04", label: "April" },
        { value: "05", label: "May" },
        { value: "06", label: "June" },
        { value: "07", label: "July" },
        { value: "08", label: "August" },
        { value: "09", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
      ],
      value: values["month"],
    },
    {
      id: 5,
      name: "year",
      field: "select",
      width: 50,
      message: "Please select a year",
      errMessage: "Please select a valid year",
      label: "Year",
      required: true,
      options: [
        { value: "", label: "Year" },
        { value: "2023", label: "2023" },
        { value: "2024", label: "2024" },
        { value: "2025", label: "2025" },
        { value: "2026", label: "2026" },
        { value: "2027", label: "2027" },
        { value: "2028", label: "2028" },
        { value: "2029", label: "2029" },
        { value: "2030", label: "2030" },
        { value: "2031", label: "2031" },
        { value: "2032", label: "2032" },
        { value: "2033", label: "2033" },
        { value: "2034", label: "2034" },
        { value: "2035", label: "2035" },
        { value: "2036", label: "2036" },
        { value: "2037", label: "2037" },
        { value: "2038", label: "2038" },
        { value: "2039", label: "2039" },
        { value: "2040", label: "2040" },
      ],
      value: values["year"],
    },
    {
      id: 6,
      name: "country",
      field: "select",
      errMessage: "Please select your country",
      label: "Country",
      placeholder: "please select",
      required: true,
      options: [
        { value: "", label: "Country" },
        { value: "01", label: "India" },
        { value: "02", label: "USA" },
        { value: "03", label: "Uinted Kingdom" },
        { value: "04", label: "April" },
        { value: "05", label: "May" },
        { value: "06", label: "June" },
        { value: "07", label: "July" },
        { value: "08", label: "August" },
        { value: "09", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
      ],
      value: values["country"],
    },
    {
      id: 7,
      name: "address",
      field: "input",
      width: 100,
      type: "text",
      errMessage: "Please enter your address",
      label: "Address line 1",
      required: true,
    },
    {
      id: 8,
      name: "city",
      field: "input",
      width: 100,
      type: "text",
      errMessage: "Please enter your city",
      label: "City",
      required: true,
    },
    {
      id: 9,
      name: "postcode",
      field: "input",
      type: "text",
      width: 100,
      message:
        "This is the ZIP /Postcode of the billing address at which your LoungeKey eligible payment card is registered.",
      errMessage: "Please enter your postcode",
      label: "Zip / Postcode",
      required: true,
    },
  ];

  return (
    <div className="App">
      <h1>Create your account Here!!</h1>
      <form onSubmit={handleSubmit}>
        <h1>Verify</h1>
        <div className="form-container">
          {inputs.map((input) =>
            input.field === "select" ? (
              <FormSelect
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
              />
            ) : (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
                required={true}
              />
            )
          )}
        </div>
        <button>Verify</button>
      </form>
    </div>
  );
}

export default App;
