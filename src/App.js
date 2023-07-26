import React, { useState } from 'react';
import './App.css';



const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  const Updatedtime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(Updatedtime, 1000);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Digital Clock</h1>
          <p>{ctime}</p>
        </header>
      </div>
    </>
  );
};

export default App;