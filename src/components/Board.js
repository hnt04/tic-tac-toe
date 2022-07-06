import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square value={square[0] handleClick(()=>handleClick(0))}></Square>
          <Square value = {square[1] handleClick(() => handleClick(1))}></Square>
          <Square value = {square[2] handleClick(() => handleClick(2))}></Square>
        </div>
        <div className="board-row">"Your code here"</div>
        <div className="board-row">"Your code here"</div>
      </div>
    </div>
  );
}
