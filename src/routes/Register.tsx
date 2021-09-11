import React from 'react';
import AccountButton from '../componets/AccountButton';
import AccountInput from '../componets/AccountInput';
import '../style/Register.css';

function Register() {
    return (
        <div className="Register">
            <div className="Container">
                <div className="Title" style={{marginBottom: '3rem'}}>계정 등록</div>
                <AccountInput name="ID" placeholder="아이디" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput name="Password" placeholder="비밀번호" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput name="Nickname" placeholder="닉네임" onValue={(e)=>{console.log(e.target.value)}} />
                <AccountInput name="Email" placeholder="example@example.com" onValue={(e)=>{console.log(e.target.value)}} />

                <AccountButton name="등록" style={{marginTop: '3rem'}} />
            </div>
        </div>
    )
}

export default Register;