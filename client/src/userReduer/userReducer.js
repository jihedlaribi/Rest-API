import { ADD, DELETE, EDIT, GET } from "../type"


const initialState ={
users:[],
loading:true
 }
  const useReducer=(state=initialState ,{type,payload})=>{
      switch (type) {
          case GET:
              return {...state,loading:false,users:payload}
              case ADD : 
              return {...state,loading:false,users:[...state.users,payload]}
              case DELETE:
                  return {...state,loading:false,users:state.users.filter(elt=> elt._id !== payload._id)}
             case EDIT:
                 return {...state,loading:false,users:state.users.map(elt => elt._id===payload._id?payload:elt)}
          default:
              return state;
              
      }
  }
  export default useReducer