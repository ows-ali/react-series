import React from "react";

const SecondTest = () => {
  const handleClick = () => {
    console.log("logging");
  };
  return (
    <div>
      <h1>Event handler as external function instead of inline funtion</h1>
      {/* we can pass reference of a funciton */}
      {/* Mistake: handleClick() */}
      <button onClick={handleClick}>Click me 2</button>
    </div>
  );
};

export default SecondTest;
