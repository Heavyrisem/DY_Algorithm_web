import React from "react";
import '../style/Header.css';

import Logo from '../style/img/Logo.svg';


interface Header_P {
    children: React.ReactElement | React.ReactElement[]
}
function Header(props: Header_P) {
    const Paths = ["ChellengeName"];
    const RightAligen: React.CSSProperties = {
        margin: 'auto',
        marginLeft: 'auto',
        marginRight: 0,
        display: 'flex'
    }

    return (
        <header>
            <img src={Logo} className="Logo" />
            <span className="Title">DYalgorithm</span>
            {Paths.map((Path, idx) => (
                <>
                    {(idx == Paths.length-1)&& <span key={idx} className="PathDevider">/</span>}
                    <span key={Path} className="Path">{Path}</span>
                </>
            ))}
            <div style={RightAligen}>
                {props.children}
            </div>
        </header>
    )
}

export default Header;