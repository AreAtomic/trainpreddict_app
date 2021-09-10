import { useDispatch, useSelector } from 'react-redux'
import { EntrainementsAction } from '../../middlewares/actions'
import { TableTraining } from '../../components'
import reload from '../../assets/reload.svg'

const Entrainements = (props) => {
    const dispatch = useDispatch()
    const entrainements = useSelector((state) => state.entrainement.state)

    if (entrainements === undefined) {
        dispatch(EntrainementsAction.getEntrainements())
    }

    return entrainements !== undefined ? (
        <div className="column mt-1">
            <div
                onClick={() => {
                    dispatch(EntrainementsAction.getEntrainements())
                }}
                className="reload btn"
            >
                <img src={reload} alt="Reload icon" />
            </div>
            <a href="/accueil" className="is-white p-2">
                Accueil
            </a>
            <div className="mb-5"></div>

            <TableTraining entrainements={entrainements} />
        </div>
    ) : (
        <div className="chargement">Chargement</div>
    )
}

export default Entrainements
