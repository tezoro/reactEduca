import { stopSubmit } from "redux-form"
import { authApi, securityApi } from "../api/api"

const SET_USER_DATA = "SET-USER-DATA"
const SET_CAPTCHA = "SET-CAPTCHA"

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captcha: null

}

const authReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload

         }
   }
   switch (action.type) {

      case SET_CAPTCHA:
         return {
            ...state,
            captcha: { ...action.captcha }

         }

      default:
         return state
   }
}

const setAuthUserData = (userId, email, login, isAuth) =>
({
   type: SET_USER_DATA,
   payload: { userId, email, login, isAuth }
})

const setCaptchaCreator = (captcha) =>
({
   type: SET_USER_DATA,
   captcha
})

export const getAuthUserData = () => (dispatch) => {
   return authApi.me()
      .then(responce => {
         if (responce.data.resultCode === 0) {
            let { email, id, login } = responce.data.data
            dispatch(setAuthUserData(id, email, login, true))
         }
      })
}

export const login = (email, password, rememberMe = false) => (dispatch) => {
   authApi.login(email, password, rememberMe)
      .then(responce => {
         if (responce.data.resultCode === 0) {
            dispatch(getAuthUserData())
         } else {
            let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", { "_error": message }))
         }
      })
}
export const getCptchaUrl = () => async (dispatch) => {
   const responce = await securityApi.getCaptcha()
   const captchaUrl = responce.data.url
   if (responce.statusCode === 0) {
      dispatch(setCaptchaCreator(captchaUrl))
   } else if (responce.statusCode === 10) {

   } else {
      let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "some error"
      dispatch(stopSubmit("login", { _error: message }))
   }
}

export const logout = () => (dispatch) => {
   authApi.logout()
      .then(responce => {
         if (responce.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
      })
}

export default authReducer