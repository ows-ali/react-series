import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ mydata }) => {
  return (
    <div>
      <h1>Child</h1>

      <GrandChild data={mydata} />
    </div>
  );
};

export default Child;
