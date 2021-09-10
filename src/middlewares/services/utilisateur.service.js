import { headers, API_URL } from '.'
import axios from 'axios'

export const put_utilisateur = (last, password, password2) => {
    return axios.put(
        `${API_URL}/utilisateur`,
        { last, password, password2 },
        { headers }
    )
}
