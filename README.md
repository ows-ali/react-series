## controlled components in React

In React, we can control default input elements of HTML. Like what will be there value and how to change their value
We use controlled component, for accessing values like on submit, checking validation etc

```

<h2>Uncontrolled component/Controlled by DOM by default</h2>
<input />

<h2>
Controlled component/Controlled by us/React by using val and onChange
handler
</h2>
<input
value={val}
onChange={(e) => {
    console.log(e.target.value);
    setVal(e.target.value);
}}
/>
```
