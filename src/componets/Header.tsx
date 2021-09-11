import React from "react";
import { User_T } from "../Main";
import '../style/Header.css';

import Logo from '../style/img/Logo.svg';
import Sidemenu from "./Sidemenu";


interface Header_P {
    User?: User_T
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
                <Sidemenu User={props.User} />
            </div>
        </header>
    )
}

export default Header;