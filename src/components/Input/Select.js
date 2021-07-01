import React, { Fragment } from 'react'
import ReactToolTip from 'react-tooltip'

import question from '../../assets/question.svg'

const Select = (props) => {
    return (
        <div className="field">
            <label className="label mt-1">
                {props.label}
                {props.tooltip ? (
                    <Fragment>
                        <ReactToolTip />
                        <img
                            className="ml-3"
                            src={question}
                            alt="Question"
                            data-tip={props.tooltip}
                        />
                    </Fragment>
                ) : (
                    ''
                )}
            </label>
            <div class="basic-select">
                <select
                    {...props}
                    className={`select ${props.error ? 'error' : 'valid'}`}
                >
                    {props.options.map((item) => {
                        return <option value={item}>{item}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default Select
