import * as axios from "axios";

const instance=axios.create({
  withCredentials: true ,
 baseURL:`https://social-network.samuraijs.com/api/1.0/`,
 headers: {
    "API-KEY": "8b1a1059-e38c-439b-853c-da232760d41b"
   }
})

export const usersApi={
followAPI(id){
return instance.post(`follow/${id}`, {}).then(responce=> {return responce.data} )
},
getUsers(currentPage=1,pageSise=10){
 return instance.get(`users?page=${currentPage}&count=${pageSise}`,
         ).then(responce=>{
            return responce.data
         })}
            
}