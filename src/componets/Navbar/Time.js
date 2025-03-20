import React, { useState, useEffect } from "react";
import "../Header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css";

function Time() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const showTime = date.getHours() + ':' + date.getMinutes() ;
      setTime(showTime);
    };

    const timerId = setInterval(updateTime, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <header>
        <div className="App">
          <h6 className="time" align="right">{time}</h6>
        </div>
      </header>
    </>
  );
}

export default Time;
