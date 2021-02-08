import { Redirect } from "react-router-dom"
import { stopSubmit } from "redux-form"
import { authApi } from "../api/api"

const SET_USER_DATA= "SET-USER-DATA"

let initialState = {
   userId:null,
   email:null,
   login:null,
   isAuth:false
   
}
const authReducer = (state = initialState, action) => {

   switch (action.type) {
      
       case SET_USER_DATA:
          return{
            ...state,
            ...action.payload

         }
      
      default:
         return state
   }
}

 const setAuthUserData = (userId,email,login,isAuth) =>
   ({
      type: SET_USER_DATA,
      payload:{userId,email,login,isAuth}
   })
   
   export const getAuthUserData=()=>(dispatch)=>{
       return authApi.me()
         .then(responce => {
            if (responce.data.resultCode === 0) {
               let { email, id, login } = responce.data.data
               dispatch(setAuthUserData(id, email, login, true))
            }
         })
   }
   export const login=(email,password,rememberMe=false)=>(dispatch)=>{
       authApi.login(email,password,rememberMe)
         .then(responce => {
            if (responce.data.resultCode === 0) {
              dispatch(getAuthUserData())
            }else{
            let message =responce.data.messages.length>0 ?  responce.data.messages[0]: "Some error"
             dispatch(stopSubmit("login", {"_error":message}))     
            }
         })
   }
   export const logout=()=>(dispatch)=>{
       authApi.logout()
         .then(responce => {
            if (responce.data.resultCode === 0) {
              dispatch(setAuthUserData(null,null,null,false))
            }
         })
   }

export default authReducer