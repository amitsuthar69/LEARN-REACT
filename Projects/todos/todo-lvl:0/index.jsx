import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask(task.concat(input));
    setInput("");
  };

  return (
    <div>
      <h1>ToDo</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add task..."
        />{" "}
        <button>Add</button>
      </form>
      <h3>Your Tasks :</h3>
      <ul>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
