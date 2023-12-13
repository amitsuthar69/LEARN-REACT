import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Click +</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Subtract -
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
