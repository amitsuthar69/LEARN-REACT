## A Simple Zustand Store

**1. install zustand :**

```shell
npm install zustand
```

---

**2. create a store :**

In zustand, a store is a is a centralized location for managing the state of your React application.

It is a plain JavaScript object that contains the state variables and the functions that can be used to manipulate the state.

```ts
import { create } from "zustand";

interface State {
  count: number;
  increment: () => void;
}

const useStore = create<State>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

**Breakdown :**

In this code, `create( ()=>({...}) )` is a function from zustand library which takes in a callback function that implicitely returns an object, this returned object contains the state variable `count: 0` and a function `increment: () => set( ()=>({...}) )` which calls the `set` function to manipulte the state.
The `set` function again takes a callback function which returns an object containing the new state values.

**The above code is equivalent to :**

```js
const useStore = create((set) => {
  const count = 0;

  function increment() {
    set({ count: count + 1 });
  }

  return { count, increment };
});
```

---

**3. use the store in your component :**

```tsx
import React from "react";
import useStore from "./store";

const Counter = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

The above component uses the `useStore` hook to select the count state variable from the store and assign it to the local `count` variable.

Here, `count` and `increment` holds the selector function. **(A selector funcion is a callback function which selects a state specifically if being called inside `useStore` function)**.

We then use the `useStore` hook to get a reference to the `increment` function and update the `count` state variable.

---

