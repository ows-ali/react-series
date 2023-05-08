import React, { useState } from "react";

const ChildTest = () => {
  const [testData, setTestData] = useState(0);

  console.log("rendering child component");
  return (
    <div>
      ChildTest
      <button
        onClick={() => {
          setTestData(testData + 1);
        }}
      >
        Increase testdata in child
      </button>
    </div>
  );
};

export default ChildTest;
