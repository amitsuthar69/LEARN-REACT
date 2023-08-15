## Prerequsite: JavaScript Array map() Method

- ### The Javascript map() method creates an array by calling a specific function on each element present in the parent array.
- ### It is a non-mutating method. Generally, the map() method is used to iterate over an array and call function on every element of the array.

---

```js
array.map(callbackFn, thisArg);
// callbackFn is a call back function which allows us to manipulate the array elements.
// thisArg is not used mostly.
```

### Here are some examples :

```js
// Input array
let arr = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let newArr = arr.map(function (val) {
  return val * val;
});

// Display output
console.log(newArr);
```

```
Returns squared values in a new array.
[4, 25, 36, 9, 64, 81]
```

---

```js
const names = ["alice", "bob", "charlie", "danielle"];
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});
```

```
["Alice", "Bob", "Charlie", "Danielle"]
```
