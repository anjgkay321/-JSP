import { createContext, useState } from "react";


//
export const SessionContext = createContext(null);

//
export const SessionContextProvider = (props) => {
    
    const [session, setSession] = useState([]);

    return (
        <SessionContext.Provider value={{ session, setSession}}>
            {props.children}
        </SessionContext.Provider>
    )

}