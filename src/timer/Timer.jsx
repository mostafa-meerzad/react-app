import React, {useState} from 'react'

function Timer() {
// console.log(1.4.toFixed(1));
  const [timer, setTimer] = useState(110)

  const [sessionLen, setSessionLen] = useState(0)
  const [breakLen, setBreakLen] = useState(0)


  const handleTimer = () => {
    console.log("timer called");
  }
  return (
    <div>
      <h3>seconds {timer % 60}</h3>
      <h3>minutes {Math.floor(timer / 60)}</h3>
      <br />
      <br />
      <button onClick={() => {
        setSessionLen(prevState=>prevState + 1)
      }}>session length + </button>
      <button onClick={() => {
        setSessionLen(prevState=>prevState - 1)
      }}>session length - </button>
      <br />
      <h4>session length {sessionLen}</h4>
      <h4>break length {breakLen}</h4>

      <br />
      <br />
      <button onClick={() => {
        setBreakLen(prevState=>prevState + 1)
      }}>break length + </button>
      <button onClick={() => {
        setBreakLen(prevState=>prevState + 1)
      }}>break length - </button>
       <button onClick={handleTimer}>start</button>
    </div>

  )
}

export default Timer