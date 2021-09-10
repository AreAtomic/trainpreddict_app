import { Fragment } from 'react'
import { Hexagone, Slider, TitleSix, TitleThree } from '../../../components'

const toHHMMSS = (time) => {
    const hours = parseInt(time)
    const minutes = parseInt(
        (parseInt(time.toFixed(2).split('.')[1]) * 60) / 100
    )
    return `${hours > 9 ? hours : `0${hours}`}:${
        minutes > 9 ? minutes : `0${minutes}:00`
    }`
}
const SliderData = (props) => {
    return (
        <Fragment>
            <div className="column is-hidden-tablet">
                <TitleThree title={props.title} />
                <Slider>
                    <Hexagone>
                        <TitleSix title="Distance" />
                        <p>{props.distance}km</p>
                    </Hexagone>
                    <Hexagone color="is-light">
                        <TitleSix title="SSE" />
                        <p>{props.sse}</p>
                    </Hexagone>
                    <Hexagone>
                        <TitleSix title="Temps" />
                        <p>{toHHMMSS(props.temps)}</p>
                    </Hexagone>
                    <Hexagone color="is-light">
                        <TitleSix title="Nombres d'entrainement" />
                        <p>{props.nombre_seances}</p>
                    </Hexagone>
                </Slider>
            </div>
            <div className="column is-hidden-mobile">
                <TitleThree title={props.title} />
                <div className="columns">
                    <Hexagone>
                        <TitleSix title="Distance" />
                        <p>{props.distance}km</p>
                    </Hexagone>
                    <Hexagone color="is-light">
                        <TitleSix title="SSE" />
                        <p>{props.sse}</p>
                    </Hexagone>
                    <Hexagone>
                        <TitleSix title="Temps" />
                        <p>{toHHMMSS(props.temps)}</p>
                    </Hexagone>
                    <Hexagone color="is-light">
                        <TitleSix title="Nombres d'entrainements" />
                        <p>{props.nombre_seances}</p>
                    </Hexagone>
                </div>
            </div>
        </Fragment>
    )
}

export default SliderData
