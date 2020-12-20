
const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const ADD_SMS='ADD-SMS'
const UPDATE_NEW_SMS_TEXT='UPDATE-NEW-SMS-TEXT'

let store={
   _state:{
      profilePage: {
         posts: [
            { id: 1, message: "hi, how are you ", likesCount: 10 },
            { id: 2, message: 'hi,itm my first post', likesCount: 10 },
            { id: 2, message: 'hi,itm my first post', likesCount: 10 },
            { id: 2, message: 'hi,itm my first post', likesCount: 10 }
         ],
         newPostText: 'it-kamasutra.com',
      },
      dialogPage: {
         messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'how are you ?' },
            { id: 3, message: 'what you doing&' },
            { id: 4, message: 'yeaaa im fine to' },
            { id: 5, message: 'your welcome' }
         ],
         newMessageText: 'send-sms',
         dialogs: [
            { id: 1, name: 'igor', img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7" },
            { id: 2, name: 'nikita', img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7" },
            { id: 3, name: 'maksym', img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7" },
            { id: 4, name: 'ruslan', img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7" },
            { id: 5, name: 'olga', img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7" }
         ],
      },
   },
   _callSubscriber() {
      console.log('state')
   },

   getState(){
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },
   dispatch(action){
      if (action.type === ADD_POST){
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         }
         this._state.profilePage.posts.push(newPost)
         this._state.profilePage.newPostText = ''
         this._callSubscriber(this._state)
      } else if (action.type === UPDATE_NEW_POST_TEXT){
         this._state.profilePage.newPostText = action.newText
         this._callSubscriber(this._state)
      } else if (action.type === ADD_SMS){
         let newMessage = {
            id: 6,
            message:this._state.dialogPage.newMessageText,
         }
         this._state.dialogPage.messages.push(newMessage)
         this._state.dialogPage.newMessageText = ''
         this._callSubscriber(this._state)
      } else if (action.type === UPDATE_NEW_SMS_TEXT){
         this._state.dialogPage.newMessageText = action.newText
         this._callSubscriber(this._state)
      }
   },
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostTextActionCreator = text =>
   ({ type: UPDATE_NEW_POST_TEXT,newText: text})
export const addMessageTextCreator=()=>({type:ADD_SMS})
export const updateMessageTextCreator=(text)=>
   ({ type: UPDATE_NEW_SMS_TEXT,newText:text})
export default store
window.store=store