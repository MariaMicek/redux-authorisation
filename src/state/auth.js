import { auth, googleProvider, database } from '../firebaseConfig'

const EMAIL_CHANGED = 'auth/EMAIL_CHANGED'
const PASSWORD_CHANGED = 'auth/PASSWORD_CHANGED'
const SIGN_UP_EMAIL_CHANGED = 'auth/SIGN_UP_EMAIL_CHANGED'
const SIGN_UP_PASSWORD_CHANGED = 'auth/SIGN_UP_PASSWORD_CHANGED'
const SIGN_UP_PASSWORD_CHECK_CHANGED = 'auth/SIGN_UP_PASSWORD_CHECK_CHANGED'
const SET_USER = 'auth/SET_USER'
const CLEAR_STATE = 'auth/CLEAR_STATE'


export const emailChangedActionCreator = newValue => ({
    type: EMAIL_CHANGED,
    newValue
})
export const passwordChangedActionCreator = newValue => ({
    type: PASSWORD_CHANGED,
    newValue
})
export const signUpEmailChangedActCreator = newValue => ({
    type: SIGN_UP_EMAIL_CHANGED,
    newValue
})
export const signUpPassChangedActCreator = newValue => ({
    type: SIGN_UP_PASSWORD_CHANGED,
    newValue
})
export const signUpPassCheckChangedActCreator = newValue => ({
    type: SIGN_UP_PASSWORD_CHECK_CHANGED,
    newValue
})
export const setUserActionCreator = user => ({
    type: SET_USER,
    user
})
export const clearDataActionCreator = () => ({
    type: CLEAR_STATE
})

export const logInAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const email = state.auth.email
    const password = state.auth.password

    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('logged in'))
        .catch(() => console.log('error'))
}
export const logOutAsyncActionCreator = () => (dispatch, getStore) => {
    auth.signOut()
    dispatch(clearDataActionCreator())
}
export const logInByGoogleAsyncActionCreator = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
        .then(() => console.log('logged in'))
        .catch(() => console.log('error'))
}
export const startListeningToAuthChangeAsyncActionCreator = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => dispatch(setUserActionCreator(user))
    )
}
export const createUserAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const email = state.auth.signUpEmail
    const password = state.auth.signUpPassword
    const passwordCheck = state.auth.signUpPasswordCheck

    if (password === passwordCheck) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => console.log('logged in'))
            .catch(() => console.log('error, password must have at least 6 characters'))
    } else {
        console.log('passwords do not match')
    }
}

const initialState = {
    user: null,
    email: '',
    password: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpPasswordCheck: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.newValue
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.newValue
            }
        case SIGN_UP_EMAIL_CHANGED:
            return {
                ...state,
                signUpEmail: action.newValue
            }
        case SIGN_UP_PASSWORD_CHANGED:
            return {
                ...state,
                signUpPassword: action.newValue
            }
        case SIGN_UP_PASSWORD_CHECK_CHANGED:
            return {
                ...state,
                signUpPasswordCheck: action.newValue
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case CLEAR_STATE:
            return {
                ...state,
                email: '',
                password: '',
                signUpEmail: '',
                signUpPassword: '',
                signUpPasswordCheck: '',
            }
        default:
            return state
    }
}