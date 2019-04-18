import React from 'react'
import LogInForm from './LogInForm'
import LogInByGoogleForm from './LogInByGoogleForm'
import RegistrationForm from './RegistrationForm'

const Forms = (props) => (
    <div>
        <LogInForm
            email={props.email}
            password={props.password}
            onEmailChange={props.onEmailChange}
            onPasswordChange={props.onPasswordChange}
            onLogInClick={props.onLogInClick}
        />
        <LogInByGoogleForm
            onLogInByGoogleClick={props.onLogInByGoogleClick}
        />
        <RegistrationForm
            email={props.email}
            password={props.password}
            passwordCheck={props.passwordCheck}

            onEmailChange={props.onEmailChange}
            onPasswordChange={props.onPasswordChange}
            onPasswordCheckChange={props.onPasswordCheckChange}

            onSignUpClick={props.onSignUpClick}
        />
    </div>
)

export default Forms 