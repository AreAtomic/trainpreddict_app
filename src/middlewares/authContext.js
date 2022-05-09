import React, { useState, useEffect } from 'react'
import { request } from '../api'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as middlewares from '../middlewares'

const AuthContext = React.createContext({
    onLogout: () => {},
    onRequest: () => {},
})

export const AuthContextProvider = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        dispatch(middlewares.logout()).then(navigate('/'))
    }

    return (
        <AuthContext.Provider
            value={{
                onLogout: logoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
