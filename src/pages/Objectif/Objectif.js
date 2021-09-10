import { useDispatch, useSelector } from 'react-redux'
import {
    ObjectifAction,
    MessageAction,
    PlanAction,
} from '../../middlewares/actions'

import { TitleOne } from '../../components'
import { CardObjectif, Modal } from './components'

import plus from '../../assets/plus.svg'
import reload from '../../assets/reload.svg'
import { useState } from 'react'

const Objectif = (props) => {
    const dispatch = useDispatch()

    const objectif = useSelector((state) => state.objectif.state)
    if (objectif === undefined) {
        dispatch(ObjectifAction.getObjectif())
    }

    const [isactive, setisactive] = useState(false)
    const prepare = useSelector((state) => state.plan.prepare)

    // L'utilisateur veur générer un plan donc on affiche le Modal de création d'objectif
    if (prepare) {
        dispatch(PlanAction.unpreparePlan())
        dispatch(
            MessageAction.setMessage({
                type: 'info',
                message:
                    'Créez votre nouvel objectif vous créera automatiquement le plan assiocé',
            })
        )
        setisactive(true)
    }

    return objectif !== undefined ? (
        <div className="column">
            <div
                onClick={() => {
                    dispatch(ObjectifAction.getObjectif())
                }}
                className="reload btn"
            >
                <img src={reload} alt="Reload icon" />
            </div>
            <a href="/accueil" className="is-white p-2">
                Accueil
            </a>
            <div className="colums title-objectif">
                <TitleOne title="Mes objectifs" />
                <img
                    src={plus}
                    alt="Bouton plus, TrainPreddict application pour cycliste objectif sur mesure"
                    onClick={() => {
                        setisactive(true)
                    }}
                    className="btn"
                />
            </div>
            {objectif !== undefined
                ? objectif.map((item) => {
                      return <CardObjectif objectif={item} />
                  })
                : ''}
            <Modal
                active={isactive}
                onClick={() => {
                    setisactive(false)
                }}
            />
        </div>
    ) : 'Chargement'
}

export default Objectif
