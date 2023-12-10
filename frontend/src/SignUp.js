import React from 'react';
import { Button, TextField, Link } from '@material-ui/core';
import { useState } from "react";
const SignUp = ({onToggle}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Use formData to send a request to your server
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // User registered successfully
        // Optionally, you can redirect the user or perform other actions.
      } else {
        alert(data.message); // Display the error message
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    
    <form onSubmit={handleSubmit}>
      <TextField name="username" label="Username" variant="outlined" margin="normal" required onChange={handleChange} /><br></br>
      <TextField name="email" label="Email" type="email" variant="outlined" margin="normal" required onChange={handleChange} /><br></br>
      <TextField name="password" label="Password" type="password" variant="outlined" margin="normal" required onChange={handleChange}/><br></br>
      <TextField name="confirmpassword" label="Confirm Password" type="password" variant="outlined" margin="normal" required onChange={handleChange} /><br></br>
      <Button id="sign-up-btn" type="submit" variant="contained" color="primary">
        Sign Up   
      </Button><br></br>
      <Link onClick={onToggle} component="button" variant="body2">
        Already have an account? Log In
      </Link>
    </form>
  );
};

export default SignUp;
