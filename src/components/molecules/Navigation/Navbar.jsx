import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import logo from '../../../assets/logo.svg'
import { ButtonSecondarySmall } from '../../atoms'

import * as middlewares from '../../../middlewares'
import { useSelector } from 'react-redux'
const ARTICLES_URL = process.env.REACT_APP_ARTICLES_URL

const Navbar = (props) => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="fixed top-0 left-0 w-full xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex justify-between px-10 py-2 bg-primary-blue-500 z-50 drop-shadow-mdlight">
            <div className="xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex flex-row">
                <a href="/dashboard">
                    <img
                        src={logo}
                        alt="Logo TrainPreddict, application pour cyclistes"
                        width={40}
                    />
                </a>
                <a href="/plan" className={`text-low-contrast-500 my-2 mx-6`}>
                    Plan
                </a>
                <a
                    href="/objectif"
                    className={`text-low-contrast-500 my-2 mx-6`}
                >
                    Objectif
                </a>
                <a href="/upload" className={`text-low-contrast-500 my-2 mx-6`}>
                    Upload
                </a>
                <a
                    href="/courses"
                    className={`text-low-contrast-500 my-2 mx-6`}
                >
                    Course
                </a>
                <a
                    href="/courbes"
                    className={`text-low-contrast-500 my-2 mx-6`}
                >
                    Statistiques
                </a>
                <a
                    href="/parametres"
                    className={`text-low-contrast-500 my-2 mx-6`}
                >
                    Paramètres
                </a>
                <a href="/home" className={`text-low-contrast-500 my-2 mx-6`}>
                    A propos
                </a>
                <a
                    href={
                        auth.userId === '6001ad64dbafc4e85acdecd5' ||
                        auth.userId === '5fb64aeb462e0df71872c3e1'
                            ? `${ARTICLES_URL}/auth/${auth.token}`
                            : ARTICLES_URL
                    }
                    className={`text-low-contrast-500 my-2 mx-6`}
                >
                    Actualités
                </a>
            </div>
            <ButtonSecondarySmall
                className="xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex w-fit"
                onClick={() => {
                    dispatch(middlewares.logout()).then(navigate('/'))
                }}
            >
                Déconnexion
            </ButtonSecondarySmall>
        </div>
    )
}

export default Navbar
