import React, { useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import '../style/Scaler.css';

interface HorizontalScaler_P {
    children: [React.ReactElement, React.ReactElement]
}
function HorizontalScaler(props: HorizontalScaler_P) {
    const Divider = useRef<HTMLDivElement>(null);

    const [Clicked, setClicked] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(document.body.clientWidth / 2);
    

    function resize(e: React.MouseEvent) {
        if (Clicked && Divider.current) {
            e.preventDefault();
            let cal = e.clientX - (Divider.current.clientWidth / 2);

            if (cal <= document.body.clientWidth * 0.1|| cal >= document.body.clientWidth * 0.9) return;

            setWidth(cal);

        }
    }

    return (
        <div className="HorizontalScaler" onMouseMove={resize} onMouseUp={()=>{setClicked(false)}}>
            <span className="View" style={{width: width+'px'}}>
                {props.children[0]}
            </span>

            <span ref={Divider} style={{left: width+'px'}} className="Divider" onMouseDown={()=>{setClicked(true)}} />

            <span className="View" style={{width: document.body.clientWidth - width - (Divider.current? Divider.current.clientWidth+1 : 0) + "px"}}>
                {props.children[1]}
            </span>
        </div>
    )
}

export default HorizontalScaler;