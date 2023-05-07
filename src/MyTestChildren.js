import React from "react";

const MyTestChildren = ({ title, children }) => {
  return (
    <div>
      <h2>Movie title</h2>
      <p>{title}</p>
      <h2>Summary</h2>
      {children}
    </div>
  );
};

export default MyTestChildren;
