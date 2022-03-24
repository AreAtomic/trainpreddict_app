import { HeadingFive, HeadingFour, HeadingThree } from '../../atoms'
import trophy from '../../../assets/trophy.svg'

const PanelObjectif = (props) => {
    return (
        <div
            className="border-2 border-medium-contrast-500 grid h-fit lg:w-1/3 w-full cursor-pointer"
            onClick={() => {
                props.onClick()
            }}
        >
            <div className="flex justify-between ml-8 mt-3">
                <HeadingFour>Prochain objectif</HeadingFour>
            </div>
            <div className="flex justify-around my-4">
                <div className="mx-1 px-6 py-6 bg-component-two-500 rounded-md">
                    <img
                        src={trophy}
                        alt="rophée objectif, application pour cycliste TrainPreddict"
                    />
                </div>
                {props.isObjectif ? (
                    <div className="mx-1 grid w-4/6">
                        <HeadingFive>{props.titre}</HeadingFive>
                        <p className="text-low-contrast-500 mt-1">
                            {props.date}
                        </p>
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
                ) : (
                    <HeadingFive className="mr-10 mt-6">Pas d'objectif planifié</HeadingFive>
                )}
            </div>
        </div>
    )
}

export default PanelObjectif
