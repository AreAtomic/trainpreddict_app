import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
//#region Import components
import { SpinLoader } from '../../components/atoms'
import {
    Sidebar,
    Calendar,
    ObjectifForm,
    CardDashboard,
    Week,
} from '../../components/organisms'
import {
    CardSeanceList,
    PanelCarac,
    PanelIndic,
    PanelObjectif,
    PanelObjectifModal,
} from '../../components/molecules'
import {
    Dropdown,
    HeadingTwo,
    TableStats,
    CourbesIndicateurs,
    Modal,
    HeadingFour,
    Input,
    InputUnit,
    Select,
    TextArea,
    MultipleSelect,
    ButtonPrimary,
    ButtonPrimarySmall,
} from '../../components/atoms'
//#endregion
//#region Import API
import * as services from '../../services'
import * as middlewares from '../../middlewares'
import { ProfilForm } from '../../components/organisms/Form'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import {
    snapCenterToCursor,
    restrictToFirstScrollableAncestor,
} from '@dnd-kit/modifiers'
import { Draggable, Droppable } from '../../components/organisms'
//#endregion

const Coureur = ({ toast }) => {
    //#region State declaration
    // API states
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)
    const calendar = useSelector((state) => state.calendar)
    const indicators = useSelector((state) => state.indicators)
    const statistics = useSelector((state) => state.statistics)
    const objectifs = useSelector((state) => state.objectifs)
    const caracteristics = useSelector((state) => state.caracteristics)
    const seances = useSelector((state) => state.seances)
    const parametres = useSelector((state) => state.parametres)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        services.getAllSeances(auth.token).then((response) => {
            if (response.status === 401) {
                dispatch(middlewares.logout())
            }
            dispatch(middlewares.setSeances(response.data))
        })
        services
            .getCalendrierYear(auth.userId, dayjs().year(), auth.token)
            .then((response) => {
                if (response.status === 401) {
                    dispatch(middlewares.logout())
                }
                if (!response.data?.actualYear) {
                    setIsCalendar(false)
                }
                dispatch(
                    middlewares.changeCalendarData(
                        response.data?.actualYear?.years[0].weeks
                    )
                ).then(setLoadingCalendar(false))
                dispatch(
                    middlewares.setDatasIndicators(
                        response.data?.actualYear.years[0].weeks
                    )
                ).then(setLoadingIndicators(false))
                dispatch(
                    middlewares.setWeeksStatistics(
                        response.data?.actualYear.years[0].weeks
                    )
                ).then(setLoadingStatistics(false))
            })
        services.getAllObjectifs(auth.userId, auth.token).then((response) => {
            if (response.status === 401) {
                dispatch(middlewares.logout())
            }
            dispatch(middlewares.setObjectifs(response.data))
        })
        services.getUserProfil(auth.userId, auth.token).then((response) => {
            if (response.status === 401) {
                dispatch(middlewares.logout())
            }
            dispatch(middlewares.setUserProfil(response.data)).then(
                setLoadingCaracteristics(false)
            )
        })
    }, [])
    //modal ouverture
    const [openMO, setOpenMO] = useState(false)
    const [openMP, setOpenMP] = useState(false)
    const [loadingCalendar, setLoadingCalendar] = useState(true)
    const [loadingIndicators, setLoadingIndicators] = useState(true)
    const [loadingStatistics, setLoadingStatistics] = useState(true)
    const [loadingObjectifs, setLoadingObjectifs] = useState(true)
    const [loadingCaracteristics, setLoadingCaracteristics] = useState(true)
    const [isCalendar, setIsCalendar] = useState(true)
    const firstWeek = dayjs(calendar.dayOne).week() - 1 || dayjs().week() - 1

    // Dnd
    const [draggedSeance, setDraggedSeance] = useState(null)
    const [parent, setParent] = useState(null)
    const [dragEnd, setDragEnd] = useState(false)

    const [viewSeanceItem, setViewSeanceItem] = useState(null)

    const updateView = () => {
        window.location.reload()
    }

    return (
        <div className="grid">
            {loading && (
                <div className="fixed z-50 w-full h-full top-10 ">
                    <div className="absolute w-full h-full bg-primary-blue-500 opacity-40"></div>
                    <div className="mt-32">
                        <SpinLoader />
                    </div>
                </div>
            )}
            <div className="z-0">
                <div className="z-0 mb-5 ml-3">
                    <div className="grid justify-around grid-cols-1 mb-3 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-2 gap-x-2 gap-y-2">
                        <HeadingTwo className="w-fit">Semaine</HeadingTwo>
                    </div>
                    {loadingCalendar ? (
                        <div>Loading</div>
                    ) : (
                        <div style={{ width: '94vw' }}>
                            {isCalendar ? (
                                <>
                                    <Week
                                        days={
                                            calendar.data[
                                                calendar.firstWeekIndex +
                                                    dayjs().week()
                                            ].days
                                        }
                                    />
                                </>
                            ) : (
                                <ButtonPrimarySmall
                                    onClick={() => {
                                        services
                                            .createCalendrier(
                                                auth.userId,
                                                auth.token
                                            )
                                            .then((res) => {
                                                if (res.status === 401) {
                                                    dispatch(
                                                        middlewares.logout()
                                                    )
                                                }
                                            })
                                    }}
                                >
                                    Générer le calendrier
                                </ButtonPrimarySmall>
                            )}
                        </div>
                    )}
                </div>
                {!auth.structure ? (
                    <div className="mt-6 mb-5 ml-3">
                        <div className="flex">
                            <HeadingTwo>Indicateurs</HeadingTwo>
                            <Dropdown
                                value={indicators.selected}
                                onChange={(event) => {
                                    dispatch(
                                        middlewares.setSelectedIndicators(
                                            event.target.value
                                        )
                                    )
                                }}
                                values={['planned', 'done']}
                                options={['Prévisionnel', 'Réalisé']}
                                margin="ml-7"
                            />
                        </div>
                        <div>
                            <ButtonPrimary
                                onClick={() => {
                                    setLoading(true)
                                    services
                                        .updateCourbe(
                                            user.id,
                                            dayjs().toISOString(),
                                            auth.token
                                        )
                                        .then((response) => {
                                            if (response.status === 401) {
                                                dispatch(middlewares.logout())
                                            }
                                            updateView()
                                            setLoading(false)
                                        })
                                        .catch((err) => console.log(err))
                                }}
                            >
                                Recalculer
                            </ButtonPrimary>
                        </div>
                        <div
                            className="mt-2"
                            style={{
                                maxWidth: '1135px',
                                maxHeight: '350px',
                            }}
                        >
                            {!loadingIndicators && (
                                <CourbesIndicateurs
                                    dates={indicators.dates}
                                    tiredness={
                                        indicators.tiredness[
                                            `${indicators.selected}`
                                        ]
                                    }
                                    form={
                                        indicators.form[
                                            `${indicators.selected}`
                                        ]
                                    }
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    parametres.coureur.courbes && (
                        <div className="mt-6 mb-5 ml-3">
                            <div className="flex sm:flex-row">
                                <HeadingTwo>Indicateurs</HeadingTwo>
                                <Dropdown
                                    value={indicators.selected}
                                    onChange={(event) => {
                                        dispatch(
                                            middlewares.setSelectedIndicators(
                                                event.target.value
                                            )
                                        )
                                    }}
                                    values={['planned', 'done']}
                                    options={['Prévisionnel', 'Réalisé']}
                                    margin="ml-1"
                                />
                            </div>
                            <div
                                className="pr-2 mt-2"
                                style={{
                                    maxWidth: '1135px',
                                    maxHeight: '350px',
                                }}
                            >
                                {!loadingIndicators && (
                                    <CourbesIndicateurs
                                        dates={indicators.dates}
                                        tiredness={
                                            indicators.tiredness[
                                                `${indicators.selected}`
                                            ]
                                        }
                                        form={
                                            indicators.form[
                                                `${indicators.selected}`
                                            ]
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    )
                )}
                <div className="w-1/12 mb-3 ml-3">
                    <HeadingTwo className="mb-3 ">Statistique</HeadingTwo>
                    {loadingStatistics ? (
                        <div></div>
                    ) : (
                        <TableStats
                            year={2022}
                            weeks={statistics.weeks.slice(
                                calendar.firstWeekIndex,
                                statistics.weeks.length
                            )}
                            selected_week={statistics.weekSelected}
                            onChange={(e) => {
                                console.log(e)
                                dispatch(middlewares.setWeekSelected(e))
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Coureur
