import { LoginSocialGoogle } from 'reactjs-social-login'
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useDispatch } from 'react-redux';
import { userAction } from '@/store/User/index';


import React from 'react'


const Login_btn = () => {

  const dispatch = useDispatch();

  return (
    <div>
           <LoginSocialGoogle
            isOnlyGetToken
            client_id={'838032970869-lvg47c5a2sfmnvm6qkfsvsjlr081fktr.apps.googleusercontent.com' || ''}
            onLoginStart={()=> console.log('login started!')}
            onResolve={({ data }) => {
             dispatch(userAction.setuser(data.access_token))
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GoogleLoginButton/>
          </LoginSocialGoogle>
    </div>
  )
}

export default Login_btn
