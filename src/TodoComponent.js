import React from "react";

export default function TodoComponent(props) {
  return (
    <div>
      <input type="checkbox" />
      <p>{props.data.text}</p>
    </div>
  );
}
