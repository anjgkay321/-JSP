import { createContext, useState } from "react";
//
export const LoginContext = createContext(null);
//
//COOKIE
import Cookies from 'js-cookie';

export const GlobalContextProvider = (props) => {
    
    const [logined, setLogined] = useState(Cookies.get('isLogined'));

    return (
        <LoginContext.Provider value={{ logined, setLogined}}>
            {props.children}
        </LoginContext.Provider>
    )

}
