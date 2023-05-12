## Prop drilling

How to do props drilling
Why not to do props drilling? What to do instead? (we will see later in Context and Redux part)
![props drilling](https://i.imgflip.com/7ksb6r.jpg)

<b>For example</b>
Data is passed from Parent component to GrandChild component using props drilling (where Child component is just acting as a middleware)

```
const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <Child mydata={"i am a string defined in parent component"} />
    </div>
  );
};

const Child = ({ mydata }) => {
  return (
    <div>
      <h1>Child</h1>

      <GrandChild data={mydata} />
    </div>
  );
};


const GrandChild = ({ data }) => {
  return (
    <div>
      <h1>GrandChild</h1>
      <p>{data}</p>
    </div>
  );
};

```
