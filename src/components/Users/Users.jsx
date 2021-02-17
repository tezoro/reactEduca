import React from 'react'
import stylles from './Users.module.css'
import userPhoto from "../../assets/images/userImage.png"
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'
import { usersApi } from '../../api/api'
import Paginator from '../common/paginator/paginator'
import User from './User'

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
         { users.map(u => <User
            user={u}
            followingInProgrees={props.followingInProgrees}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow} />
         )}
      </div>
   )
}

export default Users