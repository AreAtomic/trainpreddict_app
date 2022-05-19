//#region Import external module
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//#endregion
//#region Import Components
import logo from '../../../assets/logo.svg'
import { ButtonSecondarySmall } from '../../atoms'
//#endregion
//#region Import API Methods
import * as middlewares from '../../../middlewares'
//#endregion

const Navbar = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)
    return (
        <div className="fixed top-0 left-0 w-full flex justify-between px-10 py-2 bg-primary-blue-500 z-50 drop-shadow-mdlight">
            {/** PC */}
            <div className="xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex flex-row">
                <a href="/home">
                    <img
                        src={logo}
                        alt="Logo TrainPreddict, application pour cyclistes"
                        width={40}
                    />
                </a>
                <a href="/" className={`text-low-contrast-500 my-2 mx-6`}>
                    Accueil
                </a>
                <a href="/upload" className={`text-low-contrast-500 my-2 mx-6`}>
                    Upload
                </a>
                <a
                    href="/parametres"
                    className={`text-low-contrast-500 my-2 mx-6`}
                >
                    Paramètres
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
            {/**Mobile */}
            <div className="lg:hidden xl:hidden 2xl:hidden sm:flex md: flex justify-between w-full">
                <a href="/home">
                    <img
                        src={logo}
                        alt="Logo TrainPreddict, application pour cyclistes"
                        width={40}
                    />
                </a>
                <ButtonSecondarySmall
                    className="w-fit grid"
                    onClick={() => {
                        setMenu(!menu)
                        console.log(menu)
                    }}
                >
                    Menu
                </ButtonSecondarySmall>
                <div
                    className={`px-5 fixed top-14 bg-primary-blue-500 left-0 w-full ${
                        menu ? 'grid' : 'hidden'
                    }`}
                >
                    <a href="/" className={`text-low-contrast-500 my-2 mx-6`}>
                        Accueil
                    </a>
                    <a
                        href="/upload"
                        className={`text-low-contrast-500 my-2 mx-6`}
                    >
                        Upload
                    </a>
                    <a
                        href="/parametres"
                        className={`text-low-contrast-500 my-2 mx-6`}
                    >
                        Paramètres
                    </a>
                    <ButtonSecondarySmall
                        className="w-fit grid my-2 mx-6"
                        onClick={() => {
                            dispatch(middlewares.logout()).then(navigate('/'))
                        }}
                    >
                        Déconnexion
                    </ButtonSecondarySmall>
                </div>
            </div>
        </div>
    )
}

export default Navbar
