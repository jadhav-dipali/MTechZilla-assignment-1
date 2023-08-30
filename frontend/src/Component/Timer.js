import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import "../Style/timer.css"

export default function Timer() {
  const navigate = useNavigate()
  const [time, setTime] = useState(25 * 60); 
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

const token = localStorage.getItem("user-token");

  useEffect(() => {
    if(token){
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0 && isActive && !isBreak) {
      setIsBreak(true);
      setTime(5 * 60); 
    } else if (time === 0 && isActive && isBreak) {
      setIsBreak(false);
      setTime(25 * 60); 
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };

  }else{
    navigate("/")
  }
  }, [isActive, time, isBreak]);

  const Pause = () => {
    setIsActive(!isActive);
  };

  const Reset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(25 * 60);
  };

  const timeDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='timer-holder-container'>
    <div className="timer-app">
      <h1 className='heading'>{isBreak ? 'Break Timer' : 'Timer'}</h1>
      <div className="timer">{timeDuration(time)}</div>
      <div className="controls">
        <button onClick={Pause} className='satrt-pause'>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={Reset} className='reset-btn'>Reset</button>
      </div>
    </div>
    </div>
  );
}


