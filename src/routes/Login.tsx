import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountButton from '../componets/AccountButton';
import AccountInput from '../componets/AccountInput';
import { LoginResponse, Login_Model_Param_T } from '../componets/Types';
import { User_T } from '../Main';
import '../style/Login.css';

import { ENDPOINT } from './Config.json';


interface Register_P {
    setUser: React.Dispatch<React.SetStateAction<User_T | undefined>>
}
function Login(props: Register_P) {
    const ID = useRef<HTMLInputElement>(null);
    const Password = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState<string>("");

    async function Login() {
        if (ID.current && Password.current) {
            if (ID.current.value && Password.current.value) {

                const ServerResponse = await axios.post<LoginResponse>(`${ENDPOINT}/account/login`, {
                    U_ID: ID.current.value,
                    U_PW: Password.current.value
                });

                if (ServerResponse.data.success && ServerResponse.data.U_Token && ServerResponse.data.U_Nickname) {
                    props.setUser({
                        U_ID: ID.current.value,
                        U_Token: ServerResponse.data.U_Token,
                        U_Nickname: ServerResponse.data.U_Nickname
                    })
                } else {
                    setMessage(ServerResponse.data.reason as string);
                }
            } else setMessage("필수 입력값이 비었습니다.");
        } else setMessage("오류가 발생했습니다.");
    }
    
    return (
        <div className="Login">
            <div className="Container">
                <div className="Title" style={{marginBottom: '3rem'}}>로그인</div>
                <AccountInput ref={ID} style={{marginTop: '5rem'}} name="ID" placeholder="아이디" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput ref={Password} type="password" name="Password" placeholder="비밀번호" onValue={(e)=>{console.log(e.target.value)}} />
                <div style={{display: (message? "block":"none"), position: 'absolute'}}>{message}</div>

                <AccountButton name="로그인" style={{marginTop: '7rem', marginBottom: '3rem'}} onClick={Login} />

                <div style={{textAlign: 'center'}}>
                    <Link to="/register">계정이 없다면 여기서 등록하세요</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;