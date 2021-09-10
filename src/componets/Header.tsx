import React from "react";
import '../style/Header.css';

import Logo from '../style/img/Logo.svg';
import Sidemenu from "./Sidemenu";

function Header() {
    const Paths = ["ChellengeName"];

    return (
        <header>
            <img src={Logo} className="Logo" />
            <span className="Title">Dyalgorithm</span>
            {Paths.map((Path, idx) => (
                <>
                    {(idx == Paths.length-1)&& <span className="PathDevider">/</span>}
                    <span className="Path">{Path}</span>
                </>
            ))};

            <Sidemenu />
        </header>
    )
}

export default Header;