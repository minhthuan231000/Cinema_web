import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Cookies from 'universal-cookie';
import { refreshTokenSetup } from '../utils/refreshToken';



const cookies = new Cookies(); 
const DOMAIN = process.env.REACT_APP_DOMAIN;

 function LoginHooksFb() {

  const responseFacebook = async(res) => {
    let data = res.profileObj;
    const request = new Request(`${DOMAIN}/api/auth/google`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });

    await fetch(request)
        .then(res => res.json())
        .then((result) => {
            if (result) {
              if(result.data.role !== 'lock'){
                let data = {
                  id: result.data.id,
                  email: result.data.email,
                  fullname: result.data.fullname,
                  numphone: result.data.numphone
                } 
                cookies.set('user', data, { path: '/' });
                window.location.reload();
              }else if(result.data.role === 'lock'){
                alert("Your account was lock!")
              }
              }
        },
            (error) => {
                if (error) {
                    console.log(error);
                }
            }
        )
    refreshTokenSetup(res);
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