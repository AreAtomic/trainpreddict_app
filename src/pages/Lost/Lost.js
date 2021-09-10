import { TitleOne } from '../../components'
import lostImage from '../../assets/lost.svg'

const Lost = () => {
    return (
        <div className="column lost">
            <TitleOne title="Oops !" />
            <p>On dirait que vous êtes perdu...</p>
            <a href="/">Retrouver votre chemin</a>
            <img
                src={lostImage}
                alt="Montagne vélo perdu, TrainPreddict entrainement pour cycliste"
                className="mt-3"
            />
        </div>
    )
}

export default Lost
