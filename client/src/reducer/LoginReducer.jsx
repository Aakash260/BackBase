  

const LoginReducer = (state,action) => {
 
 
   if(action.type==="ADDUSER"){
    
    return{
        ...state,
        userdata:{
            email:action.payload.email,
            
        }
    }
    
   }
    return state
}

export default LoginReducer