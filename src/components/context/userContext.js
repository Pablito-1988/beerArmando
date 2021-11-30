
import { createContext } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export const UserContext = createContext()

const { Provider } = UserContext

const UserCustomComponent =({children}) =>{

    const [userLogged, setUserLogged] = useLocalStorage("user", [])
    console.log(userLogged)
    const addUser = (user) =>{
        let newUser = {
            userName: user.user,
            phone: user.phone,
            email: user.email,
            address: user.address
        }
        setUserLogged(newUser)
    }
    const clearUser = () =>{
        setUserLogged([])
    }
    const userContextValue = {
        user: userLogged,
        addUser: addUser,
        clearUser: clearUser
   } 
   return(
       <Provider value={userContextValue}>
           {children}
       </Provider>    
   )
}

export default UserCustomComponent