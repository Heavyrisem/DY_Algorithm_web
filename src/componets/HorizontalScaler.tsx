import React, { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import '../style/Scaler.css';

interface HorizontalScaler_P {
    children: [React.ReactElement, React.ReactElement]
}
function HorizontalScaler(props: HorizontalScaler_P) {
    const Divider = useRef<HTMLDivElement>(null);
    const { width, height, ref } = useResizeDetector<HTMLDivElement>();

    const [Clicked, setClicked] = useState<boolean>(false);
    const [Width, setWidth] = useState<number>(document.body.clientWidth / 2);
    

    function resize(e: React.MouseEvent) {
        if (Clicked && Divider.current) {
            let cal = 0;
            e.preventDefault();
            cal = e.clientX - (Divider.current.clientWidth / 2);

            if (cal <= document.body.clientWidth * 0.1 || cal >= document.body.clientWidth * 0.9) return;

            setWidth(cal);
        }
    }

    useEffect(() => {
        if (Divider.current && ref.current && width) {
            // console.log(ref.current.clientWidth, width);
            setWidth((width / 2) - (Divider.current.clientWidth / 2));
        }
    }, [width]);

    return (
        <div className="HorizontalScaler" onMouseMove={resize} onMouseUp={()=>{setClicked(false)}} ref={ref}>
            <span className="View" style={{width: Width+'px'}}>
                {props.children[0]}
            </span>

            <span ref={Divider} style={{left: Width+'px'}} className="Divider" onMouseDown={()=>{setClicked(true)}} />

            <span className="View" style={{width: document.body.clientWidth - Width - (Divider.current? Divider.current.clientWidth+1 : 0) + "px"}}>
                {props.children[1]}
            </span>
        </div>
    )
}

export default HorizontalScaler;