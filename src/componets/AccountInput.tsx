import React from "react";
import '../style/AccouontInput.css';

export interface AccountInput_P {
    name: string
    type?: 'text' | 'password'
    placeholder: string
    style?: React.CSSProperties
    ref?: any
    onValue?: React.ChangeEventHandler<HTMLInputElement>
}
const AccountInput = React.forwardRef(function (props: AccountInput_P, ref: React.LegacyRef<HTMLInputElement>) {
    return (
        <label className="AccountInput" style={props.style} htmlFor={props.name}>
            <div className="Type">{props.name}</div>
            <input ref={ref} id={props.name} type={(props.type)? props.type:"text"} placeholder={props.placeholder} onChange={props.onValue} />
        </label>
    )
})

export default AccountInput;