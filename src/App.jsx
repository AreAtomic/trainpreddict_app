//#region Import external modules
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//#endregion
//#region Import components
import { Header, Navbar, Bottom } from './components/molecules'
import {
    Dashboard,
    Auth,
    Show,
    Plan,
    Parametres,
    Home,
    Televersement,
    CreateCourse,
    SeancesRouter,
    Objectif,
    Courbes,
} from './pages'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as services from './services'
import * as middlewares from './middlewares'
import { LoggedLayout } from './components/layouts'
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
        <div className="bg-primary-blue-500 text-low-contrast-500 overflow-hidden w-full pt-navbar min-h-screen">
            {user.isLogged ? (
                <>
                    <Routes>
                        <Route path="/" element={<LoggedLayout />}>
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/dashboard"
                                element={<Dashboard toast={toast} />}
                            />
                            <Route
                                path="/objectif"
                                element={<Objectif toast={toast} />}
                            />
                            <Route
                                path="/plan"
                                element={<Plan toast={toast} />}
                            />
                            <Route
                                path="/seances"
                                element={<SeancesRouter />}
                            />
                            <Route
                                path="/upload"
                                element={<Televersement toast={toast} />}
                            />
                            <Route
                                path="/courses"
                                element={<CreateCourse toast={toast} />}
                            />
                            <Route
                                path="/courbes"
                                element={<Courbes toast={toast} />}
                            />
                            <Route
                                path="/parametres"
                                element={<Parametres toast={toast} />}
                            />
                            <Route
                                path="/*"
                                element={<Dashboard toast={toast} />}
                            />
                        </Route>
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
