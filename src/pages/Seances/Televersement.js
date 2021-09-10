import { Upload } from '../../components'
import { useHistory } from 'react-router'

const Televersement = (props) => {
    const history = useHistory()
    return (
        <div className="column televersement">
            <div onClick={() => history.back()} className="is-white p-2">
                Retour
            </div>
            <p>
                Comment téléverser votre fichier et sauvegarder sa séance ?
                <br />
                <br />
                <ol>
                    <li>Cliquez sur "choisir un fichier"</li>
                    <li>Sélectionez votre capteur</li>
                    <li>Choisissez votre entrainement</li>
                    <li>Vérifiez que le fichier soit au bon format (.fit)</li>
                    <li>Cliquez sur Ouvrir</li>
                    <li>Cliquez sur le bouton "Sauvegarder sa séance"</li>
                </ol>
            </p>
            <Upload />
        </div>
    )
}

export default Televersement
