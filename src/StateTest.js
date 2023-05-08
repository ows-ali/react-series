import { useState } from "react";
import ChildTest from "./ChildTest";

const StateTest = () => {
  const [data, setData] = useState(0);
  const [str, setStr] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [arr, setArr] = useState(["item1", "item2"]);
  const [obj, setObj] = useState({ counter: 0 });
  // useState basically does two things
  // data = 0 (the initial value)
  // setData(14) is same as data = 14
  console.log("i am rendering");
  return (
    <div>
      <h1>useState hook</h1>
      StateTest
      <h2>useState with number</h2>
      <p>Our data is</p>
      <button
        onClick={() => {
          setData(data + 1);
          console.log("data is: ", data);
        }}
      >
        +
      </button>
      {data}
      <button
        onClick={() => {
          setData(data - 1);
        }}
      >
        -
      </button>
      <h2>use state with string</h2>
      <p>My str is: {str}</p>
      <button
        onClick={() => {
          setStr("Hahah");
        }}
      >
        Set string to Hahah
      </button>
      <h2>useState with boolean</h2>
      <p>isOpen is {isOpen === true ? "Opened" : "Closed"}</p>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle isOpen
      </button>
      <h2>useState with array</h2>
      <p>Items in array are:</p>
      {arr}
      <h2>useState with object</h2>
      {obj.counter}
      <button
        onClick={() => {
          setObj({ counter: obj.counter + 1 });
        }}
      >
        Change counter inside object
      </button>
      <button
        onClick={() => {
          setObj((myOldObj) => {
            return {
              counter: myOldObj.counter + 1,
            };
          });
        }}
      >
        Change counter inside object 2nd method (preferred)
      </button>
      {/* <ChildTest /> */}
    </div>
  );
};

export default StateTest;
