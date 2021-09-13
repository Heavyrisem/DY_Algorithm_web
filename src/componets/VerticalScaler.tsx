import React, { useEffect, useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import '../style/Scaler.css';

interface VerticalScaler_P {
    children: [React.ReactElement, React.ReactElement]
    style?: React.CSSProperties
}
function VerticalScaler(props: VerticalScaler_P) {
    const Scaler = useRef<HTMLDivElement>(null);
    const Divider = useRef<HTMLDivElement>(null);

    const [Clicked, setClicked] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0);
    
    useEffect(() => {
        if (Scaler.current) setHeight(Scaler.current.clientHeight / 2);
    }, []);

    function resize(e: React.MouseEvent) {
        if (Clicked && Divider.current && Scaler.current) {
            e.preventDefault();

            
            
            let cal = e.clientY - (Divider.current.clientHeight / 2) - Scaler.current.offsetTop;

            if (cal <= Scaler.current?.clientHeight * 0.1 || cal >= Scaler.current?.clientHeight * 0.9) return;

            setHeight(cal);

        }
    }

    return (
        <div className="VerticalScaler" style={props.style} onMouseMove={resize} onMouseUp={()=>{setClicked(false)}} ref={Scaler}>
            <span className="View" style={{height: height+'px'}}>
                {props.children[0]}
            </span>

            <span ref={Divider} style={{left: height+'px'}} className="Divider" onMouseDown={()=>{setClicked(true)}} />

            <span className="View" style={{height: document.body.clientHeight - height - (Divider.current? Divider.current.clientHeight+1 : 0) + "px"}}>
                {props.children[1]}
            </span>
        </div>
    )
}

export default VerticalScaler;