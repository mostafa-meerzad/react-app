import React, { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(110);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerId, setTimerId] = useState(Infinity);

  const [sessionLen, setSessionLen] = useState(0);
  const [breakLen, setBreakLen] = useState(0);

  const [timerType, setTimerType] = useState("session");

  const handleTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      setTimerId(
        setInterval(() => {
          console.log("setInterval called");

          if (timerType === "break") {
            setTimer(breakLen);
            if (timer > 0) {
              setTimer((prevState) => prevState - 1);
            } else {
              setTimerType("session");
            }
          } else {
            setTimer(sessionLen);
            if (timer > 0) {
              setTimer((prevState) => prevState - 1);
            } else {
              setTimerType("break");
            }
          }
        }, 200)
      );
      // if (timerType === "session") {
      //   setTimer(sessionLen)
      //   setTimerId(
      //     setInterval(() => {
      //       if(timer > 0 ){
      //         setTimer((prevState) => prevState - 1);
      //       } else{
      //         setTimerType("break");
      //       }
      //     }, 500)
      //   );
      // } else{
      //   setTimer(breakLen)
      //   setTimerId(
      //     setInterval(() => {
      //       if(timer > 0 ){
      //         setTimer((prevState) => prevState - 1);
      //       } else{
      //         setTimerType("session");
      //       }
      //     }, 500)
      //   )
      // }
    } else {
      setIsTimerRunning(false);
      clearInterval(timerId);
    }
  };
  return (
    <div>
      <h3>seconds {timer % 60}</h3>
      <h3>minutes {Math.floor(timer / 60)}</h3>
      <br />
      <h4>timer type: {timerType}</h4>
      <br />
      <button
        onClick={() => {
          setSessionLen((prevState) => prevState + 60);
        }}
      >
        session length +{" "}
      </button>
      <button
        onClick={() => {
          setSessionLen((prevState) => prevState - 60);
        }}
      >
        session length -{" "}
      </button>
      <br />
      <h4>session length {sessionLen}</h4>
      <h4>break length {breakLen}</h4>

      <br />
      <br />
      <button
        onClick={() => {
          setBreakLen((prevState) => prevState + 60);
        }}
      >
        break length +{" "}
      </button>
      <button
        onClick={() => {
          setBreakLen((prevState) => prevState + 60);
        }}
      >
        break length -{" "}
      </button>
      <button onClick={handleTimer}>start</button>
    </div>
  );
}

export default Timer;
