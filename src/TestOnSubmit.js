import React from "react";

const TestOnSubmit = () => {
  return (
    <div>
      TestOnSubmit
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submittign");
        }}
      >
        <input />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestOnSubmit;
