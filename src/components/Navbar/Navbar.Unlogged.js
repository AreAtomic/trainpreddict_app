import React, { useState } from 'react'
import { LogoRond, ButtonPrimaryMedium, ButtonSecondaryMedium } from '..'

const NavbarUnlogged = (props) => {
    const [isActive, setisActive] = useState(false)
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <LogoRond width={51} />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={() => setisActive(!isActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu ${isActive ? "is-active" : ''}`}>
                <div className="navbar-start">
                    <a className="navbar-item" href="/#fonctionnalites">
                        Nos fonctionnalités
                    </a>

                    <a className="navbar-item" href="/#testeurs">
                        Le besoin de bêta testeurs
                    </a>

                    <a className="navbar-item" href="/#references">
                        Nos références
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="/inscription">
                                <ButtonPrimaryMedium nom="Inscription" />
                            </a>
                            <a href="/connexion">
                                <ButtonSecondaryMedium nom="Connexion" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarUnlogged