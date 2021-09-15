import React, { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import '../style/Scaler.css';

interface VerticalScaler_P {
    children: [React.ReactElement, React.ReactElement]
    style?: React.CSSProperties
}
function VerticalScaler(props: VerticalScaler_P) {
    const Divider = useRef<HTMLDivElement>(null);
    const { width, height, ref } = useResizeDetector<HTMLDivElement>();

    const [Clicked, setClicked] = useState<boolean>(false);
    const [Height, setHeight] = useState<number>(0);
    
    useEffect(() => {
        console.log(height)
        if (height) setHeight(height / 2);
    }, [height]);

    function resize(e: React.MouseEvent) {
        if (Clicked && Divider.current && height && ref.current) {
            e.preventDefault();
            
            let cal = e.clientY - (Divider.current.clientHeight / 2) - ref.current.offsetTop;

            if (cal <= height * 0.1 || cal >= height * 0.9) return;

            setHeight(cal);

        }
    }

    return (
        <div className="VerticalScaler" style={props.style} onMouseMove={resize} onMouseUp={()=>{setClicked(false)}} ref={ref}>
            <span className="View" style={{height: Height+'px'}}>
                {props.children[0]}
            </span>

            <span ref={Divider} style={{left: Height+'px'}} className="Divider" onMouseDown={()=>{setClicked(true)}} />

            <span className="View" style={{height: document.body.clientHeight - Height - (Divider.current? Divider.current.clientHeight+1 : 0) + "px"}}>
                {props.children[1]}
            </span>
        </div>
    )
}

export default VerticalScaler;