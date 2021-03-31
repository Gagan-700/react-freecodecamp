import React from "react";
import "./style.css";
import TodoComponent from "./TodoComponent"
import todoData from "./todoData"

export default function App() {
  const arrayData = todoData.map(item =>{
    return(
      <TodoComponent data={item} />
    )
  })
  return (
    <div>
      {arrayData}
    </div>
  );
}
