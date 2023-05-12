## Props

- props to component are same as input to functions
- reusability advantage

```
<TeacherComponent name="Harry Potter" subject="Magic" />
const TeacherComponent = (props) => {
   const name = props.name;
   const subject = props.subject
   // or in short
   // const { name, subeject } = props
  return (
    <div>
      <h2>Teacher name</h2>
      <p>{name}</p>
      <h2>Subject</h2>
      <p>{subject}</p>
    </div>
  );
};

```

- Destructuring: direct, first line, right inside argument area
- passing obj items as props at a time

## Children Prop

It is a special prop

```
<MyTestChildren title={"Superman"}>
    <h3>I love Superman</h3>
    <p>Superman movie was great</p>
</MyTestChildren>
...
const MyTestChildren = ({ title, children }) => {
  return (
    <div>
      <h2>Movie title</h2>
      <p>{title}</p>
      <h2>Summary</h2>
      {children}
    </div>
  );
};

```

## Passing functions as props

```


const handleClick = () => {
console.log("clicked");
};
return (
<div>
    <ButtonComponent handleClickProp={handleClick} />
</div>
);

...

const ButtonComponent = (props) => {
  return (
    <div>
      <button onClick={props.handleClickProp}>Click me Component</button>
    </div>
  );
};

```

Similarly, we can pass functions as props as well, (there is a hook named useCallback() that you may need to use, which is required to avoid unnecessary rerendering of child component to improve performance, but more on useCallback later/separate video)
