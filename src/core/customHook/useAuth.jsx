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
        setLogin(true)
        localStorage.setItem('user', JSON.stringify(data))
        setUser(user)
    }

    const submitLogout = (data) => {
        localStorage.removeItem('user')
        setLogin(false)
        setUser(undefined)
    }

    return (
        <AuthContext.Provider value={{ login, user, submitLogin, submitLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
