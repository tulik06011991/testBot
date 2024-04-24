import React, {useState} from "react";


import UserContext from "./userContext";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [natija , setNatija] = useState(0)
    return (
        <UserContext.Provider value={{user, setUser, natija, setNatija}}>

            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider