## REACT 18

### React 18 is a major release of the React JavaScript library that introduces a number of new features and improvements.

- **Concurrent rendering.** React 18 now supports concurrent rendering, which means that it can render multiple components at the same time.

- **Suspense improvements.** React 18 has made a number of improvements to the Suspense API, which allows you to delay the rendering of components until they are ready.

- **Automatic batching.** React 18 now automatically batches together small, time-consuming operations, such as fetching data from the server.

- **Server Components.** React 18 introduces a new feature called Server Components, which allows you to render React components on the server.

---

## Also talking about the render() method which we were using till now:

- **The `render()` method has been deprecated.**

- **Instead, you should use the `createRoot()` method.**

- **The `createRoot()` method takes a root element as a parameter and creates a React root.**

- **You can then use the root to render React components.**

### Much Theory for now, let's see the changes in code :

```js
// Before
import ReactDOM from "react-dom";
ReactDOM.render(<AnyComponent />, document.getElementById("root"));

// After
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AnyComponent />);
```

## The new `createRoot()` method

```js
const root =
ReactDOM.createRoot(root element).render(Component)
```

## Try converting this below code from React17 to React18

```js
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <img width="50px" src="./react-logo.png" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
        <li>List 4</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Here's how it'll be done using createRoot()

```js
import React, { createRoot } from "react";
import ReactDOM from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = () => {
  // arrow function
  return (
    <div>
      <img width="50px" src="./react-logo.png" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
        <li>List 4</li>
      </ul>
    </div>
  );
};

root.render(<App />);
```
