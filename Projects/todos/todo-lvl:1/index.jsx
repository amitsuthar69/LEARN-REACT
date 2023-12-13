import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      text: "Dummy Task",
      completed: false,
    },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
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
        />
        <button type="submit">Add</button>
      </form>
      <h3>Your Tasks :</h3>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}>
            {task.text}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
