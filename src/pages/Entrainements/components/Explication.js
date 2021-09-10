import { TitleFive, Select, ButtonPrimarySmall } from '../../../components'
import question from '../../../assets/question.svg'
import { useState } from 'react'
import { EntrainementsAction } from '../../../middlewares/actions'
import { useDispatch } from 'react-redux'

const Explication = (props) => {
    const dispatch = useDispatch()
    const [type_entrainement, settype_entrainement] = useState(
        props.analyse.type_entrainement
    )

    return (
        <div className="explication my-auto">
            <TitleFive color="is-light" title="Analyse de l'entrainement" />
            <img
                src={question}
                alt="question"
                className="question-explication"
            />
            <p>{props.analyse.description}</p>
            <div className="columns mt-3 mb-2">
                <div className="column">
                    <Select
                        options={[
                            'Inconnu',
                            'Foncier',
                            'Récupération',
                            'Rythme',
                            'Seuil',
                            'PMA',
                            'VO2 Max',
                            'Sprint',
                        ]}
                        value={type_entrainement}
                        onChange={(e) => settype_entrainement(e.target.value)}
                    />
                </div>
                <div className="column mt-3">
                    <ButtonPrimarySmall
                        nom="Enregistrer le type"
                        onClick={() => {
                            dispatch(
                                EntrainementsAction.putEntrainementType(
                                    props.analyse._id,
                                    type_entrainement
                                )
                            )
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Explication
