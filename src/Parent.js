import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <Child mydata={"i am a string defined in parent component"} />
    </div>
  );
};

export default Parent;
