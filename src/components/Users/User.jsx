import React from 'react'
import stylles from './Users.module.css'
import userPhoto from "../../assets/images/userImage.png"
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'
import { usersApi } from '../../api/api'


let User = ({ user, followingInProgrees, unfollow, follow }) => {
   let u = user
   return (
      <div>
         <span>
            <div>
               <NavLink to={'/profile/' + u.id}>
                  <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="Photo image" className={stylles.userImage} />
               </NavLink>
            </div>
            <div>
               {user.followed ? <button disabled={
                  followingInProgrees
                     .some(id => id === user.id)} onClick={() => {
                        unfollow(u.id)

                     }}>Unfollow</button>
                  : <button disabled={
                     followingInProgrees
                        .some(id => id === user.id)} onClick={() => {
                           follow(user.id)

                        }} >Follow</button>}
            </div>
         </span>
         <span>
            <span>
               <div>
                  {user.name}
               </div>ser
               <div>
                  {user.status}
               </div>
            </span>
            <span>
               <div>
                  {"user.location.city"}
               </div>
               <div>
                  {"user.location.country"}
               </div>
            </span>
         </span>
      </div>
   )
}

export default User