import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, setTime] = useState(time);
  setInterval(updateTime, 1000);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
