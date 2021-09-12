import React from "react";
import '../style/Board.css';

interface Board_P {
    children: React.ReactElement | React.ReactElement[]
    style?: React.CSSProperties
}
function Board(props: Board_P) {
    return (
        <div className="Board" style={props.style}>
            {props.children}
        </div>
    )
}

export default Board;