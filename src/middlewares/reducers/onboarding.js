import { Types } from '../actions'

const initialState = sessionStorage.getItem('onboarding')
    ? { state: JSON.parse(sessionStorage.getItem('onboarding')), slide: 0 }
    : {
          state: {
              /* First */
              naissance: '',
              adresse: {
                  rue: '',
                  zip: '',
                  ville: '',
              },
              telephone: '',
              decouverte: '',
              /* Second */
              categorie: '',
              experience: '',
              fcfs: '',
              pfs: '',
              /* Third */
              poids: '',
              sommeil: '',
              temps_recup_max: '',
              /* Fourth */
              nombre_heure_semaine: '',
              nombre_seance_semaine: '',
              jours_repos: [],
              foncier: '',
              /* Fifth */
              musculation: '',
              ppg: '',
              etirement: '',
              style: '',
              point_faible: '',
          },
          slide: 0,
      }

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_ONBOARDING:
            return { state: payload }

        case Types.SET_SLIDE:
            return { ...state, slide: payload }

        case Types.CLEAR_ONBOARDING:
            return {}

        default:
            return state
    }
}
