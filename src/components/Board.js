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
        <div className="board-row">
          <Square value={square[3] handleClick(()=>handleClick(0))}></Square>
          <Square value = {square[4] handleClick(() => handleClick(1))}></Square>
          <Square value = {square[5] handleClick(() => handleClick(2))}></Square>
        </div>
        <div className="board-row">
          <Square value={square[6] handleClick(()=>handleClick(0))}></Square>
          <Square value = {square[7] handleClick(() => handleClick(1))}></Square>
          <Square value = {square[8] handleClick(() => handleClick(2))}></Square>
        </div>
      </div>
    </div>
  );
}
