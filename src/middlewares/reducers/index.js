import { combineReducers } from 'redux'
import message from './message'
import auth from './auth'
import location from './location'
import onboarding from './onboarding'
import objectif from './objectif'
import plan from './plan'
import infosup from './infosup'
import donnees from './donnees'
import profil from './profil'
import seance from './seance'
import courbes from './courbes'
import entrainement from './entrainement'
import statistiques from './statistiques'

export default combineReducers({
    message,
    auth,
    location,
    onboarding,
    objectif,
    plan,
    infosup,
    donnees,
    profil,
    seance,
    courbes,
    entrainement,
    statistiques,
})
