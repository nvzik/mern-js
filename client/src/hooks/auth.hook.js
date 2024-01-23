import { useState, useCallback, useEffect } from "react";

export const useAuth = () =>{

    const storageName = 'userData '
    const [ready, setReady] = useState(null)
    const [token, setToken] = useState(false)
    const [userId, setUserId] = useState(null)

    const login = useCallback( (jwtToken, Id) => {
        setToken(jwtToken)
        setUserId(Id)

        localStorage.setItem(storageName, JSON.stringify({token:jwtToken, userId:Id}))
    }, [])

    const logout = useCallback( () => {
        setToken(null)
        setUserId(null) 
        localStorage.removeItem(storageName )
    }, [])

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login]) 

    return {login, logout, token, userId, ready}
}