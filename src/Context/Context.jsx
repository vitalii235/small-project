import React, {useState} from 'react'

const {createContext} = require("react");

export const Context = createContext()

const UserContext = ({children}) => {
    const [permission, setPermission] = useState(false)
    const changePermission = () => setPermission(!permission)
    return <Context.Provider value={{permission, changePermission}}>{children}</Context.Provider>
}
export default UserContext