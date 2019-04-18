import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
    input: {
        margin: '10px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: '10px'
    }
}

const RegistrationForm = (props) => (
    <div style={styles.container}>
        <h2>SIGN UP</h2>
        <TextField
            style={styles.input}
            label={'Email'}
            type={'email'}
            value={props.signUpEmail}
            onChange={(event) => props.onSignUpEmailChange(event.target.value)}
        />
        <TextField
            style={styles.input}
            label={'Password'}
            type={'password'}
            value={props.signUpPassword}
            onChange={(event) => props.onSignUpPasswordChange(event.target.value)}
        />
        <TextField
            style={styles.input}
            label={'Verify password'}
            type={'password'}
            value={props.signUpPasswordCheck}
            onChange={(event) => props.onSignUpPasswordCheckChange(event.target.value)}
        />
        <Button
            style={styles.button}
            variant={'outlined'}
            color={'primary'}
            onClick={props.onSignUpClick}
        >
            SIGN IN
        </Button>
    </div>
)

export default RegistrationForm 