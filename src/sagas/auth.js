import { take, takeEvery, takeLatest, call, put, fork } from 'redux-saga/effects'
import * as types from '@/actions/index'
import * as actions from '@/actions/auth'
import * as api from '@/api/auth'
import { setSession } from '@/auth/utils'

function* loginWithGoogle() {
    try {
        console.log('here in login with google function of saga')
        const response = yield call(api.loginWithGoogle)

        // setSession(response.data.token)

        yield put(
            actions.authSuccess({
                message: response.data.message
            })
        )
    } catch (e) {
        console.log(e)
        yield put(
            actions.authError({
                error: e.error
            })
        )
    }
}

function* watchLoginWithGoogle() {
    yield takeLatest(types.GOOGLE_LOGIN, loginWithGoogle)
}

function* signUp({ payload }) {
    try {
        const response = yield call(api.signUp, payload)
        console.log(response)
        yield put(
            actions.authSuccess({
                message: response.data.message
            })
        )
    } catch (e) {
        console.log(e.error)
        yield put(
            actions.authError({
                error: e?.error || e 
            })
        )
    }
}

function* watchSignUp() {
    yield takeLatest(types.SIGNUP, signUp)
}

function* login({ payload }) {
    try {
        const response = yield call(api.login, payload)
        console.log(response)

        setSession(response.data.token)

        yield put(
            actions.authSuccess({
                message: response.data.message
            })
        )
    } catch (e) {
        console.log(e)
        yield put(
            actions.authError({
                error: e.error
            })
        )
    }
}

function* watchLogin() {
    yield takeLatest(types.LOGIN, login)
}

function* getUserRequest() {
    try {
        const response = yield call(api.getUser)

        yield put(
            actions.getUserSuccess({
                userInfo: response.data.user
            })
        )
    } catch (e) {
        console.log(e)
        yield put(
            actions.authError({
                error: e.error
            })
        )
    }
}

function* watchGetUserRequest() {
    yield takeLatest(types.GET_USER_REQUEST, getUserRequest)
}

const authSaga = [
    fork(watchLoginWithGoogle),
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchGetUserRequest),
]

export default authSaga