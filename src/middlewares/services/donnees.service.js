import { headers, API_URL } from '.'
import axios from 'axios'

export const post_donnees = (
    sse,
    experience,
    heure_sommeil,
    temps_recup_max,
    nombre_heure_semaine,
    nombre_seance_semaine,
    musculation,
    ppg,
    etirement,
    foncier,
    style,
    point_faible,
    jours_repos
) => {
    return axios
        .post(
            `${API_URL}/donneesUtilisateur`,
            {
                sse,
                experience,
                heure_sommeil,
                temps_recup_max,
                nombre_heure_semaine,
                nombre_seance_semaine,
                musculation,
                ppg,
                etirement,
                foncier,
                style,
                point_faible,
                jours_repos,
            },
            { headers }
        )
        .then((response) => {
            localStorage.setItem('donnees', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const put_donnees = (
    sse,
    experience,
    heure_sommeil,
    temps_recup_max,
    nombre_heure_semaine,
    nombre_seance_semaine,
    musculation,
    ppg,
    etirement,
    foncier,
    style,
    point_faible,
    jours_repos
) => {
    return axios
        .put(
            `${API_URL}/donneesUtilisateur`,
            {
                sse,
                experience,
                heure_sommeil,
                temps_recup_max,
                nombre_heure_semaine,
                nombre_seance_semaine,
                musculation,
                ppg,
                etirement,
                foncier,
                style,
                point_faible,
                jours_repos,
            },
            { headers }
        )
        .then((response) => {
            localStorage.setItem('donnees', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const get_donnees = () => {
    return axios
        .get(`${API_URL}/donneesUtilisateur`, { headers })
        .then((response) => {
            localStorage.setItem('donnees', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}
