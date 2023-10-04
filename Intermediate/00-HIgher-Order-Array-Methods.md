## Higher Order Array Methods

1. `map` : It is used for transforming each element of an array using a provided function, creating a new array with the results.

```js
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers);
// Output: [1, 4, 9, 16]
```

---

2. `filter` : It creates a new array with elements that pass a given test implemented by the provided function.

```js
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
// Output: [2, 4]
```

---

3. `reduce` : It applies a function against an accumulator and each element in the array to reduce it to a single value.

   The first argument is a function & the second argument is the initial value.

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 10
```

The `0` at the end is the initial value for the `accumulator`. It means that the `reduce` operation starts with an initial value of `0` for the `accumulator`, and then it iterates over each element `current` in the `numbers` array, adding it to the `accumulator`.

---

4. `forEach` : It executes a provided function once for each array element.

```js
const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// apple
// banana
// orange
```

---

5. `flat` : It creates a new array with all sub-array elements concatenated recursively up to the specified depth.

```js
const nestedArray = [1, [2, [3, 4], 5]];

const flatArray = nestedArray.flat(2);

console.log(flatArray);
// Output: [1, 2, 3, 4, 5]
```

The `2` here indicates that the flattening should be done up to a depth level of 2. It means that if there are nested arrays within nested arrays, the flat method will recursively flatten the array structure up to a maximum depth of 2.

**Let's break down an example:**

    Depth 0:
        [1, [2, [3, 4], 5]] (no change)

    Depth 1:
        [1, 2, [3, 4], 5] (flattened one level)

    Depth 2:
        [1, 2, 3, 4, 5] (flattened one more level)

---

6. `flatMap` : It first maps each element using a mapping function, then flattens the result into a new array.

```js
const numbers = [1, 2, 3];

const doubledAndFlattened = numbers.flatMap((num) => [num * 2, num * 3]);

console.log(doubledAndFlattened);
// Output: [2, 3, 4, 6, 6, 9]
```

---

7. `some` : It tests whether at least one element in the array passes the test implemented by the provided function.

```js
const numbers = [1, 2, 3, 4];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);

console.log(hasEvenNumber); // Output: true
```

---

8. `every` : It tests whether all elements in the array pass the test implemented by the provided function.

```js
const numbers = [2, 4, 6, 8];

const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven); // Output: true
```

---
