import React, { useState } from 'react';
import { PrimaryButton } from './components/buttons';
import logo from '../assets/images/logo.svg';
import background from '../assets/images/background.jpg';
import axios from 'axios';
import { useAlert } from 'react-alert';


export default function Login(props) {
  

  
  const alert = useAlert();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleEmailChange = async (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = async (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post('https://dinary.herokuapp.com/user/login', {
        email: email,
        password: password,
      })
      .then((Response) => {
        if (Response.status === 200) {
          console.log(Response.data.auth);
          alert.show(Response.data.msg);
          props.setCookie('token', Response.data.auth)

        } else {
          alert.show('يرجى ادخال المعلومات بشكل صحيح');
        }
      })
      .catch((err) => {
        alert.show('يرجى ادخال المعلومات بشكل صحيح');
      });
  };

  return (
    <div>
      <div className='row'>
        <div className='col log-right-col'>
          <div className='padding'>
            <img className='logo-login' src={logo} alt='logo' />
            <h1 className='message-header'>تسجيل دخول الادمن</h1>
            <form className='form'>
              <p className='input-title'>البريد الالكتروني</p>
              <input
                className='input'
                autoComplete='true'
                type='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
              />
              <p className='input-title'>كلمة السر</p>
              <input
                className='input'
                autoComplete='true'
                type='password'
                name='password'
                value={password}
                onChange={handlePasswordChange}
              />

              <PrimaryButton onClick={handleSubmit}>دخول</PrimaryButton>
            </form>
          </div>
        </div>
        <div className='col log-left-col'>
          <img src={background} alt='background' />
        </div>
      </div>
    </div>
  );
}
