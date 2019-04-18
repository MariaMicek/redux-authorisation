import React from 'react'
import { connect } from 'react-redux'
import Forms from './Forms'
import {
	emailChangedActionCreator,
	passwordChangedActionCreator,
	signUpEmailChangedActCreator,
	signUpPassChangedActCreator,
	signUpPassCheckChangedActCreator,
	logInAsyncActionCreator,
	logInByGoogleAsyncActionCreator,
	createUserAsyncActionCreator,
} from '../state/auth'
import CircularProgress from '@material-ui/core/CircularProgress'

const Auth = (props) => {
	return (
		<div>
			{
				props._isLoading ?
					<div
						style={{
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CircularProgress />
					</div>
					:
					props._user ?
						props.children
						:
						<Forms
							email={props._email}
							password={props._password}
							signUpEmail={props._signUpEmail}
							signUpPassword={props._signUpPassword}
							signUpPasswordCheck={props._signUpPasswordCheck}

							onEmailChange={props._onEmailChange}
							onPasswordChange={props._onPasswordChange}

							onSignUpEmailChange={props._onSignUpEmailChange}
							onSignUpPasswordChange={props._onSignUpPasswordChange}
							onSignUpPasswordCheckChange={props._onSignUpPasswordCheckChange}

							onLogInClick={props._logIn}
							onLogInByGoogleClick={props._logInByGoogle}
							onSignUpClick={props._createUser}
						/>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	_user: state.auth.user,
	_email: state.auth.email,
	_password: state.auth.password,
	_signUpEmail: state.auth.signUpEmail,
	_signUpPassword: state.auth.signUpPassword,
	_signUpPasswordCheck: state.auth.signUpPasswordCheck,
	_isLoading: state.auth.isLoading,
})

const mapDispatchToProps = dispatch => ({
	_onEmailChange: (event) => dispatch(emailChangedActionCreator(event)),
	_onPasswordChange: (event) => dispatch(passwordChangedActionCreator(event)),
	_onSignUpEmailChange: (event) => dispatch(signUpEmailChangedActCreator(event)),
	_onSignUpPasswordChange: (event) => dispatch(signUpPassChangedActCreator(event)),
	_onSignUpPasswordCheckChange: (event) => dispatch(signUpPassCheckChangedActCreator(event)),

	_logIn: () => dispatch(logInAsyncActionCreator()),
	_logInByGoogle: () => dispatch(logInByGoogleAsyncActionCreator()),
	_createUser: () => dispatch(createUserAsyncActionCreator()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth)

