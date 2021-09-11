import React from "react";
import '../style/AccountButton.css';

export interface AccountButton_P {
    name: string
    style?: React.CSSProperties
}
function AccountButton(props: AccountButton_P) {
    return (
        <button className="AccountButton" style={props.style}>
            {props.name}
        </button>
    )
}

export default AccountButton;