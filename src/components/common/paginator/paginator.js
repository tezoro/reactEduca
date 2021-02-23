import React, { useState } from 'react'
import stylles from './paginator.module.css'

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

   let pagesCount = Math.ceil(totalUsersCount / pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   let maxPortion = Math.ceil(pagesCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(2)
   let leftPortionSize = (portionNumber - 1) * portionSize + 1
   let rightPortionSize = portionNumber * portionSize
   debugger
   return (

      <div className={stylles.paginator}>
         {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}
         {pages.filter(u => u >= leftPortionSize && u <= rightPortionSize).map((p) => {
            return <span onClick={(e) => { onPageChanged(p) }} className={currentPage === p && stylles.selectedPage} >{p}</span>
         })}
         {maxPortion > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
      </div>

   )
}

export default Paginator 