const userReducer = (state,action) => {
        switch(action.type){
                case 'LOGIN':
                        return {isLoggedIn:true,userData:action.payload}
                case 'LOGOUT':
                        localStorage.clear()
                        return {isLoggedIn:false,userData:null}
                default:
                        throw new Error()
        }
}
export default userReducer