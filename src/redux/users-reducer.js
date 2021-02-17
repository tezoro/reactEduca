import {
   usersApi
} from "../api/api"
import { updateObjectInArray } from "../utilities/objectHelpers"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "IS-FETCHING"
const TOGGLE_IS_FOLLOWING = "IS-FOLLOWING"

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgrees: []
}


const usersReducer = (state = initialState, action) => {

   switch (action.type) {


      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      case TOGGLE_IS_FOLLOWING: {
         return {
            ...state,
            followingInProgrees: action.isFetching ? [...state.followingInProgrees, action.userId] : state.followingInProgrees.filter(id => id != action.userId)
         }
      }

      case SET_USERS: {
         return {
            ...state,
            users: [...action.users]
         }
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.count
         }
      }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }

         case FOLLOW:
            return {
               ...state,
               //!refactoring
               //users:[...state.users]
               users:updateObjectInArray(state.users, action.userId,"id",{followed:true} )
               /*  state.users.map(u => {
                  if (u.id === action.userId) {
                     return {
                        ...u,
                        followed: true
                     }
                  }
                  return u
               }) */
            }

            case UNFOLLOW:
               return {
                  ...state,
                  //users:[...state.users]
                  users:updateObjectInArray(state.users, action.userId,"id",{followed:false} )
                  /* users: state.users.map(u => {
                     if (u.Id === action.userId) {
                        return {
                           ...u,
                           followed: false
                        }
                     }
                     return u
                  }) */
               }


               default:
                  return state

   }
}
export const setCurrentPage = (currentPage) => ({
   type: SET_CURRENT_PAGE,
   currentPage
})
export const followSuccess = (userId) => ({
   type: FOLLOW,
   userId
})
export const unfollowSuccess = (userId) => ({
   type: UNFOLLOW,
   userId
})
export const setUsers = (users) => ({
   type: SET_USERS,
   users
})
export const setTotalUsersCount = (totalCount) => ({
   type: SET_TOTAL_USERS_COUNT,
   count: totalCount
})
export const toggleIsFetching = (isFetching) => ({
   type: TOGGLE_IS_FETCHING,
   isFetching
})
export const toggleIsFollowing = (isFetching, userId) => ({
   type: TOGGLE_IS_FOLLOWING,
   isFetching,
   userId
})




export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      dispatch(setCurrentPage(currentPage))
      usersApi.getUsers(currentPage, pageSize).then(data => {
         dispatch(toggleIsFetching(false))
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
      })
   }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleIsFollowing(true, userId))
   let response = await apiMethod(userId)
   if (response.resultCode == 0) {
      dispatch(actionCreator(userId))
   }
   dispatch(toggleIsFollowing(false, userId))

}

export const follow = (userId) => {
   return (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersApi.followAPI.bind(userId), followSuccess)
   }
}

export const unfollow = (userId) => {
   return (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersApi.unfollowApi.bind(userId), unfollowSuccess)
   }
}

export default usersReducer