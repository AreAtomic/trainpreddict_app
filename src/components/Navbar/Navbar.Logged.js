import React from 'react'
import { LogoRond } from '..'
import user from '../../assets/user.svg'

const NavbarLogged = (props) => {
    return (
        <nav className="navbar navbar-logged" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <LogoRond width={51} />
                </a>
            </div>

            <div className="navbar-menu-logged">
                <div className="navbar-start-left">
                    <div className="navbar-item is-capitalized">
                        {props.location}
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <img src={user} width={35} alt="Logo utilisateur TrainPreddict, cycliste avec roue cranté"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarLogged