import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 2
      }

      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
   }
   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
      )
   }
}
/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
 */
let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status
})



/* let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent) */

export default compose(
   connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
   withRouter,
   withAuthRedirect)(ProfileContainer)