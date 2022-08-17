import React from 'react';
import LoginSection from './LoginSection';
import ImageSection from './ImageSection';
import "./login.css"

const LoginPage = () => {

    return(
        <div className='login'>
            <ImageSection />
            <LoginSection />
        </div>
    )

}

export default LoginPage