const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE='SET-USER-PROFILE'

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
   newPostText: 'it-kamasutra.com',
   profile:null
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_PROFILE:
         return{
            ...state,
            profile:action.profile
         }

       case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         }
      
      case ADD_POST:
         return {
            ...state,
            newPostText:'',
            posts:[...state.posts,{id: 5, message: state.newPostText, likesCount: 0}]
         }

      default:
         return state
      
   }
}
export const setUserProfile=(profile)=>({
   type:SET_USER_PROFILE,
   profile
})
export const addPostActionCreator = () => ({
   type: ADD_POST
})
export const updateNewPostTextActionCreator = text =>
   ({
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   })

export default profileReducer