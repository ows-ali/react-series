import React from "react";

const TeacherComponent = ({ name, subject }) => {
  //   const { name, subject } = props;
  return (
    <div>
      <h2>Teacher name</h2>
      <p>{name}</p>
      <h2>Subject</h2>
      <p>{subject}</p>
    </div>
  );
};

export default TeacherComponent;
