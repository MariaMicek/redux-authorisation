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

const LogInForm = (props) => (
    <div style={styles.container}>
        <h2>LOG IN</h2>
        <TextField
            style={styles.input}
            label={'Email'}
            type={'email'}
            value={props.email}
            onChange={(event) => props.onEmailChange(event.target.value)}
        />
        <TextField
            style={styles.input}
            label={'Password'}
            type={'password'}
            value={props.password}
            onChange={(event) => props.onPasswordChange(event.target.value)}
        />
        <Button
            style={styles.button}
            variant={'outlined'}
            color={'primary'}
            onClick={props.onLogInClick}
        >
            LOG IN
        </Button>
    </div>
)

export default LogInForm 