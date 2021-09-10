import React, { Fragment } from 'react'
import ReactToolTip from 'react-tooltip'

import question from '../../assets/question.svg'

const Textarea = (props) => {
    return (
        <div className="field">
            <label
                className={`label is-flex-direction-row mt-1 ${
                    props.size ? props.size : ''
                }`}
            >
                <span>{props.label}</span>
                {props.tooltip ? (
                    <Fragment>
                        <ReactToolTip />
                        <img
                            className="ml-3 tooltip"
                            src={question}
                            width={17}
                            data-tip={props.tooltip}
                            data-background-color="#000000"
                            data-multiline={true}
                            alt="Icone information"
                        />
                    </Fragment>
                ) : (
                    ''
                )}
            </label>
            <textarea
                {...props}
                className={`textarea ${props.error ? 'error' : 'valid'}`}
            />
        </div>
    )
}

export default Textarea
