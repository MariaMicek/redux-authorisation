import React from 'react'
import Button from '@material-ui/core/Button'

const styles = {
    button: {
        margin: '0 0 10px'
    }
}

const LogInByGoogleForm = (props) => (
    <div>
        <Button
            style={styles.button}
            variant={'outlined'}
            color={'primary'}
            onClick={props.onLogInByGoogleClick}
        >
            LOG IN BY GOOGLE
        </Button>
    </div>
)

export default LogInByGoogleForm 