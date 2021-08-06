import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const clientId = process.env.REACT_APP_ID||'935932900837-8ndtoqgpbgrm829n73d0vkidfkvcsd2f.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    cookies.remove('user');
    window.location.reload();
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} >
       Log Out
    </button>
  );
}

export default LogoutHooks;
