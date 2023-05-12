import React, { useEffect, useState } from "react";

const TestUseEffect = () => {
  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);
  useEffect(() => {
    console.log("the value of data is: ", data);
  });
  return (
    <div>
      TestUseEffect
      <p>Data is: {data}</p>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Click
      </button>
      <p>Data2 is: {data2}</p>
      <button
        onClick={() => {
          setData2(data2 + 1);
        }}
      >
        Click2
      </button>
    </div>
  );
};

export default TestUseEffect;
