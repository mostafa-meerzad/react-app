import React from "react";

function Button({ className }) {
  function handleClick() {
    console.log("Yay you clicked me");
  }
  return (
    <button className={className} onClick={handleClick}>
      Click Me
    </button>
  );
}

export default Button;
