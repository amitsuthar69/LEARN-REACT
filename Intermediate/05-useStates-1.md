## React useState

React provides us the `useState()` hook to deal with states.

```js
import React from "react";

export default function App() {
  // using useState() hook.
  const result = React.useState();
  console.log(result);
}
```

Output for `console.log(result)` :

```js
[undefined, f()];

// it gives us an array, undefined is the current value/state of the result variable and f() is a function to update the value/state.
```

---

```js
export default function App() {
  // passing a string inside useState to see what comes out
  const result = React.useState("Hello");
  console.log(result);

  // to access the state array elements in DOM
  return <div>{result[0]}</div>;
}
```

```js
["Hello", f()];
```

But using `{result[0]}` to access the state elements is not the correct way to use States. So to overcome this, we can use **array destructuring**!

---

### Destructuring the useState:

#### As we know that the variable holding `React.useState()` returns an array, so we can destructure the array at the same time we declare it in a variable!

```js
// instead of doing this:
const result = React.useState("Hello");
```

```js
// we can do this:
const [result, function] = React.useState("Hello")
```

So, instead of getting back an array, we get the value of each item in array. Now if we `console.log(result)`, we get `Hello` as an output instead of `["Hello", f()]`.

```js
// example code :

import React from "react";

export default function App() {
  const [isImportant, func] = React.useState("Yes");

  return (
    <div>
      <h1>Is state important to know?</h1>
      <p>{isImportant}</p>
    </div>
  );
}
```

---

We explicitly assign the current state to "Yes". But then, we can't change the state of `isImportant` to "No" by doing, `isImportant = "No"`.

So how we can change the state from "Yes" to "No" ?

Well Here's where the `function` helps us!

1. **So to change the state, we must first name the function with `set` prefix. (it's just a naming convention)**

```js
const [state, setState] = React.useState("A State");
```

2. **After that, we can use the `setState` function directly or inside a handler function to change the state.**

```js
function onClick() {
  setState("Updated State");
}
```

---

### An updated version of App Component from above:

```js
export default function App() {
  const [isImportant, setIsImportant] = React.useState("Yes");

  function handleClick() {
    setIsImportant("No"); // updating the state
  }

  return (
    <div>
      <h1>Is state important to know?</h1>
      <div onClick={handleClick}>
        <p>{isImportant}</p>
      </div>
    </div>
  );
}
```

---

## Counter App with useState

### Let's try making a counter app which can increment and decrement count values.

```js
// Note: this is only the main component of counter app.

import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={subtract}>–</button>
      <button onClick={add}>+</button>
    </div>
  );
}
```

---

**This is certainly the simplest but not yet appropriate way to change states. There is still a better way which we'll learn further.**
