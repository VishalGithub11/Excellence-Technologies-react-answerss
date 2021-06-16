import React from "react";

export default function TodoList({ list }) {
  return (
    <div>
      List
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
