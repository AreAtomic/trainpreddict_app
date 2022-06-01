//#region Import external modules
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//#endregion
//#region Import components
import { Navbar } from './components/molecules'
import {
    Dashboard,
    Auth,
    Show,
    Coureur,
    Parametres,
    Home,
    Televersement,
    CreateCourse,
} from './pages'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as services from './services'
import * as middlewares from './middlewares'
//#endregion
toast.configure()

const App = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (auth.structure) {
            services.getConfig(auth.token).then((response) => {
                dispatch(middlewares.setConfig(response.parametres))
            })
        }
    }, [auth])

    return (
        <div className="bg-component-one-500 text-low-contrast-500 overflow-hidden w-full pt-navbar min-h-screen">
            {user.isLogged ? (
                <>
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={
                                <>
                                    <Navbar />
                                    <Dashboard toast={toast} />
                                </>
                            }
                        ></Route>
                        <Route
                            path="/parametres"
                            element={
                                <>
                                    <Navbar />
                                    <Parametres toast={toast} />
                                </>
                            }
                        ></Route>
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/*"
                            element={
                                <>
                                    <Navbar />
                                    <Dashboard toast={toast} />
                                </>
                            }
                        ></Route>
                        <Route
                            path="/upload"
                            element={
                                <>
                                    <Navbar />
                                    <Televersement toast={toast} />
                                </>
                            }
                        />
                        <Route
                            path="/courses"
                            element={
                                <>
                                    <Navbar />
                                    <CreateCourse toast={toast} />
                                </>
                            }
                        />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/auth"
                        element={<Auth toast={toast} />}
                    ></Route>
                    <Route path="/show" element={<Show />}></Route>
                    <Route path="/*" element={<Auth toast={toast} />}></Route>
                </Routes>
            )}
        </div>
    )
}

export default App
