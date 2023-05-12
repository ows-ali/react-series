import React, { useState } from "react";
import TestUseEffect from "./TestUseEffect";
import DependencyArr from "./DependencyArr";
import EmptyDepArr from "./EmptyDepArr";
import ReturnExample from "./ReturnExample";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      App
      {/* <TestUseEffect /> */}
      {/* <DependencyArr /> */}
      {/* <EmptyDepArr /> */}
      {show === true ? <ReturnExample /> : null}
      {/* {show === true && <ReturnExample />  } */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle the component
      </button>
    </div>
  );
};

export default App;
