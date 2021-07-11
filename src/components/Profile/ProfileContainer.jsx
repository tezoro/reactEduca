import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

   refreshProfile() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.autorisedUerId
         if (!userId) {
            this.props.history.push("/login")
         }
      }
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
   }
   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.match.params.userId != prevProps.match.params.userId) {
         this.refreshProfile()
      }
   }

   render() {
      return (
         <Profile {...this.props}
            isOwner={!!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus} />
      )
   }
}
/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
 */
let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   autorisedUerId: state.auth.userId,
   isAuth: state.auth.isAuth
})



/* let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent) */

export default compose(
   connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
   withRouter,
   withAuthRedirect)(ProfileContainer)