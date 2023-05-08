## Using map

mapping over a list of items
You need to use a key, otherwise React will complain. React uses key in diffing algorithm to differentiate when an item is updated and update that specific element, otherwise, if not provided, all items inside map will be updated
Should be within brackets
Common problem: must use return
Same Common problem with return: must not start in next line, at least put bracket
Khichdi: jsx within jsx

```

const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "mango" },
  { id: 3, name: "orange" },
];

{fruits.map((fruit, index) => {
    return (
    <li key={fruit.id}>
        <span>Fruit # {fruit.id}: </span>
        <span>{fruit.name}</span>
    </li>
    );
})}
```
