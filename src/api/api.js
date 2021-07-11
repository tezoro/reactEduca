import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      "API-KEY": "8b1a1059-e38c-439b-853c-da232760d41b"
   }
})

export const usersApi = {
   followAPI(id) {
      return instance.post(`follow/${id}`, {}).then(responce => {
         return responce.data
      })
   },
   unfollowApi(id) {
      return instance.delete(`follow/${id}`).then(responce => {
         return responce.data
      })
   },
   getUsers(currentPage = 1, pageSise = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSise}`,).then(responce => {
         return responce.data
      })
   },
   getProfile(id) {
      console.warn("obsolete object Please use profileApi object")
      return profileApi.getProfile(id)
   }
}

export const profileApi = {
   getProfile(id) {
      return instance.get(`profile/${id}`)
   },
   getStatus(id) {
      return instance.get(`profile/status/${id}`)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status })
   },
   savePhoto(photoFile) {
      let formData = new FormData()
      formData.append('image', photoFile)
      return instance.put('profile/photo', formData, { headers: { "Content-Type": "multipart/form-data" } })
   },
   saveProfile(profile) {
      return instance.put('profile', profile)
   }
}

export const securityApi = {
   getCaptcha() {
      return instance.get('/security/get-captcha-url')
   }
}

export const authApi = {
   me() {
      return instance.get(`auth/me`)
   },
   login(email, password, rememberMe) {
      return instance.post(`auth/login`, { email, password, rememberMe })
   },
   logout() {
      return instance.delete(`auth/login`)
   }
}