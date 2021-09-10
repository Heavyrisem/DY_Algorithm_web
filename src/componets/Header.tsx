import React from "react";
import '../style/Header.css';

import Logo from '../style/img/Logo.svg';
import Sidemenu from "./Sidemenu";

function Header() {
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
                <Sidemenu />
            </div>
        </header>
    )
}

export default Header;