import { HeadingFive, HeadingFour } from '../../atoms'
import trophy from '../../../assets/trophy.svg'

const PanelObjectifModal = (props) => {
    return (
        <div className="rounded-sm grid h-fit bg-component-two-500 lg:w-1/3 w-full m-4">
            <div className="flex justify-between ml-8 mt-3">
                <HeadingFour>{props.titrePosition}</HeadingFour>
            </div>
            <div className="flex justify-around my-4">
                <div className="mx-1 px-6 py-6 bg-component-two-700 rounded-md">
                    <img
                        src={trophy}
                        alt="rophée objectif, application pour cycliste TrainPreddict"
                    />
                </div>
                <div className="mx-1 grid w-4/6">
                    <HeadingFive>{props.titre}</HeadingFive>
                    <p className="text-low-contrast-500 mt-1">{props.date}</p>
                    <div className="flex justify-between">
                        <p className="text-low-contrast-500 mt-1">
                            {props.duree}
                        </p>
                        <p className="text-low-contrast-500 mt-1">
                            {props.distance}km
                        </p>
                        <p className="text-low-contrast-500 mt-1">
                            {props.resultat_vise}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelObjectifModal
