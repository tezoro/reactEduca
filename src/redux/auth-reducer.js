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
            ...action.data,
            isAuth:true

         }
      
      default:
         return state
   }
}
//toDo homeWork 
/*const lodinThunk=()=()=>{

}

 */

//toDo homeWork

 const setAuthUserData = (userId,email,login) =>
   ({
      type: SET_USER_DATA,
      data:{userId,email,login}
   })
   
   export const getAuthUserData=()=>(dispatch)=>{
       authApi.me()
         .then(responce => {
            if (responce.data.resultCode === 0) {
               let { email, id, login } = responce.data.data
               dispatch(setAuthUserData(id, email, login))
            }
         })
   }

export default authReducer