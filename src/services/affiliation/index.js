import { requestApi } from '../../api'

/**
 * @description Fetch every users of organistation
 * @param {jwt} token
 * @returns
 */
export const getAllUsers = (token) => {
    return requestApi('get', `assistant/affiliation/coureurs`, token, null)
}

/**
 * @description Fetch information of specific user account
 * @param {ObjectId} userId
 * @param {jwt} token
 * @returns
 */
export const getUserProfil = (userId, token) => {
    return requestApi('get', `assistant/profil/${userId}`, token, null)
}

export const putUserProfil = (
    userId,
    token,
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
    fcfs,
    pfs,
    poids,
    age
) => {
    return requestApi('put', `assistant/profil/${userId}`, token, {
        sse: sse,
        experience: experience,
        heure_sommeil: heure_sommeil,
        temps_recup_max: temps_recup_max,
        nombre_heure_semaine: nombre_heure_semaine,
        nombre_seance_semaine: nombre_seance_semaine,
        musculation: musculation,
        ppg: ppg,
        etirement: etirement,
        foncier: foncier,
        style: style,
        point_faible: point_faible,
        jours_repos: jours_repos,
        fcfs: fcfs,
        pfs: pfs,
        poids: poids,
        age: age,
    })
}

/**
 * @description Create a new coureur in the organisation
 * @param {jwt} token 
 * @param {string} email 
 * @param {string} prenom 
 * @param {string} nom 
 * @param {ISOString} naissance 
 * @param {string} adresse 
 * @param {string} categorie 
 * @param {string} telephone 
 * @returns 
 */
export const createCoureur = (
    token,
    email,
    prenom,
    nom,
    naissance,
    adresse,
    categorie,
    telephone
) => {
    return requestApi('post', `assistant/affiliation/coureur/new`, token, {
        email: email,
        prenom: prenom,
        nom: nom,
        naissance: naissance,
        adresse: adresse,
        categorie: categorie,
        telephone: telephone,
    })
}
