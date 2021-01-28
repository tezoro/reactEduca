const LOGIN="LOGIN"
let initialState={
   
}

const loginReducer=(state,action)=>{
   switch (action.type) {
      case LOGIN:
        return {
            ...state,
         }
   
      default:
         return state;
   }

}