import React, { useState } from 'react'
import arrow from '../../assets/arrow.svg'

const Slider = (props) => {
    const [active, setactive] = useState(0)
    console.log(active)
    return <div className="slider">
        <div className="columns is-mobile">
            <img
                className="slider-left"
                alt="Flèche TrainPreddict, Application pour cycliste"
                src={arrow}
                onClick={() => { active !== 0 ? setactive(active - 1) : setactive(props.children.length - 1) }}
            />
            <div className="column">
                {props.children.map((item, i) => {
                    return <div className={`slider-item ${active === i ? 'is-active' : ''}`}>
                        {item}
                    </div>
                })}
            </div>
            <img
                className="slider-right"
                alt="Flèche TrainPreddict, Application pour cycliste"
                src={arrow}
                onClick={() => { active !== props.children.length - 1 ? setactive(active + 1) : setactive(0) }}
            />
        </div>
        <div className="slider-counter">
            {props.children.map((item, i) => {
                return <div
                    className={`slider-counter-item ${active === i ? 'is-active' : ''}`}
                    onClick={() => setactive(i)}
                >
                </div>
            })}
        </div>
    </div>
}

export default Slider