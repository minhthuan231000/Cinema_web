import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Cookies from 'universal-cookie';
import './Login.css'

const cookies = new Cookies(); 
const DOMAIN = process.env.REACT_APP_DOMAIN;

 function LoginHooksFb() {

  const responseFacebook = async(res) => {
    const data = res;
    const request = new Request(`${DOMAIN}/api/auth/facebook`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });

    await fetch(request)
    .then(res => res.json())
    .then((result) => {
        if (result.data.role) {
            console.log(result)
            let data = {
              id: result.data.id,
              email: result.data.email,
              fullname: result.data.fullname,
              numphone: result.data.numphone
            } 
            cookies.set('user', data, { path: '/' });
            window.location.reload();
        }else {
          alert('Your account was ban')
        }
    },
        (error) => {
            if (error) {
                console.log(error);
            }
        }
    )
  }

  return (
    
    <FacebookLogin
    appId="3722823571162688"
    autoLoad={false}
    fields="id,name,email,picture"
    callback={responseFacebook}
    cssClass="button-facebook"
    icon="fa-facebook"
  />
  );
}

export default LoginHooksFb;