import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeOut, reset }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (reset) {
      setTimeLeft(duration); // Timer ko naye question ke liye reset kare
    }
  }, [reset, duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeOut();
      return; // Time up hone par function exit karein
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup timer on unmount
  }, [timeLeft, onTimeOut]);

  return (
    <div className="timer">
      Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;
