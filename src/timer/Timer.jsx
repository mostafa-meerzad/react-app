import React, { useRef, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(60);
  let timerRef = useRef(60);
  let timerTypeRef = useRef("session");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerId, setTimerId] = useState(Infinity);

  const [sessionLen, setSessionLen] = useState(60);
  const [breakLen, setBreakLen] = useState(30);

  function handleTimer() {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      setTimerId(
        setInterval(() => {
          if (timerRef.current === 0 && timerTypeRef.current === "session") {
            console.log(
              "timerType form if block before update ",
              timerTypeRef.current
            );
            timerRef.current = breakLen;
            timerTypeRef.current = "break";
            console.log(
              "timerType form if block after update ",
              timerTypeRef.current
            );
          } else if (
            timerRef.current === 0 &&
            timerTypeRef.current === "break"
          ) {
            console.log(
              "timerType form else if block before update ",
              timerTypeRef.current
            );

            timerRef.current = sessionLen;
            timerTypeRef.current = "session";
            console.log(
              "timerType form else if block after update ",
              timerTypeRef.current
            );
          } else {
            timerRef.current = timerRef.current - 1;
            setTimer(timerRef.current);
            console.log("timer value ", timerRef.current);
          }
        }, 200)
      );
    } else {
      setIsTimerRunning(false);
      clearInterval(timerId);
    }
  }

  function handleSessionLenIncrement() {
    if (!isTimerRunning) {
      if (timerTypeRef.current === "session") {
        setSessionLen((prevState) => prevState + 60);
        timerRef.current += 60;
        setTimer(timerRef.current);
      }
    }
  }

  function handleSessionLenDecrement() {
    if (!isTimerRunning) {
      if (timerTypeRef.current === "session") {
        setSessionLen((prevState) => prevState - 60);
        timerRef.current -= 60;
        setTimer(timerRef.current);
      }
    }
  }

  function handleBreakLenIncrement() {
    if (!isTimerRunning) {
      if (timerTypeRef.current === "break") {
        setBreakLen((prevState) => prevState + 60);
        timerRef.current += 60;
        setTimer(timerRef.current);
      }
    }
  }

  function handleBreakLenDecrement() {
    if (!isTimerRunning) {
      if (timerTypeRef.current === "break") {
        setBreakLen((prevState) => prevState - 60);
        timerRef.current -= 60;
        setTimer(timerRef.current);
      }
    }
  }

  return (
    <div>
      <h3>seconds {timer % 60}</h3>
      <h3>minutes {Math.floor(timer / 60)}</h3>
      {/* <h3 key={timerRef.current}>seconds {timerRef.current % 60}</h3>
      <h3>minutes {Math.floor(timerRef.current / 60)}</h3> */}
      <br />
      {/* <h4>timer type: {timerType}</h4> */}
      <h4>timer type ref: {timerTypeRef.current}</h4>
      <br />
      <button onClick={handleSessionLenIncrement}>session length +</button>
      <button onClick={handleSessionLenDecrement}>session length -</button>
      <br />
      <h4>session length {sessionLen}</h4>
      <h4>break length {breakLen}</h4>

      <br />
      <br />
      <button onClick={handleBreakLenIncrement}>break length +</button>
      <button onClick={handleBreakLenDecrement}>break length - </button>
      <button onClick={handleTimer}>start</button>
    </div>
  );
}

export default Timer;
