import React, { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("initial value");
  const onSubmit = () => {
    console.log("value of input field 1: ");
    console.log("value of input field 2: ", val);
  };
  return (
    <div>
      <h1>Example of Controlled components in React</h1>

      {/* not a controlled component (input field) */}
      <h2>Uncontrolled component/Controlled by DOM by default</h2>
      <input />

      <h2>
        Controlled component/Controlled by us/React by using val and onChange
        handler
      </h2>
      <input
        value={val}
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
        }}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Example;
