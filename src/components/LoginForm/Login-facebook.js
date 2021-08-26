import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Cookies from 'universal-cookie';



const cookies = new Cookies(); 
const DOMAIN = process.env.REACT_APP_DOMAIN;

 function LoginHooksFb() {

  const responseFacebook = (res) => {
   console.log("🚀 ~ file: Login-facebook.js ~ line 16 ~ responseFacebook ~ res", res)

  }
  
  return (
    
    <FacebookLogin
    appId="3722823571162688"
    autoLoad={false}
    fields="id,name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
  );
}

export default LoginHooksFb;