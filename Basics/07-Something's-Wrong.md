## Something is wrong with our Components!

### Whatever components we made so far were hard-coded and is a bad practice because then, we don't have any "Dynamicity", something what a component is meant to have.

---

### For better understanding, we can compare a component which is hard-coded (something we made so far) with a AddTwoNumbers() function below :

```js
function addTwoNumbers() {
  return 1 + 2;
}

// no matter how many times you call this function, it'll always return 1 + 2 = 3

// Versus the function below :
function addTwoNumbersAgain(a, b) {
  return a + b;
}

// this function returns dynamic values passed into the arguments.
```

## Let's see an Example :

#### Suppose you have a Card Component which have an Image, a title, a contact and an email.

Let's make a `Card.js` and an `App.js`

```js
// Inside Card.js
function Card() {
  return (
    <div className="contact-card">
      <img src="/images/image.png" />
      <h3>Amit Suthar</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}

export default Card;
```

```js
// Inside App.js

function App() {
  return (
    <Card
      img="/images/image.png"
      name="Amit Suthar"
      contact="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
    />
  );
}
```

### Well this doesn't have any changes discussed above! Even though we are using some of the JSX methods, it's still hard-coded in `Card.js` and acts as :

```js
// even though we pass parameters, we're still returning static hard-coded values.

function addTwoNumbers(a, b) {
  return 1 + 2;
}
```

---

### Also if you've noticed, we've passed props inside of the instance which doesn't have a relevent name, this is offered by JSX

#### Comparing it with HTML

```html
<link rel="" />

<!-- Here rel = "..." is an predefined HTML property which you can't manipulate-->
```

```js
<Card whatEverNameYouWant="some value" />

// Whereas in JSX, you can define names of props as per your need.
```

## THE SOLUTION

To solve this problem, `Props` (properties) comes into the picture. Let's learn about props at [Props (The Solution)](./08-Props-TheSolution.md).
