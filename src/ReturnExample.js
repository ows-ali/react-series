import React, { useEffect } from "react";

const ReturnExample = () => {
  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log("i am mounted on the screen");
    }, 2000);

    return () => {
      console.log("component is unmounting/getting removed from the screen");
      clearInterval(myInterval);
    };
  });
  return <div>ReturnExample</div>;
};

export default ReturnExample;
