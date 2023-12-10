import logo from './logo.svg';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import React, { useState } from 'react';
import imageSrc from './C.jpg';
const App = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleToggle = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div id="centre">
      <img src={imageSrc} width={80} height={80}/>
      {isLoginMode ? (
        <Login onToggle={handleToggle} />
      ) : (
        <SignUp onToggle={handleToggle} />
      )}
    </div>
  );
};


export default App;
