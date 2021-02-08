import { createSelector } from "reselect"

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   autorisedUerId: state.auth.userId,
   isAuth: state.auth.isAuth
})
const getEasyProfile=(state)=>{
   return state.profilePage.profile
}
export const getProfile=createSelector(getEasyProfile,profile=>{
   return profile.filter(something=>true)
})