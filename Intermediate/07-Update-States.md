## Update State values

**In the below example, we have an info state which is set to have an object with `name`, `age`, `isadult` and `iselegible`**

```js
const [info, setInfo] = React.useState({
    name: "Amit",
    age: "20"
    isadult: true
    iselegible: false
})
```

**But what if we want to update the `iselegible` to `true` when a handler function is called ?**

**Well it's easy, have a look to the below code :**

```js
const [info, setInfo] = React.useState({
    name: "Amit",
    age: "20"
    isadult: true
    iselegible: false
  })

  function handler(){
    setInfo(prevState => {
      return {
        ...prevState,
        iselegible: !prevState.iselegible
      }
    })
  }
```

## Let's Breakdown

1. **When we define the `handler` function and change the state of info, we define a call back function in order to use the previous values.**

```js
function handler() {
  setInfo(callbackFn());
}
```

2. **Then we define the parameter and name it as `prevState` just for the sake of understanding, you can name it anything.**

```js
(prevState) => {};
```

3. **Then we return an object from this call back function.**

```js
=> {
  return { anObject };
}
```

4. **This returned object has two values, `all the previous properties`, `updated property`.**

```js
return {
    ...prevState, !iselegible:prevState.iselegible
}
```

**The `...prevState` spread operator helps us to collect all the properties of previous (unupdated) object, so we don't need to mess up our code just like we did below.**

**Elaborating the spread operator in return statement :**

```js
setInfo((prevState) => {
  return {
    name: "Amit",
    age: "20"
    isadult: true
    iselegible: false,
    iselegible: !prevState.iselegible,
  };
});
```
