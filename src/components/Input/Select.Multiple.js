import React, { useState, Fragment } from 'react'
import ReactToolTip from 'react-tooltip'

import question from '../../assets/question.svg'

const SelectMultiple = (props) => {
    const [active, setactive] = useState(false)

    const handleValue = (e) => {
        let remove = false
        if (props.value.length !== 0) {
            for (let i = 0; i < props.value.length; i++) {
                if (props.value[i] === e.target.value) {
                    props.value.splice(i, 1)
                    remove = true
                }
            }
            if (!remove) {
                props.value.push(e.target.value)
            }
        } else {
            props.value.push(e.target.value)
        }
    }
    return (
        <div className="field">
            <label className="label">
                {props.label}
                {props.tooltip ? (
                    <Fragment>
                        <ReactToolTip />
                        <img
                            className="ml-3 tooltip"
                            src={question}
                            alt="Question"
                            data-tip={props.tooltip}
                            data-background-color="#000000"
                            data-multiline={true}
                        />
                    </Fragment>
                ) : (
                    ''
                )}
            </label>
            <div
                {...props}
                className={`dropdown select
                ${props.error ? 'error' : 'valid'} 
                ${active ? 'is-active' : ''}`}
                onClick={() => setactive(!active)}
            >
                <div className="dropdown-trigger">
                    <div className="multiselect">
                        <span>
                            {props.value.length > 0
                                ? props.value.map((filtre) => (
                                      <input
                                          type="button"
                                          className="filtre"
                                          value={filtre}
                                      />
                                  ))
                                : ''}
                        </span>
                    </div>
                    <div className="dropdown-menu">
                        <div className="dropdown-content">
                            {props.options.map((item, i) => {
                                return (
                                    <input
                                        type="button"
                                        class="dropdown-item"
                                        value={item}
                                        onClick={handleValue}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectMultiple
