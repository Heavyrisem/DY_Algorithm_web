import React, { useRef, useState } from 'react';
import AccountButton from '../componets/AccountButton';
import AccountInput from '../componets/AccountInput';
import { User_T } from '../Main';
import '../style/Register.css';


interface Register_P {
    setUser: React.Dispatch<React.SetStateAction<User_T | undefined>>
}
function Register(props: Register_P) {
    const ID = useRef<HTMLInputElement>(null);
    const Password = useRef<HTMLInputElement>(null);
    const Nickname = useRef<HTMLInputElement>(null);
    const Email = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState<string>("");

    function Register() {
        console.log(ID,Password,Nickname,Email)
        if (ID.current && Password.current && Nickname.current && Email.current) {
            if (ID.current.value && Password.current.value && Nickname.current.value && Email.current.value) {
                props.setUser({
                    U_ID: ID.current.value,
                    U_Nickname: Nickname.current.value,
                    U_Token: "USER_Token"
                });
                
            } else setMessage("필수 입력값이 비었습니다.");
        } else setMessage("오류가 발생했습니다.");
    }

    return (
        <div className="Register">
            <div className="Container">
                <div className="Title" style={{marginBottom: '3rem'}}>계정 등록</div>
                <AccountInput ref={ID} name="ID" placeholder="아이디" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput ref={Password} name="Password" placeholder="비밀번호" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput ref={Nickname} name="Nickname" placeholder="닉네임" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput ref={Email} name="Email" placeholder="example@example.com" />
                <div style={{display: (message? "block":"none"), position: 'absolute'}}>{message}</div>

                <AccountButton name="등록" onClick={Register} style={{marginTop: '3rem'}} />
            </div>
        </div>
    )
}

export default Register;