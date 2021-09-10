import React, { useState } from "react";
import Button from "../style/img/MenuButton.svg";

function Sidemenu() {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <>
            {!showMenu&&
                <img src={Button} />
            }
        </>
    )
}

export default Sidemenu;