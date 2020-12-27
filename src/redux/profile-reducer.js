const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
}

const profileReducer = (state = initialState, action) => {
   
   switch (action.type) {

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

export const addPostActionCreator = () => ({
   type: ADD_POST
})
export const updateNewPostTextActionCreator = text =>
   ({
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   })

export default profileReducer