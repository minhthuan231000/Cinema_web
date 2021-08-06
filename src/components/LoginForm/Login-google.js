import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import icon_gg from '../../images/icons/icon-google.jpg'
import Cookies from 'universal-cookie';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';


const cookies = new Cookies(); 
const clientId ='935932900837-8ndtoqgpbgrm829n73d0vkidfkvcsd2f.apps.googleusercontent.com';
const DOMAIN = process.env.REACT_APP_DOMAIN;

 function LoginHooks() {
  const onSuccess = async(res) => {
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
              let data = result.data;
              cookies.set('user', data, { path: '/' });
              window.location.reload();
            }
        },
            (error) => {
                if (error) {
                    console.log(error);
                }
            }
        )
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button className="btnAuth-gg" onClick={signIn} >
      <img src={icon_gg} alt="google login" className="icon"></img>
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;