import React from 'react'
import { setUsers } from './users-reducer'

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET-USERS'


const setUsersAC = (users) => ({
   type: FOLLOW,
   users
})
const followAC = (userId) => ({
   type: FOLLOW,
   userId
})
const unfollowAC = (userId) => ({
   type: FOLLOW,
   userId
})


const initialState = {
   users: [
      { id: 1, followed: true, name: 'John' },
      { id: 2, followed: true, name: 'Olja' },
      { id: 3, followed: true, name: 'Sara' }
   ]
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userid) {
                  return { ...u, followed: false }
               }
               return u
            })
         }

      case SET_USERS:
         return { ...state, users: [...state.users, ...action.users] }
      default:
         return state
   }
}
export default usersReducer