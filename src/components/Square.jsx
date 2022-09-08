import { useState } from "react";

function Square(props) {
  // console.log(props);
  return (
    <div
      onClick={() => props.updateBoard(props.row, props.col)}
      className="square"
    >
      {props.value}
    </div>
  );
}

export default Square;
