import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
//#region Import components
import { SpinLoader } from '../../components/atoms'
import { Sidebar, Calendar, ObjectifForm } from '../../components/organisms'
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
                        response.data.actualYear?.years[0].weeks
                    )
                ).then(setLoadingCalendar(false))
                dispatch(
                    middlewares.setDatasIndicators(
                        response.data.actualYear.years[0].weeks
                    )
                ).then(setLoadingIndicators(false))
                dispatch(
                    middlewares.setWeeksStatistics(
                        response.data.actualYear.years[0].weeks
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
                <div className="fixed top-10 w-full z-50 h-full ">
                    <div className="absolute w-full h-full bg-primary-blue-500 opacity-40"></div>
                    <div className="mt-32">
                        <SpinLoader />
                    </div>
                </div>
            )}
            <div className="w-full lg:flex mb-6">
                {loadingObjectifs ? (
                    objectifs[0]?.date &&
                    dayjs(objectifs[0]).isAfter(dayjs()) ? (
                        <PanelObjectif
                            titre={objectifs[0].titre}
                            date={dayjs(objectifs[0].date).format('DD/MM/YYYY')}
                            duree={objectifs[0].duree}
                            distance={objectifs[0].distance}
                            resultat_vise={objectifs[0].resultat_vise}
                            onClick={() => {
                                setOpenMO(true)
                            }}
                            isObjectif={true}
                        />
                    ) : (
                        <PanelObjectif
                            isObjectif={false}
                            onClick={() => {
                                setOpenMO(true)
                            }}
                        />
                    )
                ) : (
                    <div></div>
                )}
                <div className="absolute top-0 left-0">
                    <Modal
                        visible={openMO}
                        onClose={() => {
                            setOpenMO(false)
                        }}
                    >
                        <HeadingTwo className="mb-4">Objectifs</HeadingTwo>
                        <div className="flex">
                            {objectifs.slice(0, 3).map((objectif, index) => {
                                const titrePosition = [
                                    'Prochain Objectif',
                                    'Second Objectif',
                                    'Dernier Objectif',
                                ]
                                return (
                                    <PanelObjectifModal
                                        id={objectif._id}
                                        titre={objectif.titre}
                                        date={dayjs(objectif.date).format(
                                            'DD/MM/YYYY'
                                        )}
                                        duree={objectif.temps}
                                        distance={objectif.distance}
                                        resultat_vise={objectif.resultat_vise}
                                        titrePosition={
                                            dayjs(objectifs[0]).isAfter(dayjs())
                                                ? 'Passé'
                                                : titrePosition[index]
                                        }
                                        denivele={objectif.denivele}
                                        description={objectif.description}
                                        type={objectif.type}
                                        toast={toast}
                                    />
                                )
                            })}
                        </div>
                        <ObjectifForm toast={toast} />
                    </Modal>
                </div>
                {!loadingCaracteristics ? (
                    <PanelCarac
                        pfs={caracteristics.pfs}
                        fcfs={caracteristics.fcfs}
                        poids={caracteristics.poids}
                        onClick={() => {
                            setOpenMP(true)
                        }}
                    />
                ) : (
                    <div></div>
                )}
                <div className="absolute top-0 left-0">
                    <Modal
                        visible={openMP}
                        onClose={() => {
                            setOpenMP(false)
                        }}
                    >
                        <ProfilForm toast={toast} />
                    </Modal>
                </div>
            </div>
            <div className="z-0 mt-16">
                <div className="ml-3 mb-5 z-0">
                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 mb-3 justify-around">
                        <HeadingTwo className="w-fit">Calendrier</HeadingTwo>
                        <Dropdown
                            value={calendar.weeksDisplayed}
                            onChange={(event) => {
                                dispatch(
                                    middlewares.changeViewCalendar(
                                        parseInt(event.target.value)
                                    )
                                )
                            }}
                            values={[1, 2, 3, 4, 5, 6, 7, 8]}
                            options={[
                                '1 semaine',
                                '2 semaines',
                                '3 semaines',
                                '4 semaines',
                                '5 semaines',
                                '6 semaines',
                                '7 semaines',
                                '8 semaines',
                            ]}
                        />
                        <div className="inline-block">
                            <Input
                                value={dayjs(calendar.dayOne).format(
                                    'YYYY-MM-DD'
                                )}
                                type="date"
                                onChange={(e) => {
                                    dispatch(
                                        middlewares.setDayOneCalendar(
                                            dayjs(e.target.value).toISOString()
                                        )
                                    )
                                }}
                            />
                        </div>
                    </div>
                    {loadingCalendar ? (
                        <div>Loading</div>
                    ) : (
                        <div>
                            {isCalendar ? (
                                <Calendar
                                    className=""
                                    dayOne={dayjs()}
                                    weeks={calendar.data.slice(
                                        calendar.firstWeekIndex + firstWeek,
                                        calendar.firstWeekIndex +
                                            firstWeek +
                                            calendar.weeksDisplayed
                                    )}
                                    seances={seances}
                                    parent={parent}
                                    setParent={(id) => setParent(id)}
                                    resetNewSeance={() =>
                                        setDraggedSeance(null)
                                    }
                                    newSeance={draggedSeance}
                                    dragEnd={dragEnd}
                                    viewSeanceItem={viewSeanceItem}
                                    setViewSeanceItem={(value) =>
                                        setViewSeanceItem(value)
                                    }
                                />
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
                <div className="ml-3 mb-3 w-1/12">
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
                {!auth.structure && (
                    <div className="ml-3 mb-5 mt-6">
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
                )}
            </div>
        </div>
    )
}
export default Coureur
