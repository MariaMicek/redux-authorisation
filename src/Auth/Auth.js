import React from 'react'
import { connect } from 'react-redux'
import Forms from './Forms'

const Auth = (props) => {
	return (
		<div>
			{
				props._user ?
					props.children
					:
					<Forms
						email={props._email}
						password={props._password}
						signUpEmail={props._signUpEmail}
						signUpPassword={props._signUpPassword}
						signUpPasswordCheck={props._signUpPasswordCheck}

						onEmailChange={() => { }}
						onPasswordChange={() => { }}
						onPasswordCheckChange={() => { }}

						onLogInClick={() => { }}
						onLogInByGoogleClick={() => { }}
						onSignUpClick={() => { }}
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
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth)

// export default Auth