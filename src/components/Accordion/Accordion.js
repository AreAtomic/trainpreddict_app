import React, { useState } from 'react'
import { TitleFive } from '../../components'
import arrow from '../../assets/arrow.svg'

const Accordion = (props) => {
    const [expand, setexpand] = useState(false)
    return (
        <div className="accordion">
            <div className="accordion-title" onClick={() => setexpand(!expand)}>
                <TitleFive title={props.title} color="is-light" />
                <img
                    src={arrow}
                    alt="Flèche rose TrainPreddict"
                    className={!expand ? '' : 'reverse'}
                />
                <div className="clearfix"></div>
            </div>
            {expand && (
                <div className="accordion-content">{props.children}</div>
            )}
        </div>
    )
}

export default Accordion
