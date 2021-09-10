import React, { useState, Fragment } from 'react'
import { ButtonPrimarySmall, ButtonSecondarySmall } from '..'
import dayjs from 'dayjs'
import { TitleFour } from '../Title'
import { EntrainementsAction } from '../../middlewares/actions'
import { useDispatch } from 'react-redux'

const TableTraining = (props) => {
    const dispatch = useDispatch()
    const [active, setactive] = useState(0)
    const [suppr, setsuppr] = useState(null)

    const nextPage = () => {
        setactive(active + 1)
    }

    const previousPage = () => {
        setactive(active - 1)
    }

    const pages = []
    for (let i = 0; i < props.entrainements.length; i += 25) {
        if (i + 25 > props.entrainements.length) {
            let arr = props.entrainements.slice(i, props.entrainements.length)
            pages.push(arr)
        } else {
            let arr = props.entrainements.slice(i, i + 25)
            pages.push(arr)
        }
    }

    return pages[active] ? (
        <Fragment>
            <div className="table-zone">
                <div className="table">
                    <div className="table-head">
                        <div className="table-item">Date</div>
                        <div className="table-item">Titre</div>
                        <div className="table-item">Distance</div>
                        <div className="table-item">Temps</div>
                        <div className="table-item">SSE</div>
                        <div className="table-item"> </div>
                        <div className="table-item"> </div>
                    </div>
                    <div className="page is-active">
                        {pages[active].map((item, i) => {
                            return (
                                <div className="table-row">
                                    <div className="table-item">
                                        {dayjs(item.date).format('DD/MM/YYYY')}
                                    </div>
                                    <div className="table-item">
                                        {item.type}
                                    </div>
                                    <div className="table-item">
                                        {item.distance}
                                    </div>
                                    <div className="table-item">
                                        {item.duree}
                                    </div>
                                    <div className="table-item">
                                        {item.score_stress_entrainement}
                                    </div>
                                    <div className="table-buttons">
                                        <div className="table-item">
                                            <a href={`analyse/${item._id}`}>
                                                <ButtonPrimarySmall nom="Visualiser" />
                                            </a>
                                        </div>
                                        <div className="table-item">
                                            <div
                                                onClick={() => {
                                                    setsuppr(i)
                                                }}
                                            >
                                                <ButtonSecondarySmall nom="Supprimer" />
                                            </div>
                                        </div>
                                        <div
                                            className={`modal ${
                                                suppr === i ? 'is-active' : ''
                                            }`}
                                        >
                                            <div className="modal-background"></div>
                                            <div
                                                className="modal-close"
                                                onClick={() => {
                                                    setsuppr(null)
                                                }}
                                            ></div>
                                            <div className="modal-content">
                                                <div className="notification is-danger">
                                                    <TitleFour title="Cette action n'est pas réversible" />
                                                    <p>
                                                        Êtes-vous sur de vouloir
                                                        supprimer cet
                                                        entrainement ?
                                                    </p>
                                                    <div className="buttons center mt-2">
                                                        <div
                                                            onClick={() => {
                                                                dispatch(
                                                                    EntrainementsAction.deleteEntrainementById(
                                                                        item._id
                                                                    )
                                                                )
                                                                setsuppr(null)
                                                            }}
                                                        >
                                                            <ButtonSecondarySmall nom="Supprimer" />
                                                        </div>
                                                        <ButtonPrimarySmall
                                                            nom="Annuler"
                                                            onClick={() => {
                                                                setsuppr(null)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <nav
                className="pagination is-right mt-3"
                role="navigation"
                aria-label="pagination"
            >
                {active === 0 ? (
                    pages.length > 1 ? (
                        <div className="pagination-next" onClick={nextPage}>
                            <ButtonSecondarySmall nom="Suivant" />
                        </div>
                    ) : (
                        ''
                    )
                ) : active === pages.length ? (
                    pages.length > 1 ? (
                        <div
                            className="pagination-previous"
                            onClick={previousPage}
                        >
                            <ButtonSecondarySmall nom="Précédent" />
                        </div>
                    ) : (
                        ''
                    )
                ) : (
                    <div>
                        <div
                            className="pagination-previous"
                            onClick={previousPage}
                        >
                            <ButtonSecondarySmall nom="Précédent" />
                        </div>
                        <div className="pagination-next" onClick={nextPage}>
                            <ButtonSecondarySmall nom="Suivant" />
                        </div>
                    </div>
                )}
                <ul class="pagination-list">
                    {pages.map((item, i) => {
                        if (i === active) {
                            return (
                                <li>
                                    <div
                                        class="pagination-link is-current"
                                        onClick={(e) => {
                                            setactive(parseInt(e.target.value))
                                        }}
                                        value={i}
                                    >
                                        {i + 1}
                                    </div>
                                </li>
                            )
                        } else {
                            return (
                                <li>
                                    <button
                                        class="pagination-link"
                                        onClick={(e) => {
                                            setactive(parseInt(e.target.value))
                                        }}
                                        value={i}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>
        </Fragment>
    ) : (
        <p className="has-text-centered">Aucun entrainement réalisé</p>
    )
}

export default TableTraining
