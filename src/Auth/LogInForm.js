import React from 'react'

const LogInForm = (props) => (
    <div>
        <h2>SIGN IN</h2>
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
        <button
            onClick={props.onLogInClick}
        >
            LOG IN
        </button>
    </div>
)

export default LogInForm 