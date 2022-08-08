import React, { createContext, useContext, useState } from 'react'

let AuthContext = createContext()

let userTemp = localStorage.getItem('user')
if(userTemp) {
    userTemp = JSON.parse(userTemp)
}

export default function AuthProvider({ children }) {
    const [login, setLogin] = useState(!!userTemp)
    const [user, setUser] = useState(userTemp)

    const submitLogin = (data) => {
        localStorage.setItem('user', JSON.stringify(data))
        setUser(data)
        setLogin(true)
    }

    const submitLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        setLogin(false)
    }

    return (
        <AuthContext.Provider value={{ login, user, submitLogin, submitLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
