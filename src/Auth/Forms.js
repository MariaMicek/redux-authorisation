import React from 'react'
import LogInForm from './LogInForm'
import LogInByGoogleForm from './LogInByGoogleForm'
import RegistrationForm from './RegistrationForm'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const Forms = (props) => (
    <div style={styles.container}>
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
            signUpEmail={props.signUpEmail}
            signUpPassword={props.signUpPassword}
            signUpPasswordCheck={props.signUpPasswordCheck}

            onSignUpEmailChange={props.onSignUpEmailChange}
            onSignUpPasswordChange={props.onSignUpPasswordChange}
            onSignUpPasswordCheckChange={props.onSignUpPasswordCheckChange}

            onSignUpClick={props.onSignUpClick}
        />
    </div>
)

export default Forms 