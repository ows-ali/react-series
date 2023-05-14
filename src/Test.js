import React from "react";

const Test = () => {
  return (
    <div>
      <h1>event handler as Inline function </h1>
      {/* onclick is an event */}
      {/* ()=>{} is an event handler (event is just a function) */}
      <button
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Test;
