import React from "react";
import '../style/AccouontInput.css';

export interface AccountInput_P {
    name: string
    type: 'text' | 'password'
    placeholder: string
    style?: React.CSSProperties
    onValue: React.ChangeEventHandler<HTMLInputElement>
}
function AccountInput(props: AccountInput_P) {
    return (
        <div className="AccountInput" style={props.style}>
            <div className="Type">{props.name}</div>
            <input type={props.type} placeholder={props.placeholder} onChange={props.onValue} />
        </div>
    )
}

export default AccountInput;