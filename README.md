# Event handling in React

## Some common events in React

- onClick (we saw it before)
- onChange
- onSubmit

### Event handlers

- event vs event handler

- braces i.e. {} are optional if we have only one line in function body

```
<button onClick={()=>console.log('clicked')}>Click me</button>
<!-- is same as -->
<button onClick={()=>{console.log('clicked')}}>Click me</button>

```

- ending bracket is usually not required (depends if passing function reference or adding function in inline function)

```
<!-- this is correct -->
<button onClick={onClickHandler}>I am correct</button>

<!-- this is not (we dont invoke the function) -->
<button onClick={onClickHandler()}>I am wrong</button>

<!-- but, this is ok as well, (since it is not invoking, function is inside a function body) -->
<button onClick={()=>onClickHandler()}>I am also correct</button>

```

- if we need to pass the arguments, then we have to write arrow function in event handler

```
const incrementCounter = (val) => {
        setCounter(counter+val)
}
...

<button onClick={ () => incrementCounter(2) }>Increment by two</button>

<button onClick={ () => incrementCounter(3) }>Increment by three</button>
```

- e is passed by default (like in case of onChange, onSubmit)
  Here is an example with onChange

```
const [val, setVal] = useState('')
...
<input
placeholder="Enter text here"
value={val}
onChange={ (e) => {
    // e.target points to the input field attrs
    setVal(e.target.value);
    console.log(e.target.value);
    console.log(e.target.placeholder); // Enter text here

}}>Increment by two</input>
```

Here is an example with onSubmit:

```

<form onSubmit={(e)=>{e.preventDefault(); handleSubmit()} }>
    <input value={name} onChange={(e)=>{setName(e.taget.value)}} placeholder="Enter name" />
    <button type='submit'>Submit</button>
</form>
```

<b>Common Problem:</b> (If using short form) do not invoke the function, just pass the reference (i.e write function name, do not write () at the end)
