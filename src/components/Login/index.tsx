import { OAuthRedirectConfiguration } from '@magic-ext/oauth';
import React, { MouseEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { UserContext } from '../../UserContext';
import { magic } from '../../utils/magic';

export const Login = () => {
  const [authInputValue, setAuthInputValue] = useState('');
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    user && user.issuer && navigate('/');
  }, [user, navigate]);

  interface AuthInfo {
    type: 'email' | 'text' | OAuthRedirectConfiguration['provider'];
    account: string;
  }

  const handleAuthButtonClick = async (event: MouseEvent, { type, account }: AuthInfo) => {
    event.preventDefault();
    console.log('button clicked');
    let DID;
    switch (type) {
      case 'email':
        DID = await magic.auth.loginWithMagicLink({
          email: account,
          showUI: true,
          redirectURI: 'http://localhost:3001', // 'westtt.com/',
        });

        console.log('isLoggedIn', await magic.user.isLoggedIn());
        console.log('userMetadata', await magic.user.getMetadata());
        break;

      case 'text':
        DID = await magic.auth.loginWithSMS({
          phoneNumber: account,
        });
        break;

      // case 'twitter': // need to add other socials
      //   await magic.oauth.loginWithRedirect({
      //     provider: type /* 'google', 'facebook', 'apple', or 'github' */,
      //     redirectURI: 'https://your-app.com/your/oauth/callback',
      //     scope: ['user:email'] /* optional */,
      //   });
      //   break;

      default:
        console.log('invalid login type provided');
        break;
    }
    console.log('DID', DID);
  };

  // const handleAuthButtonClick = (event: MouseEvent, { type, account }): AuthInfo => {};

  return (
    <form>
      <h1>Log into Westtt</h1>
      <input type="text" onChange={(event) => setAuthInputValue(event.target.value)} placeholder="Enter your email" />
      <div>
        <button
          onClick={(event) => {
            handleAuthButtonClick(event, { type: 'email', account: authInputValue });
          }}
        >
          Email Magic Link
        </button>
        <button
          onClick={(event) => {
            handleAuthButtonClick(event, { type: 'text', account: authInputValue });
          }}
        >
          Text Code
        </button>
      </div>
      <div>
        <button
          onClick={(event) => {
            handleAuthButtonClick(event, { type: 'twitter', account: authInputValue });
          }}
        >
          Twitter
        </button>
      </div>
    </form>
  );
};
