import React, { EventHandler, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { User_T } from "../Main";
import Button from "../style/img/MenuButton.svg";

import '../style/Sidemenu.css';


interface Sidemenu_P {
    User?: User_T
}
function Sidemenu(props: Sidemenu_P) {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    function asdf(e: React.ChangeEvent<any>) {
        console.log(e.target.value);
    }

    return (
        <>
            
            <img src={Button} className="SidemenuButton" onClick={()=>setShowMenu(!showMenu)} style={{marginRight: '1rem'}} />

            {showMenu&& <div className="DarkBackground" />}
            <div className={"Sidemenu" + (showMenu? " Open":"")}>
                <div className="Header">
                    <span className="UserNickname">{props.User?
                        props.User.U_Nickname : <Link to="/login" onClick={()=>setShowMenu(!showMenu)}>로그인이 필요합니다.</Link>
                    }</span>                                
                    <img src={Button} className="SidemenuButton" onClick={()=>setShowMenu(!showMenu)} />
                </div>

                <Section name="Section">
                    <Text name="설정_텍스트" onValue={asdf} />
                    <Dropdown name="설정_드롭다운_메뉴" onValue={asdf}>
                        <option value="12asdf3">123asdfasdf</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Dropdown>
                    <Toggle name="설정_토글" onValue={(e)=>{console.log(e.target.checked)}} />
                </Section>

                <Section name="Section">
                    <Text name="설정_텍스트" onValue={asdf} />
                    <Dropdown name="설정_드롭다운_메뉴" onValue={asdf}>
                        <option value="123">123</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Dropdown>
                    <Toggle name="설정_토글" onValue={(e)=>{console.log(e.target.checked)}} />
                </Section>
            </div>
        
        </>
    )
}

interface Section_P {
    name: string
    children: JSX.Element[] | JSX.Element
}
function Section(props: Section_P) {
    let childrens = props.children;
    if (!(childrens instanceof Array)) childrens = [childrens];
    
    return (
        <div className="Section" >
            <div className="Name">{props.name}</div>
            <div className="Options">
                {childrens.map((child) => child)}
            </div>
        </div>
    )
}

interface Text_Option_P {
    name: string
    onValue: React.ChangeEventHandler<HTMLInputElement>
}
function Text(props: Text_Option_P) {
    return (
        <div className="Option">
            <span className="name">{props.name}</span>
            <div className="input"><input type="text" onChange={props.onValue} /></div>
        </div>
    )
}

interface Dropdown_Option_P {
    name: string
    onValue: React.ChangeEventHandler<HTMLSelectElement>
    children: JSX.Element[] | JSX.Element
}
function Dropdown(props: Dropdown_Option_P) {
    let childrens = props.children;
    if (!(childrens instanceof Array)) childrens = [childrens];

    return (
        <div className="Option">
            <span className="name">{props.name}</span>
            <select onChange={props.onValue}>
                {childrens.map((child) => child)}
            </select>
        </div>
    )
}

interface Toggle_Option_P {
    name: string
    onValue: React.ChangeEventHandler<HTMLInputElement>
}
function Toggle(props: Toggle_Option_P) {
    return (
        <div className="Option">
            <span className="name">{props.name}</span>
            <label className="switch">
                <input type="checkbox" onChange={props.onValue} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Sidemenu;