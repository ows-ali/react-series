import React from "react";
import PersonComponent from "./PersonComponent";
import TeacherComponent from "./TeacherComponent";
import DefaultArgComp from "./DefaultArgComp";
import MyTestChildren from "./MyTestChildren";
import FunctionProps from "./FunctionProps";

const teacher = {
  name: "Name Obj",
  subject: "Javascript",
};
const App = () => {
  return (
    <div>
      {/* <PersonComponent name="Anthony" city="SF" />
      <PersonComponent name="Alex" city="NY" />
      <TeacherComponent name="Harry Potter" subject="Magic" />
      <DefaultArgComp title="Software Engineer" />
      <DefaultArgComp />
      <TeacherComponent {...teacher} />
       */}
      {/* <MyTestChildren title={"Superman"}>
        <h3>I love Superman</h3>
        <p>Superman movie was great</p>
      </MyTestChildren> */}
      <FunctionProps />
    </div>
  );
};

export default App;
