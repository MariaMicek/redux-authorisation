import React from 'react'
import {logOutAsyncActionCreator} from './state/auth'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh'
	}
}

const App = (props) => {
	return (
		<div
		style={styles.container}		
		>
			<Button
				variant={'outlined'}
				color={'primary'}
				onClick={props._logOut}
			>
				LOG OUT
        	</Button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	_logOut: () => dispatch(logOutAsyncActionCreator())
})

export default connect(
	null,
	mapDispatchToProps
)(App)