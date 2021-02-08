import React from 'react'
import {
   getAuthUserData
} from './auth-reducer'

const INITIALIZED_SUCCES = "INITIALIZED-SUCCES"

const initialState = {
   initialized: false
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCES:
         return {
            ...state,
            initialized: true

         }

         default:
            return state
   }
}

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData())
   Promise.all([promise])
      .then(() => {
         dispatch(setInitializedSucces())
      })
}

const setInitializedSucces = () => ({
   type: INITIALIZED_SUCCES
})

export default appReducer