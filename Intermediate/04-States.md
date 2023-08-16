## React States

### States in react refers to the values that are managed by the Components, similar to variables declared inside a function. Anytime we have changing values that will be saved or displayed, we'll likely be using States.

In the below vanilla javascript greet function example, you can compare the `name` parameter to a "prop", (which is not supposed to be changed by the function) and on the other hand the `timeOfDay` variable to be a "state", (which is then manipulated by the function.)

```js
function greeting(name) {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;
  if (hours >= 4 && hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greeting("Amit"));
```

## Let's Summarize :

1.  **How would you describe the concept of "state"?**

    A way for React to remember saved values from within a component.
    This is similar to declaring variables from within a component,
    with a few added bonuses (which we'll get to later)

---

2.  **When would you want to use props instead of state?**

    Anytime you want to pass data into a component so that
    component can determine what will get displayed on the
    screen.

---

3.  **When would you want to use state instead of props?**

    Anytime you want a component to maintain some values from within the component. (And "remember" those values even
    when React re-renders the component).

---

4.  **What does "immutable" mean? Are props immutable? Is state immutable?**

    Unchanging. Props are meant to be immutable. State is mutable.
