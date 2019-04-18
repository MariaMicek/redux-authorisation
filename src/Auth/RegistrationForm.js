import React from 'react'

const RegistrationForm = (props) => (
    <div>
        <h2>SIGN UP</h2>
        <input
            type={'text'}
            value={props.email}
            onChange={props.onEmailChange}
        />
        <input
            type={'password'}
            value={props.password}
            onChange={props.onPasswordChange}
        />
        <input
            type={'password'}
            value={props.passwordCheck}
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