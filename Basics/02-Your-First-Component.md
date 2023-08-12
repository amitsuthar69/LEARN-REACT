## What is a component in react ??

### In React, components are reusable pieces of code just as a function, so your code doesn't looks messy.

```js
// Inside your script.js

// Your first Component:
function myComponent() {
  return <h2>Look he's learning React XD</h2>;
}

ReactDOM.render(
  myComponent(), // calling the function
  document.getElementById("root") // assuming that you've a div with id root.
);
```

### How a component is different from a function ?

```js
// What a function looks like :

function temporaryName() {
  // camelCase
  return <p>A Component is 90% function</p>;
}

// Giving a function call in .render() method
ReactDOM.render(temporaryName(), document.getElementById("root"));

/* Looks same as a component right ? 
But the component differs by the rest 10% which is :
1. PascalCase :- rename temporaryName to TemporaryName
2. Wrapping the function in </> :- instead of temporaryName, use <TemporaryName />
*/
```

## An actual Component :

### What about a NavBar? Let's Make a NavBar Component

```js
function NavBar() {
  return (
    <nav>
      <h2>LearnReact</h2>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

ReactDOM.render(<NavBar />, document.getElementById("root"));
```

**Note: If you want to render multiple components, make sure ou wrap them all inside a parent element, wWat do i mean with that? See below**

```js
ReactDOM.render(
  <div>
    <MyComponent1 />
    <MyComponent2 />
  </div>,
  document.getElementById("root")
);
```
