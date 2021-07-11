const ADD_SMS = 'ADD-SMS'

let initialState = {
   messages: [{
      id: 1,
      message: 'hi'
   },
   {
      id: 2,
      message: 'how are you ?'
   },
   {
      id: 3,
      message: 'what you doing&'
   },
   {
      id: 4,
      message: 'yeaaa im fine to'
   },
   {
      id: 5,
      message: 'your welcome'
   }
   ],
   dialogs: [{
      id: 1,
      name: 'igor',
      img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7"
   },
   {
      id: 2,
      name: 'nikita',
      img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7"
   },
   {
      id: 3,
      name: 'maksym',
      img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7"
   },
   {
      id: 4,
      name: 'ruslan',
      img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7"
   },
   {
      id: 5,
      name: 'olga',
      img: "https://preview.redd.it/88estdg49z951.png?width=2000&format=png&auto=webp&s=82017015928ace002e87f3a830677edfae0858c7"
   }
   ],
}
const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {


      case ADD_SMS:
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: action.newMessageTextBody, }],
         }

      default:
         return state
   }
}
//old syntaxis 

/* export const addMessageTextCreator = (newMessageTextBody) =>
   ({
      type: ADD_SMS,
      newMessageTextBody
   }) */
export const addMessage = (newMessageTextBody) =>
({
   type: ADD_SMS,
   newMessageTextBody
})

export default dialogsReducer