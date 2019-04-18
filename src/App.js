import React from 'react'
import { logOutAsyncActionCreator } from './state/auth'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import moment from 'moment'
import 'moment/locale/pl'

moment.locale('pl')

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '30px'
	},
	button: {
		marginBottom: '10px'
	}
}

const App = (props) => {
	return (
		<div
			style={styles.container}
		>
			<Button
				style={styles.button}
				variant={'outlined'}
				color={'primary'}
				onClick={props._logOut}
			>
				LOG OUT
        	</Button>
			<h3>Dates of your logins:</h3>
			<div>
				{
					props._userLogins ?
					Object.entries(props._userLogins).map(
						([key, value]) => (
							<p
								key={key}
							>
								{moment(value.timestamp).format('LLLL')}
							</p>
						)
					)
					:
					<div
						style={{
							marginTop: '100px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CircularProgress />
					</div>

				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	_userLogins: state.auth.userLogins
})

const mapDispatchToProps = dispatch => ({
	_logOut: () => dispatch(logOutAsyncActionCreator())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)