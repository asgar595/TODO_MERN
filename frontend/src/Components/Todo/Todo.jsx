import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [input, setInput] = useState({ title: "", body: "" });
  const [todos, setTodos] = useState([]);
  const [isTextareaVisible, setTextareaVisible] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const addTodo = () => {
    if (input.title.trim() === "" || input.body.trim() === "") {
      alert("Both title and details are required!");
      return;
    }

    // Add new todo to the list
    setTodos([...todos, { id: Date.now(), ...input, expanded: false }]);
    setInput({ title: "", body: "" }); // Clear input fields
    setTextareaVisible(false); // Hide the textarea after adding the todo
  };

  const deleteTodo = (id) => {
    // Remove the todo with the given id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to limit text length (e.g., to 3 words for title, and 100 characters for body)
  const limitText = (text, type) => {
    if (type === "title") {
      const words = text.split(" ");
      if (words.length > 3) {
        return words.slice(0, 3).join(" ") + "..."; // Limit title to 3 words
      }
    } else if (type === "body") {
      if (text.length > 100) {
        return text.slice(0, 100) + "..."; // Limit body to 100 characters
      }
    }
    return text; // Return text as is if it’s within limit
  };

  // Function to toggle expanded/collapsed state of the todo item
  const toggleExpand = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, expanded: !todo.expanded } : todo
    ));
  };

  // Function to show textarea when title is clicked
  const showTextarea = () => {
    setTextareaVisible(true); // Show the textarea for new todo
  };

  return (
    <>
      <div className="card">
        <input
          type="text"
          className="card-title-input"
          placeholder="Enter Title"
          name="title"
          value={input.title}
          onChange={change}
          onClick={showTextarea} // Show textarea when title is clicked
        />
        <textarea
          name="body"
          value={input.body}
          onChange={change}
          className="card-body-input"
          placeholder="Enter Details"
          style={{ display: isTextareaVisible ? "block" : "none" }} // Conditionally show/hide
        ></textarea>
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3
              onClick={() => toggleExpand(todo.id)} // Click to toggle expand/collapse
              style={{ cursor: 'pointer' }} // Adding pointer cursor for clarity
            >
              {limitText(todo.title, "title")}
            </h3>
            <p
              onClick={() => toggleExpand(todo.id)} // Click to toggle expand/collapse
              style={{ cursor: 'pointer' }} // Adding pointer cursor for clarity
            >
              {todo.expanded ? todo.body : limitText(todo.body, "body")}
            </p>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
