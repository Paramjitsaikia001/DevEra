


import React, { createContext, useEffect, useState } from "react";
import { Api } from "../utils/api";

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUserState] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const isAuthanticate = Boolean(user)


    //get current user
    const getCurrentUser = async () => {
        setLoading(true)
        setError(null)

        try {
            const res = await Api.get("/auth/current-user")
            const fetchedUser = res.data?.data || null;

            setUserState(fetchedUser)

            console.log("user data", res.data.data.userName);


            return fetchedUser
        } catch (error) {
            // console.log(error);
            setUserState(null)
            return null
        } finally {
            setLoading(false)

        }
    }


    //login user
    const login = async (email, userName, password) => {
        setLoading(true)
        setError(null)

        try {
            const res = await Api.post("/auth/login", { email, userName, password })
            const loginedUser = res.data?.data;

            setUserState(loginedUser)
            return loginedUser
        } catch (error) {
            const Errmsg = error?.response?.data?.message || "failed to login in please check credentials"
            setError(Errmsg)

            throw new Error(Errmsg)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])


    return (
        <UserContext.Provider value={{
            user,
            isAuthanticate,
            login,
            getCurrentUser,
            loading,
            error,
            setUser: setUserState
        }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext
