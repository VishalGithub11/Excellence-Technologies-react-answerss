import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/Todo";

export default function App() {
  const [state, setstate] = useState("");
  const [newState, setNewstate] = useState([]);

  const handleChange = (e) => {
    setstate(e.target.value);
  };

  const handleSubmit = () => {
    setNewstate((preVal) => {
      return [...preVal, state];
    }, setstate(""));
  };

  return (
    <div className="App">
      <Input onChange={handleChange} onClick={handleSubmit} state={state} />
      <TodoList list={newState} />
    </div>
  );
}
