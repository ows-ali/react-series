## useState

It rerenders the component
It also rerenders its child components

<b>useState with number (making an increment/decrement counter)</b>

```
const [data, setData] = useState(0);

<button
onClick={() => {
    setData(data + 1);
}}
>
Add
</button>

```

<b>useState with string</b>
<b>useState with bool (toggle true/false)</b>

```
const [data, setData] = useState(0);

<button
onClick={() => {
    setIsOpen(!isOpen);
}}
>
Toggle isOpen
</button>
```

useState with array
useState with obj (using function in setState())

```
const [obj, setObj] = useState({ counter: 0 });
...
<button
onClick={() => {
    setObj({ counter: obj.counter + 1 });
}}
>
Change counter inside object
</button>
```

or

```
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
```

Problem with using console.log just after setState()
