import React, { useState } from 'react'
import { LogoRond, ButtonPrimaryMedium, ButtonSecondaryMedium } from '..'

const NavbarUnlogged = (props) => {
    const [isActive, setisActive] = useState(false)
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/home">
                    <LogoRond width={51} />
                </a>
                <div
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => setisActive(!isActive)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="/connexion">
                                <ButtonPrimaryMedium nom="Connexion" />
                            </a>
                            <a href="/inscription">
                                <ButtonSecondaryMedium nom="Inscription" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarUnlogged
