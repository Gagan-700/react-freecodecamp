import React from "react";

export default function Conditional(props) {
  if (props.islogged) {
    return <h1>Loading....</h1>;
  } else {
    return <h1>Conditional rendering...</h1>;
  }
}
