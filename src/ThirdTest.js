import React, { useState } from "react";

const ThirdTest = () => {
  const [data, setData] = useState(0);
  const addCounter = (val) => {
    console.log("logging: ", val);
    setData(val);
  };
  return (
    <div>
      Passing value to event handler
      {/* Wrong */}
      {/* <button onClick={addCounter(5)}>I am wrong</button> */}
      {/* correct */}
      <p>{data}</p>
      <button onClick={() => addCounter(data + 2)}>Add 2</button>
      <button onClick={() => addCounter(data + 3)}>Add 3</button>
    </div>
  );
};

export default ThirdTest;
