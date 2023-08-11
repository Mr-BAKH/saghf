import React from 'react'
import { GoogleLogout } from 'react-google-login'


const Logout_btn = () => {

  const client_Id = process.env.Client_ID

  const onSuccess = () => {
    console.log('logged out!')
  }

  return (
    <div>
        
      <GoogleLogout
        clientId={client_Id}
        buttonText='Log out'
        onLogoutSuccess={onSuccess}
        />

    </div>
  )
}

export default Logout_btn
