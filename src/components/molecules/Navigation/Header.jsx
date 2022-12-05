import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import logo from '../../../assets/logo.svg'
import menuIcon from '../../../assets/ico-hamburger menu.png'

import * as middlewares from '../../../middlewares'
import { useSelector } from 'react-redux'

const ARTICLES_URL = process.env.REACT_APP_ARTICLES_URL

//TODO: Remplacer les liens avec les liens d'action rapide
const Navbar = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)

    const location = window.location.pathname.split('/')[1]

    return (
        <div className="fixed top-0 left-0 w-full lg:hidden xl:hidden 2xl:hidden sm:flex md:flex justify-between px-10 bg-primary-blue-500 z-50 drop-shadow-mdlight h-fit">
            <div className="flex justify-between w-full h-fit my-2">
                <a href="/dashboard">
                    <img
                        src={logo}
                        alt="Logo TrainPreddict, application pour cyclistes"
                        width={30}
                    />
                </a>
                <p className="capitalize">{location}</p>
                <img
                    src={menuIcon}
                    alt="Menu"
                    onClick={() => {
                        setMenu(!menu)
                    }}
                    width={30}
                />
                <div
                    className={`px-5 fixed top-10 bg-primary-blue-500 left-0 w-full ${
                        menu ? 'grid' : 'hidden'
                    }`}
                >
                    <a
                        href="/dashboard"
                        className={`text-low-contrast-500 my-2 mx-6`}
                    >
                        Dashboard
                    </a>
                    <a
                        href="/upload"
                        className={`text-low-contrast-500 my-2 mx-6`}
                    >
                        Upload
                    </a>
                    <a
                        href="/courses"
                        className={`text-low-contrast-500 my-2 mx-6`}
                    >
                        Course
                    </a>
                    <a
                        href="/home"
                        className={`text-low-contrast-500 my-2 mx-6`}
                    >
                        A propos
                    </a>
                    <a
                        href={
                            auth.userId === '6001ad64dbafc4e85acdecd5' ||
                            auth.userId === '5fb64aeb462e0df71872c3e1'
                                ? `${ARTICLES_URL}/auth/${auth.token}`
                                : ARTICLES_URL
                        }
                        className="w-fit grid my-2 mx-6 text-medium-contrast-500"
                    >
                        Actualités
                    </a>
                    <a
                        className="w-fit grid my-2 mx-6 text-medium-contrast-500"
                        onClick={() => {
                            dispatch(middlewares.logout()).then(navigate('/'))
                        }}
                    >
                        Déconnexion
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
