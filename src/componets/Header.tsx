import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderButtonsContext, PathContext } from "../Main";
import '../style/Header.css';

import Logo from '../style/img/Logo.svg';


interface Header_P {
    children: React.ReactElement | React.ReactElement[]
}
function Header(props: Header_P) {
    const { path, setPath } = useContext(PathContext);
    const { Buttons, setButtons } = useContext(HeaderButtonsContext);
    const RightAligen: React.CSSProperties = {
        margin: 'auto',
        marginLeft: 'auto',
        marginRight: 0,
        display: 'flex'
    }

    return (
        <header>
            <img src={Logo} className="Logo" />
            <Link className="Title" to="/">DYalgorithm</Link>
            {/* <span className="Title">DYalgorithm</span> */}
            {path.map((Path, idx) => (
                <>
                    {(idx == Path.length-1)&& <span key={idx} className="PathDevider">/</span>}
                    <span key={Path} className="Path">{Path}</span>
                </>
            ))}
            <div style={RightAligen}>
                {Buttons.map(Btn => Btn)}
                {props.children}
            </div>
        </header>
    )
}



export default Header;