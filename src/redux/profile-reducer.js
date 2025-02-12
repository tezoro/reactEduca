import { stopSubmit } from "redux-form"
import { profileApi, usersApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'profilePage/SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO = 'SAVE-PHOTO'

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
      id: 3,
      message: 'hi,itm my first post',
      likesCount: 10
   },
   {
      id: 4,
      message: 'hi,itm my first post',
      likesCount: 10
   }
   ],
   profile: null,
   status: ""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      case SAVE_PHOTO:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         }
      case ADD_POST:
         return {
            ...state,
            posts: [...state.posts, { id: Math.floor(Math.random() * 10), message: action.newPostText, likesCount: 0 }]
         }
      case DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter(p => p.id != action.postId)
         }

      default:
         return state

   }
}
export const deletePostActionCreator = (postId) => ({
   type: DELETE_POST, postId
})

const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile
})
const savePhotoSuccess = (photos) => ({
   type: SAVE_PHOTO,
   photos
})

export const addPostActionCreator = (newPostText) => ({
   type: ADD_POST,
   newPostText
})
export const setStatusAC = status =>
({
   type: SET_STATUS,
   status
})


export const getUserProfile = (userId) => async (dispatch) => {
   let response = await usersApi.getProfile(userId)
   dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
   let response = await profileApi.getStatus(userId)
   dispatch(setStatusAC(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
   let response = await profileApi.updateStatus(status)
   if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status))
   }
}

export const savePhoto = (photo) => async (dispatch) => {
   let response = await profileApi.savePhoto(photo)
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
   }
}

export const saveProfile = (data) => async (dispatch, getState) => {
   const userId = getState().auth.userId
   let response = await profileApi.saveProfile(data)
   if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
   } else {
      dispatch(stopSubmit("profileDataForm", { "_error": response.data.message[0] }))
      Promise.reject(response.data.message[0])
   }
}




export default profileReducer