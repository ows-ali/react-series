import React, { useState } from "react";

const TestOnChange = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <h1>onChange handler</h1>
      <input
        value={val}
        placeholder="enter some text"
        onChange={(e) => {
          setVal(e.target.value);
          console.log("i am changing");
          console.log(e.target.value);
          console.log(e.target.placeholder);
        }}
      />
    </div>
  );
};

export default TestOnChange;
