import React from "react";

export default function Input(props) {
  return (
    <div>
      <input onChange={props.onChange} value={props.state} />
      <button onClick={props.onClick}>Add Todo</button>
    </div>
  );
}
