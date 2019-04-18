import React from 'react'
import { connect } from 'react-redux'
import Forms from './Forms'

const Auth = (props) => {
  return (
    <div>
      {
        props._users ?
          props.children
          :
          <Forms
            email={''}
            password={''}
            passwordCheck={''}

            onEmailChange={() => {}}
            onPasswordChange={() => {}}
            onPasswordCheckChange={() => {}}

            onLogInClick={() => {}}
            onLogInByGoogleClick={() => {}}
            onSignUpClick={() => {}}
          />
      }
    </div>
  )
}

// const mapStoreToProps = state => ({

// })

// const mapDispatchToProps = dispatch => ({

// })

// export default connect (
//     mapStoreToProps,
//     mapDispatchToProps
// )(Auth)

export default Auth