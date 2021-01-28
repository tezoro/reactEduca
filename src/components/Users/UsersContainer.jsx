import React from 'react'
import {
   connect
} from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing, getUsers } from '../../redux/users-reducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/preloader'
import { usersApi } from '../../api/api'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
      /*  this.props.toggleIsFetching(true)
       usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
 
       }) */
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgrees={this.props.followingInProgrees}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgrees: state.usersPage.followingInProgrees
   }
}
/* let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingAC(isFetching))
      }
   }
} */

export default compose(
   connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleIsFollowing, getUsers }),
   withAuthRedirect
)(UsersContainer)
