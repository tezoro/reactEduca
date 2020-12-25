import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

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

      this._state.profilePage=profileReducer(this._state.profilePage,action)
      this._state.dialogPage=dialogsReducer(this._state.dialogPage,action)

      this._callSubscriber(this._state)
   },
}

export default store
window.store=store