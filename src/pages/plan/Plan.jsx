import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
//#region Import components
import { ButtonSecondary, SpinLoader } from '../../components/atoms'
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
import OnBoardingContext from '../../contexts/onboardingContext'
import { ProfilForm } from '../../components/organisms/Form'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import {
    snapCenterToCursor,
    restrictToFirstScrollableAncestor,
} from '@dnd-kit/modifiers'
import { Draggable, Droppable } from '../../components/organisms'
//#endregion

const Plan = ({ toast }) => {
    //#region State declaration
    // API states
    const onBoardingContext = useContext(OnBoardingContext)
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
            <div className="z-0">
                <div className="ml-3 z-0">
                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 mb-3 justify-around">
                        <HeadingTwo className="w-fit mt-0">
                            Calendrier
                        </HeadingTwo>
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
                                <>
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
                                    {auth.structure && (
                                        <div className="my-8">
                                            <HeadingFour>
                                                Soyez prudent
                                            </HeadingFour>
                                            <p className="mb-3">
                                                Cette action va recalculer votre
                                                plan pour vos futur objectif
                                                mais elle risque de supprimer
                                                toute votre plannification
                                                actuelle.
                                            </p>
                                            {!onBoardingContext.complete ? (
                                                <div className="grid grid-cols-2 max-w-md">
                                                    <ButtonPrimary
                                                        onClick={() => {
                                                            onBoardingContext.handleInnerStep(
                                                                'end'
                                                            )
                                                        }}
                                                    >
                                                        Etape suivate
                                                    </ButtonPrimary>
                                                    <ButtonSecondary
                                                        className="ml-2"
                                                        onClick={() => {
                                                            console.log(
                                                                'generate plan for objectifs'
                                                            )
                                                            services
                                                                .createPlan(
                                                                    auth.userId,
                                                                    auth.token
                                                                )
                                                                .then(
                                                                    (
                                                                        response
                                                                    ) =>
                                                                        onBoardingContext.handleInnerStep(
                                                                            'end'
                                                                        )
                                                                )
                                                        }}
                                                    >
                                                        Générer votre plan
                                                    </ButtonSecondary>
                                                </div>
                                            ) : (
                                                <ButtonPrimary
                                                    className="ml-4"
                                                    onClick={() => {
                                                        console.log(
                                                            'generate plan for objectifs'
                                                        )
                                                        services
                                                            .createPlan(
                                                                auth.userId,
                                                                auth.token
                                                            )
                                                            .then((response) =>
                                                                onBoardingContext.handleInnerStep(
                                                                    'end'
                                                                )
                                                            )
                                                    }}
                                                >
                                                    Générer votre plan
                                                </ButtonPrimary>
                                            )}
                                        </div>
                                    )}
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
                                                onBoardingContext.handleSetComplete(
                                                    true
                                                )
                                            })
                                    }}
                                >
                                    Générer le calendrier
                                </ButtonPrimarySmall>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Plan
