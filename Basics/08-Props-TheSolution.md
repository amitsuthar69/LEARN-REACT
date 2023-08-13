## Props

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.

**I recommend you to continue ahead only if you've covered** [Something's-Wrong](./07-Something's-Wrong.md).

```js
// the Card from our previous lesson

export default function Contact(props) {
  // Let's console.log() the props
  console.log(props);
  return (
    <div className="contact-card">
      <img src="./images/mr-whiskerson.png" />
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
```

```
{
    img: "./images/image.png",
    name: "Amit Suthar",
    phone: "(212) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}
```

We can see that it returns an object in the console, and the object consists of the properties we gave to the `<Card />` component in [Something's-Wrong](./07-Something's-Wrong.md).

## How Props Helps us here ?

### Well as we know now that props are nothing but an argument as an object, Can we access the object members as we use to do it in JavaScript ? Absolutely !!

```js
export default function Card(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
```

### Cheers!!! It works well and as expected and it's completely reusable now. And Now we're only concerned about the data being passed in `<Card />` component and can use it as many time as we want with different values.

```js
// Our App.js, which renders <Card />

function App() {
  return (
    <div className="contacts">
      <Card
        image="./images/image1.png"
        name="Amit Suthar"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Card
        image="./images/image2.png"
        name="Sumit Tiwari"
        phone="(212) 555-1234"
        email="fluff@me.com"
      />
    </div>
  );
}
```

---

### Congratulations on your milestone ! We've completed Basics of React here and we'll continue with some more advanced topics.
