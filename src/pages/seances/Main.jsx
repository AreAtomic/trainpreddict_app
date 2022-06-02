import { useSelector } from 'react-redux'
import arrow from '../../assets/arrow.svg'
import bicycle from '../../assets/bicycle-blue.svg'
import trainpreddict from '../../assets/logo.svg'
import newrace from '../../assets/new.svg'
import { ButtonSecondarySmall } from '../../components/atoms'

const SeancesRouter = () => {
    return (
        <div>
            <a href="/upload" className="grid cursor-pointer mt-10">
                <div className="flex flex-row justify-around">
                    <img
                        src={bicycle}
                        alt="Vélo TrainPreddict, application pour cycliste avec suivi d'entrainement"
                    />
                    <img src={arrow} alt="flèche trainpreddict" />
                    <img
                        src={trainpreddict}
                        alt="Logo TrainPreddict, application pour cycliste avec suivi d'entrainement"
                        width={80}
                    />
                </div>
                <ButtonSecondarySmall className="w-fit px-6 mx-auto mt-3">
                    Upload d'entrainement
                </ButtonSecondarySmall>
            </a>
            <a href="/courses" className="grid cursor-pointer mt-20">
                <div className="flex flex-row justify-around">
                    <img
                        src={newrace}
                        alt="Course TrainPreddict, application pour cycliste avec préparation de courses"
                    />
                </div>
                <ButtonSecondarySmall className="w-fit px-6 mx-auto mt-3">
                    Créer une course
                </ButtonSecondarySmall>
            </a>
        </div>
    )
}

export default SeancesRouter
