import React, { useEffect, useState } from "react";

const EmptyDepArr = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("i have an empty dependency array");
  }, []);
  // empty dependency array means the useEffect will only run once on first time mounting of the component
  return (
    <div>
      EmptyDepArr
      <p>Data is: {data}</p>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Change data
      </button>
    </div>
  );
};

export default EmptyDepArr;
