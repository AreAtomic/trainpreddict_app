import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useDispatch, useSelector } from 'react-redux'

/* Actions */
import { LocationAction } from './middlewares/actions'

/* Theme */
import './theme/custome-theme.sass'
import { variable_css } from './theme'

/* Componets */
import {
    NavbarLogged,
    NavbarUnlogged,
    MenuAbsolute,
    ContextBar,
    MessageAlerte,
    MessageDanger,
    MessageInfo,
    MessageSuccess,
} from './components'

/* Page */
import {
    ShowComponents,
    Landing,
    Connexion,
    Inscription,
    Profil,
    Onboarding,
    Objectif,
    Seances,
    Televersement,
    Recherche,
    Courbes,
    Plan,
    ModificationSeance,
    Dashboard,
    Entrainements,
    Analyse,
    Statistiques,
    Motdepasse,
    Lost,
    Preparation,
} from './pages'
import { Fragment } from 'react'
import { Changement } from './pages/Motdepasse'
const history = createBrowserHistory()

const App = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth)
    const { message } = useSelector((state) => state)
    const location = useSelector((state) => state.location)

    variable_css()
    if (
        !user.isLogged &&
        !(
            window.location.pathname.split('/')[1] === 'connexion' ||
            window.location.pathname.split('/')[1] === 'inscription' ||
            window.location.pathname.split('/')[1] === 'motdepasse' ||
            window.location.pathname.split('/')[1] === 'password' ||
            window.location.pathname.split('/')[1] === '' ||
            window.location.pathname.split('/')[1] === 'home'
        )
    ) {
        history.push('/connexion')
    }
    if (
        user.isLogged &&
        !user.firstLogged &&
        (window.location.pathname.split('/')[1] === 'connexion' ||
            window.location.pathname.split('/')[1] === 'inscription' ||
            window.location.pathname.split('/')[1] === 'motdepasse' ||
            window.location.pathname.split('/')[1] === 'password' ||
            window.location.pathname.split('/')[1] === '' ||
            window.location.pathname.split('/')[1] === 'home')
    ) {
        dispatch(LocationAction.setLocation('Accueil'))
        history.push('/accueil')
        window.location.reload()
    }
    if (user.firstLogged) {
        LocationAction.setLocation('Onboarding')
        console.log(window.location.pathname.split('/')[1])
        if (window.location.pathname.split('/')[1] !== 'onboarding') {
            if (process.env.NODE_ENV === 'development') {
                window.location.assign(
                    `http://${window.location.hostname}:${window.location.port}/onboarding`
                )
            } else {
                window.location.assign(
                    `https://${window.location.hostname}:${window.location.port}/onboarding`
                )
            }
        }
    }

    if (location !== window.location.pathname.split('/')[1]) {
        dispatch(
            LocationAction.setLocation(window.location.pathname.split('/')[1])
        )
    }

    return (
        <Router history={history}>
            <div className="main">
                {user.isLogged ? (
                    <Fragment>
                        <NavbarLogged
                            location={location === '' ? 'Accueil' : location}
                        />
                        {!user.firstLogged ? <MenuAbsolute /> : null}
                    </Fragment>
                ) : (
                    <NavbarUnlogged />
                )}
                <Switch>
                    <Route exact path={['/', '/home']}>
                        <Landing user={user} />
                    </Route>
                    <Route exact path="/accueil">
                        <Dashboard user={user} />
                    </Route>
                    <Route
                        exact
                        path={'/composants'}
                        component={ShowComponents}
                    />
                    <Route exact path="/connexion">
                        <Connexion user={user} />
                    </Route>
                    <Route exact path="/inscription">
                        <Inscription user={user} />
                    </Route>
                    <Route exact path="/motdepasse">
                        <Motdepasse />
                    </Route>
                    <Route exact path="/password/:userId">
                        <Changement />
                    </Route>
                    <Route exact path="/onboarding">
                        <Onboarding user={user} />
                    </Route>
                    <Route exact path="/profil">
                        <Profil user={user} />
                    </Route>
                    <Route exact path="/objectif">
                        <Objectif user={user} />
                    </Route>
                    <Route exact path="/seances">
                        <Seances user={user} />
                    </Route>
                    <Route exact path="/seances/televersement">
                        <Televersement user={user} />
                    </Route>
                    <Route exact path="/seances/recherche">
                        <Recherche user={user} />
                    </Route>
                    <Route exact path="/seances/concepteur">
                        <Preparation user={user} />
                    </Route>
                    <Route exact path="/courbes">
                        <Courbes user={user} />
                    </Route>
                    <Route exact path="/plan">
                        <Plan user={user} />
                    </Route>
                    <Route exact path="/plan/seance/:date/:planId">
                        <ModificationSeance user={user} />
                    </Route>
                    <Route exact path="/entrainements">
                        <Entrainements user={user} />
                    </Route>
                    <Route exact path="/analyse/:id">
                        <Analyse />
                    </Route>
                    <Route exact path="/statistiques">
                        <Statistiques />
                    </Route>
                    <Route component={Lost} />
                </Switch>
                <div className="message-container">
                    {message.danger !== undefined ? (
                        <MessageDanger message={message.danger} />
                    ) : (
                        ''
                    )}
                    {message.warning !== undefined ? (
                        <MessageAlerte message={message.warning} />
                    ) : (
                        ''
                    )}
                    {message.info !== undefined ? (
                        <MessageInfo message={message.info} />
                    ) : (
                        ''
                    )}
                    {message.success !== undefined ? (
                        <MessageSuccess message={message.success} />
                    ) : (
                        ''
                    )}
                </div>
                {user.isLogged ? (
                    !user.firstLogged ? (
                        <ContextBar
                            location={location === '' ? 'Accueil' : location}
                        />
                    ) : (
                        ''
                    )
                ) : (
                    ''
                )}
            </div>
        </Router>
    )
}

export default App
