import { createContext, useReducer } from "react";
import userReducer from "../reducer/authReducer";

export const UserContext = createContext(null)
const initialState = {isLoggedIn:false, userData:null}

const ContextProvider = ({children}) => {
        const [authState,dispatch] = useReducer(userReducer,initialState)

        let data = {
                name:"agnes",
                authState,
                dispatch
        }
        return (
                <UserContext.Provider value={data}>
                {children}
                </UserContext.Provider>
        )
}
export default ContextProvider