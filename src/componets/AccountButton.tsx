import React from "react";
import '../style/AccountButton.css';

export interface AccountButton_P {
    name: string
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
function AccountButton(props: AccountButton_P) {
    return (
        <button className="AccountButton" style={props.style} onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default AccountButton;