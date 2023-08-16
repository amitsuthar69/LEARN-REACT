## Enent listners in React

### List of Event Listners in React:

1. Form Events :

```
onChange onInput onInvalid onReset onSubmit
```

2. Generic Events :

```
onError onLoad
```

3. Mouse events :

```
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

4. UI Events :

```
onScroll
```

5. Other Events :

```
onToggle
```

---

### Adding Events in React

```js
export default function App() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleOnMouseOver() {
    console.log("MouseOver");
  }

  return (
    <div className="container">
      <img
        src="https://picsum.photos/640/360"
        onMouseOver={handleOnMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

---

### Adding a new Element into the array, whenever the Add Item button is clicked.

```js
function App() {
  const thingsArray = ["Thing 1", "Thing 2"];
  const thingsElements = thingsArray.map((thing) => <p>{thing}</p>);

  function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`;
    thingsArray.push(newThingText);
    console.log(thingsArray);
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
```

#### Although we are updating array elements, it makes a new array every time the function is called, which is not a efficient. To overcome this, we'll use `useState`.
