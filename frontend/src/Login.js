// Login.js
import React from 'react';
import { Button, TextField, Link } from '@material-ui/core';
import { useState } from "react";
const Login = ({onToggle}) => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Formdata = ");
    try {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log("Formdata = ?",formData);

      const data = await response.json();

      if (response.ok) {
        // Login successful
        alert(data.message); // You can replace this with your desired logic
      } else {
        // Login failed
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
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
      <TextField name="usernameOrEmail" label="Username or Email" variant="outlined" margin="normal" required onChange={handleChange} /><br></br>
      <TextField name="password" label="Password" type="password" variant="outlined" margin="normal" required onChange={handleChange} /><br></br>
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button><br></br>
      <Link onClick={onToggle} component="button" variant="body2">
        Don't have an account? Sign Up
      </Link>
    </form>
  );
};

export default Login;