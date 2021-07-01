import React, { Fragment } from 'react'
import ReactToolTip from 'react-tooltip'

import question from '../../assets/question.svg'

const InputUnit = (props) => {
    return (
        <div className="field">
            <label
                className={`label is-flex-direction-row mt-1 ${props.size ? props.size : ''
                    }`}
            >
                <span>{props.label}</span>
                {props.tooltip ? (
                    <Fragment>
                        <ReactToolTip />
                        <img
                            className="ml-3"
                            src={question}
                            width={17}
                            data-tip={props.tooltip}
                            alt="Icone informatio"
                        />
                    </Fragment>
                ) : (
                    ''
                )}
            </label>
            <p className="control has-icons-right">
                <input
                    {...props}
                    className={`input ${props.error ? 'error' : 'valid'}`}
                />
                <span className="icon is-small is-right has-text-right">
                    {props.unit}
                </span>
            </p>
        </div>
    )
}

export default InputUnit
