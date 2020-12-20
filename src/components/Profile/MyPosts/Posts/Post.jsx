import React from 'react';
import s from "./Post.module.css";

function Post(props){
   
   return(
         <div className={s.item}>
            <img src="https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7" alt="fghf" />
            {props.message}
            <div>
               <span>{props.likeCounts}like</span>
            </div>
          </div>
   )
}

export default Post;