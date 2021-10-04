import { createSlice } from '@reduxjs/toolkit'
import * as authService from 'services/auth.service'
import * as storageEngine from '../engine'

const user_ = 'user'
const token_ = 'token'

const initialState = {
    loginUser: { name: "Tahir" }, //storageEngine.get( user_ ), // get initial value from storage engine if available - persist data while page refresh/reload
    token: storageEngine.get(token_), // get inital value from storage engine - persist data while page refresh/reload
    errors: undefined,
    loading: false
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = true
      state.errors = undefined
    },
    loginSuccess: (state, action) => {
        const user = action.payload
        state.loginUser = user
        state.token = user?.authToken
        state.loading = false
        state.errors = undefined
    },
    loginFailure: (state, action) => {
        const errors = action.payload
        state.loading = false
        state.errors = errors
    },
    logout: (state) => {
        state.loading = false
        state.errors = undefined
        state.loginUser = undefined
    }
  },
})

const { loginFailure, loginSuccess, loginStart, logout } = slice.actions

export const login = payload => dispatch => {
    dispatch( loginStart() )
    const { email, password } = payload
    authService.login({ email, password }).then(
        response => {
            // save the user info in storage for data persistance
            storageEngine.save( user_ , response.data )
            // store session token
            storageEngine.save( token_, response.data?.authToken)
            // dispatch redux action.
            dispatch( loginSuccess( response.data ) )

        }
    ).catch( error => {
        dispatch( loginFailure( error.message ) )
    })
}

export const logoutUser = dispatch => {
    
    // clear user session.
    storageEngine.clearAll()

    // dispatch redux action.
    dispatch( logout() )

}




export default slice.reducer