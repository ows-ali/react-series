## useEffect

Runs every time after rendering of the component (when a setState is called)
useEffect with no second argument

```
const [data, setData] = useState(0);

useEffect(() => {
console.log("the value of data is: ", data);
});
...
<button onClick={() => {
    setData(data + 1);
}}>Click</button>
```

With second argument (useEffect will run only when the variables in dependency array changes )

```
const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);
  useEffect(() => {
    console.log("the value of data is: ", data);
  }, [data]);
```

With empty second arg [], empty dependency array (will only run after first render)

```
useEffect(() => {
    console.log("i have an empty dependency array");
  }, []);
```

Returning from useEffect (like clearing setInterval, or clearing subscribed events)

```
useEffect(() => {
    const myInterval = setInterval(() => {
      console.log("i am mounted on the screen");
    }, 2000);

    return () => {
      console.log("component is unmounting/getting removed from the screen");
      clearInterval(myInterval);
    };
  });
```

There can be multiple useStates, and useEffects in a component
