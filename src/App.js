import React, { useState } from 'react';
import './index.css';



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
        <div className="clock-container">
          <div className="clock-title">Digital Clock</div>
          <div className="clock">{ctime}</div>
          <div className="footer">Time Zone: UTC+0</div>
        </div>
      </div>

    </>
  );
};

export default App;