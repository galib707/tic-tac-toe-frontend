import Square from "./Square";
// import { useState } from "react";

// let startingBoard = new Array(3).fill(0).map((item) => new Array(3).fill(" "));

function Board(props) {
  return (
    <div className="board">
      <div className="row">
        <Square
          row={0}
          col={0}
          updateBoard={props.updateBoard}
          value={props.currBoard[0][0]}
        />
        <Square
          row={0}
          col={1}
          updateBoard={props.updateBoard}
          value={props.currBoard[0][1]}
        />
        <Square
          row={0}
          col={2}
          updateBoard={props.updateBoard}
          value={props.currBoard[0][2]}
        />
      </div>
      <div className="row">
        <Square
          row={1}
          col={0}
          updateBoard={props.updateBoard}
          value={props.currBoard[1][0]}
        />
        <Square
          row={1}
          col={1}
          updateBoard={props.updateBoard}
          value={props.currBoard[1][1]}
        />
        <Square
          row={1}
          col={2}
          updateBoard={props.updateBoard}
          value={props.currBoard[1][2]}
        />
      </div>
      <div className="row">
        <Square
          row={2}
          col={0}
          updateBoard={props.updateBoard}
          value={props.currBoard[2][0]}
        />
        <Square
          row={2}
          col={1}
          updateBoard={props.updateBoard}
          value={props.currBoard[2][1]}
        />
        <Square
          row={2}
          col={2}
          updateBoard={props.updateBoard}
          value={props.currBoard[2][2]}
        />
      </div>
    </div>
  );
}

export default Board;
