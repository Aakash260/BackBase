import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/LoginReducer";
const LoginContext = createContext()

const initialState = {
    userdata:{
        email:undefined,
        
    }
}

const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addLoginDetails = (formData) => {
      
        dispatch({ type: "ADDUSER", payload: formData })
    }
     

    return <LoginContext.Provider value={{ ...state, addLoginDetails }}>{children}</LoginContext.Provider>
}
const useLoginDetails = () => {
    return useContext(LoginContext)
}
export { LoginProvider,useLoginDetails }