import { TitleOne } from '../../components'
import affutage from '../../assets/affutage.svg'

const Preparation = () => {
    return (
        <div className="column preparation">
            <TitleOne title="À l'affûtage !" />
            <p>Je suis en train de borner pour arriver affûtées</p>
            <a href="/seances/recherche">Voir les séances déjà crées</a>
            <br />
            <img
                src={affutage}
                alt="Montagne vélo affutage, TrainPreddict entrainement pour cycliste"
                className="mt-3"
            />
        </div>
    )
}

export default Preparation
