import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get("http://localhost:3000/");
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (newItem.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:3000/", {
        name: newItem
      });

      setNewItem(""); // Clear the input field
      fetchTodos(); // Fetch todos again to refresh the list
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function toggleTodo(id, completed) {
    try {
      const newStatus = completed ? 'completed' : 'pending';
      await axios.put(`http://localhost:3000/${id}`, { status: newStatus });
      
      setTodos((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === id ? { ...todo, status: newStatus } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      setTodos((currentTodos) =>
        currentTodos.filter((todo) => todo.id !== id)
      );
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item </label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn"> Add</button>
      </form>
      <h1 className="header"> Todo List </h1>
      <ul className="list">
        {todos.length === 0 && <p>No Todos</p>}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.status === 'completed'}
                onChange={() => toggleTodo(todo.id, todo.status === 'completed' ? 'pending' : 'completed')}
                />
              {todo.name}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
