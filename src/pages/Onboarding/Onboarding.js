import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { LocationAction } from '../../middlewares/actions'

/* Components */
import {
    IndexIndicator,
    PhraseIndicator,
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Objectif,
    Plan,
} from './Components'
import { TitleThree } from '../../components'

const Onboarding = (props) => {
    /* Value */
    const { slide } = useSelector((state) => state.onboarding)
    const slides = [
        <First />,
        <Second />,
        <Third />,
        <Fourth />,
        <Fifth />,
        <Objectif />,
        <Plan />,
    ]

    /* Redirection */
    if (!props.user.firstLogged) {
        LocationAction.setLocation('Accueil')
        return <Redirect to="/accueil" />
    }

    return slide !== undefined ? (
        <div className="container pt-4 onboarding">
            <TitleThree
                title={`Bienvenue ${props.user.prenom} ${props.user.nom}`}
            />
            <PhraseIndicator slide={slide} />
            {slides[slide]}
            <IndexIndicator slide={slide} />
        </div>
    ) : 'Chargement'
}

export default Onboarding
