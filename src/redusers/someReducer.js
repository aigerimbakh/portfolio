const initialState = {
   someData: []
 };
 
 const someReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'ADD_ITEM':
       return {
         ...state,
         someData: [...state.someData, action.payload]
       };
     default:
       return state;
   }
 };
 
 export default someReducer;
 