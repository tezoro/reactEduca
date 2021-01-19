import React from 'react'
import stylles from './Users.module.css'
import userPhoto from "../../assets/images/userImage.png"
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'
import { usersApi } from '../../api/api'

let Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div className="a">
            {pages.map((p) => {
               return <span onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p && stylles.selectedPage}>{p}</span>
            })}
         </div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="Photo image" className={stylles.userImage} />
                     </NavLink>
                  </div>
                  <div>
                     {u.followed ? <button disabled={props.followingInProgrees.some(id => id === u.id)} onClick={() => {
                        props.toggleIsFollowing(true, u.id)
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                           withCredentials: true,
                           headers: {
                              "API-KEY": "8b1a1059-e38c-439b-853c-da232760d41b"
                           }
                        }).then(responce => {
                           if (responce.data.resultCode == 1) {
                              props.unfollow(u.id)
                           }
                           props.toggleIsFollowing(false, u.id)

                        })
                     }}>Unfollow</button>
                        : <button disabled={props.followingInProgrees.some(id => id === u.id)} onClick={() => {
                           props.toggleIsFollowing(true, u.id)
                           usersApi.followAPI(u.id).then(data => {
                              if (data.resultCode == 0) {
                                 props.follow(u.id)
                              }
                              props.toggleIsFollowing(false, u.id)
                           })
                        }} >Follow</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>

                        {u.name}
                     </div>
                     <div>
                        {u.status}
                     </div>
                  </span>
                  <span>
                     <div>
                        {"u.location.city"}
                     </div>
                     <div>
                        {"u.location.country"}
                     </div>
                  </span>
               </span>
            </div>)
         }
      </div>)
}

export default Users