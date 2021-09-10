const isLoggedIn = localStorage.getItem('user')
const token = isLoggedIn ? JSON.parse(localStorage.getItem('user')).token : ''

/* Initialisation du token si connecté */
let headers = {}
if (isLoggedIn) {
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'application/json',
        'x-access-token': token,
    }
} else {
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'application/json',
    }
}

/* Définition de l'URL en fonction de l'environnement */
let API_URL = ''
if (process.env.NODE_ENV === 'development') {
    API_URL = `http://localhost:5000/api`
}
else {
    API_URL = `https://trainpreddict.fr:6001/api`
}

export { headers, API_URL }
