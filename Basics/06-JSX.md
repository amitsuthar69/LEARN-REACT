## What is JSX?

- JSX stands for JavaScript XML.

- JSX allows us to write HTML in React, which we were doing till now.

- JSX makes it easier to write and add HTML in React.

## JSX vs No JSX

```js
// with JSX
const element = <h1>This is a JSX Heading</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

```js
// This is NO JSX
const element = React.createElement("h1", {}, "This is NO JSX");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

### With JSX you can write expressions inside curly braces { }.

### The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.

```js
// Example:

function App(){
    return (
        const firstName = Amit
        const lastName = Suthar

        <h1>Hello {firstName} {lastName}! Good Morning</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
```
