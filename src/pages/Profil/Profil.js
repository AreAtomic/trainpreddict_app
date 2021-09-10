import { Accordion, ButtonPrimaryMedium, TitleOne } from '../../components'
import {
    InformationPersonnelle,
    ProfilSportif,
    InformationPlan,
    Configuration,
} from './components'
import { AuthAction } from '../../middlewares/actions'
import { useDispatch } from 'react-redux'

const Profil = (props) => {
    const dispatch = useDispatch()

    return (
        <div>
            <a href="/accueil" className="is-white p-2">
                Accueil
            </a>
            <TitleOne title={`${props.user.prenom} ${props.user.nom}`} />
            <Accordion title="Informations personnelle">
                <InformationPersonnelle />
            </Accordion>
            <Accordion title="Profil sportif">
                <ProfilSportif />
            </Accordion>
            <Accordion title="Information plan">
                <InformationPlan />
            </Accordion>
            <Accordion title="Configuration">
                <Configuration />
            </Accordion>
            <div className="column has-text-centered mt-4">
                <ButtonPrimaryMedium
                    nom="Déconnexion"
                    onClick={() => {
                        dispatch(AuthAction.logout())
                        window.location.reload()
                    }}
                />
            </div>
        </div>
    )
}

export default Profil
