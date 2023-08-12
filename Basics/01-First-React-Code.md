## Let's start writing React in javascript file itself

- Make `index.html` and `script.js`

```html
<!-- Inside your index.html -->
<html>
  <head>
    <!-- ADD THESE CDN AND BABEL LINKS TO USE REACT HERE -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="script.js" type="text/babel"></script>
  </body>
</html>
```

- Let's add some react in your `script.js`

```js
// Inside your script.js we'll use ReactDOM.Render() to display content on screen.

// ReactDOM.render() takes two arguments, (what to display, where to display)

ReactDOM.render(<h1>Hello React!</h1>, document.getElementById("root"));

/*  
    verves how it was done in Vanilla Javascript:

    const h1 = document.createElement("h1")
    h1.textContent = "Hello React!"
    document.getElementById("root").append(h1) 
*/
```

## Here's what you see on output

<img src="../Assets/Hello React.png" />

## Try it yourself

- Try rendering a unordered list with two list items:

```js
ReactDOM.render(
  <ul>
    <li>Thing 1</li>
    <li>Thing 2</li>
  </ul>,
  document.getElementById("root")
);
```
