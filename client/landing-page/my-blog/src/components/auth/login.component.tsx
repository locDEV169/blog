/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
// import { gapi } from 'gapi- script';
import { gapi } from 'gapi-script';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import './style.scss';

interface State {
    isSignedIn?: boolean
}

export default function LoginGooglePage() {
    const [state, setState] = useState<State>({
        isSignedIn: false
    })
    const navigate = useNavigate()
    const clientID: string = process.env.PUBLIC_GOOGLE_CLIENT_ID || '257438269941-lfhmlv6kebotjd3re172drqovvnb8r29.apps.googleusercontent.com'
    const checkUser: string = Cookies.get('user')!

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientID,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline | any) => {
        if ('accessToken' in response) {
            'accessToken' in response || checkUser ? setState({ isSignedIn: true }) : setState({ isSignedIn: false })
            setCookie("accessToken", response.tokenId, 86400);
            setCookie("user", JSON.stringify(response.profileObj), 86400);
        } else {
            'accessToken' in response || checkUser ? setState({ isSignedIn: true }) : setState({ isSignedIn: false })
            setCookie("accessToken", response.tokenId, 86400);
            setCookie("user", JSON.stringify(response.profileObj), 86400);
        }
        window.location.href = '/'
    }

    const setCookie = (username: string, value: string, expires: number) => {
        const date = new Date();
        date.setTime(date.getTime() + expires);
        Cookies.set(username, value, { expires: date, path: "/" });
    };

    const logout = () => {
        setState({ isSignedIn: false })
        Cookies.remove('accessToken')
        Cookies.remove('user')
        navigate(0)
    }

    return (
        <div className="">
            {!state.isSignedIn && <GoogleLogin
                clientId={clientID}
                buttonText="Login with google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className='custom-login-google'
            >
            </GoogleLogin>}
            {state.isSignedIn && <GoogleLogout
                clientId={clientID}
                buttonText="Logout"
                onLogoutSuccess={logout}
                className='custom-login-google'
            ></GoogleLogout>}
        </div >
    );
}
