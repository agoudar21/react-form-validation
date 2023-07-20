import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  const [values,setValues] = useState({
    username:"",
    email:"",
    fullname:"",
    password:"",
    confirmPassword:""
  })
  // const usernameRef = useRef()
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errormessage: "Username should be 4-16 characters and shouldn't include any special character!",
      placeholder: "User Name",
      label: "Username",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errormessage: "It should be valid email address",
      placeholder: "abc@gmail.com",
      label: "E-mail",
      required: true
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      errormessage: "Enter valid name",
      placeholder: "Enter your Fullname",
      label: "Full Name",
      pattern: "^[A-Za-z ]*",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      errormessage: "Password should be 6-12 characters and it should include at least 1 letter, 1 number and 1 special character!",
      placeholder: "password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      errormessage: "Passwords dont match",
      placeholder: "Confirm password",
      pattern: values.password,
      label: "Confirm password",
      required: true
    },
  ]
  const handleSubmit=(e)=>{
    e.preventDefault();
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }
  
  const onChange =(e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register here!!</h1>
        {
          inputs.map(input => 
            <FormInput 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={onChange}
            />
          )
        }
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
