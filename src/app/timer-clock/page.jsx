"use client";
import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(60);
  const add = () => {
    setTimer((prev) => prev + 15);
  };
  const minuse = () => {
    setTimer(timer - 15);
  };

  const addTime = () => {
    setTimer((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const sec = timer % 60;
  const minut = Math.floor(timer / 60);
  console.log(sec, minut)

  const formatTime = (time) => {
    if (time < 9) {
      return `0${time}`;
    }
    return timer;
  };

  useEffect(() => {
    const myInterval = setInterval(addTime, 1000);
    return () => clearInterval(myInterval);
  }, []);

  return (
    <div>
      <p>timer:</p>
      <div>
        {formatTime(minut)} : {formatTime(sec)}
      </div>
      <button onClick={add}>add +15</button>
      <button onClick={minuse}>minuse -15</button>
    </div>
  );
};

export default Timer;
