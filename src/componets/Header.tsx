import React, { useContext, useEffect } from "react";
import { PathContext } from "../Main";
import '../style/Header.css';

import Logo from '../style/img/Logo.svg';


interface Header_P {
    children: React.ReactElement | React.ReactElement[]
}
function Header(props: Header_P) {
    const RightAligen: React.CSSProperties = {
        margin: 'auto',
        marginLeft: 'auto',
        marginRight: 0,
        display: 'flex'
    }

    return (
        <PathContext.Consumer>
            {({path, setPath}) => (
                <header>
                    <img src={Logo} className="Logo" />
                    <span className="Title">DYalgorithm</span>
                    {path.map((Path, idx) => (
                        <>
                            {(idx == Path.length-1)&& <span key={idx} className="PathDevider">/</span>}
                            <span key={Path} className="Path">{Path}</span>
                        </>
                    ))}
                    <div style={RightAligen}>
                        {props.children}
                    </div>
                </header>
            )}
        </PathContext.Consumer>
    )
}



export default Header;