import React from 'react';
import { Link } from 'react-router-dom';
import AccountButton from '../componets/AccountButton';
import AccountInput from '../componets/AccountInput';
import '../style/Login.css';

function Login() {
    return (
        <div className="Login">
            <div className="Container">
                <div className="Title" style={{marginBottom: '3rem'}}>로그인</div>
                <AccountInput style={{marginTop: '5rem'}} name="ID" placeholder="아이디" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput type="password" name="Password" placeholder="비밀번호" onValue={(e)=>{console.log(e.target.value)}} />

                <AccountButton name="로그인" style={{marginTop: '7rem', marginBottom: '3rem'}} />

                <div style={{textAlign: 'center'}}>
                    <Link to="/register">계정이 없다면 여기서 등록하세요</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;