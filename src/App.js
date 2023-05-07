import ClassComponentExample from "./ClassComponentExample";
import MySecondComponent from "./MySecondComponent";
import "./App.css";
const myClassVar = "myclass";
const myStyle = { color: "purple", fontSize: "26px", backgroundColor: "pink" };
const App = () => {
  return (
    <>
      <div>
        <h1>I am a heading</h1>
        <p>I am a paragraph</p>
        <span className={myClassVar}>asdfadsfasdf</span>
        <br></br>
        <b
          style={{ color: "purple", fontSize: "26px", backgroundColor: "pink" }}
        >
          I am bold tag
        </b>
        <br></br>
        <b style={myStyle}>I am a new b tag</b>
      </div>
      <div>
        <p>I am another paragaph</p>
      </div>
      <MySecondComponent />
      <MySecondComponent />
      <MySecondComponent />
      <ClassComponentExample></ClassComponentExample>

      <ClassComponentExample />
    </>
  );
};

export default App;
