import { ButtonPrimary, Card, HeadingFour } from '../../atoms'
import { BarChart } from '../../molecules'
import close from '../../../assets/ico-close.svg'

const CardPlanned = (props) => {
    return (
        <Card className="max-w-card font-bold scrollbar">
            {!props.entrainement.course && (
                <>
                    {' '}
                    <div className="flex justify-between">
                        <HeadingFour>Entrainement #{props.index}</HeadingFour>
                        <img
                            src={close}
                            alt="Close icon, trainpreddict application pour cyclistes"
                            onClick={() => {
                                props.onClose()
                            }}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="grid">
                        <p className="text-medium-contrast-500">
                            {props.entrainement.titre ||
                                props.entrainement.type}
                        </p>
                        <p className="text-low-contrast-500 mb-2">
                            {props.entrainement.type.map((item, index) => {
                                if (
                                    index !==
                                    props.entrainement.type.length - 1
                                )
                                    return (
                                        <span>
                                            {item},{'  '}
                                        </span>
                                    )
                                else return <span>{item}</span>
                            })}
                        </p>
                        <div className="flex justify-between text-low-contrast-500 pr-10">
                            <span>
                                {props.entrainement.score_stress_entrainement}{' '}
                                SSE
                            </span>
                            <span>{props.entrainement.duree}</span>
                            <span>
                                {props.entrainement.estimation_distance}km
                            </span>
                        </div>
                        <p className="text-low-contrast-500 my-2">
                            {props.entrainement.description}
                        </p>
                    </div>
                    <BarChart entrainement={props.entrainement} width={310} />
                    <ButtonPrimary onClick={() => props.handleChoose()}>
                        Choisir
                    </ButtonPrimary>
                </>
            )}
        </Card>
    )
}

export default CardPlanned
