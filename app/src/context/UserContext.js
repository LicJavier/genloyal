import { createContext, useState } from "react";

export const UserContext =createContext()

export const UserProvider = ({children})=> {
    const [ dataUser, setDataUser ] = useState({
        name:"",
        surname:"",
        email:"",
        birthday:0,
        phone:0,
    });
    return(
        <UserContext.Provider value={ { dataUser , setDataUser } }>
            {children}
        </UserContext.Provider>
    )
}