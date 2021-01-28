import { profileApi, usersApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE='SET-USER-PROFILE'
const SET_STATUS='SET-STATUS'

let initialState = {
   posts: [{
         id: 1,
         message: "hi, how are you ",
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      }
   ],
   profile:null,
   status:""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_PROFILE:
         return{
            ...state,
            profile:action.profile
         }
      case SET_STATUS:
         return{
            ...state,
            status:action.status
         }
      case ADD_POST:
         return {
            ...state,
            posts:[...state.posts,{id: 5, message: action.newPostText, likesCount: 0}]
         }

      default:
         return state
      
   }
}
const setUserProfile=(profile)=>({
   type:SET_USER_PROFILE,
   profile
})

export const getUserProfile=(userId)=>(dispatch)=>{
    usersApi.getProfile(userId).then(response => {
         dispatch(setUserProfile(response.data))
      })
}
export const getUserStatus=(userId)=>(dispatch)=>{
    profileApi.getStatus(userId).then(response => {
         dispatch(setStatusAC(response.data))
      })
}
export const updateUserStatus=(status)=>(dispatch)=>{
    profileApi.updateStatus(status).then(response => {
       if(response.data.resultCode===0){
         dispatch(setStatusAC(status))}
      })
}

export const addPostActionCreator = (newPostText) => ({
   type: ADD_POST,
   newPostText
})
export const setStatusAC = status =>
   ({
      type: SET_STATUS,
      status
   })


export default profileReducer