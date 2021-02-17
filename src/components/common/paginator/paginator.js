import React from 'react'
import stylles from './paginator.module.css'

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

   let pagesCount = Math.ceil(totalUsersCount / pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div >
            {pages.map((p) => {
               return <span onClick={(e) => { onPageChanged(p) }} className={currentPage === p && stylles.selectedPage} >{p}</span>
            })}
         </div>
      </div>
   )
}

export default Paginator 