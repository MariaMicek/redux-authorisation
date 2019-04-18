import React from 'react'

const RegistrationForm = (props) => (
    <div>
        <h2>SIGN UP</h2>
        <input
            type={'text'}
            value={props.signUpEmail}
            onChange={props.onEmailChange}
        />
        <input
            // type={'password'}
            value={props.signUpPassword}
            onChange={props.onPasswordChange}
        />
        <input
            // type={'password'}
            value={props.signUpPasswordCheck}
            onChange={props.onPasswordCheckChange}
        />
        <button
            onClick={props.onSignUpClick}
        >
            SIGN IN
        </button>
    </div>
)

export default RegistrationForm 