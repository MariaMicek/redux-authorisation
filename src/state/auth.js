const initialState = {
    user: null,
    email: 'email',
    password: 'password',
    signUpEmail: 'sign up email',
    signUpPassword: 'sign up password',
    signUpPasswordCheck: 'password check',
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}