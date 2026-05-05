import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
//#region Import components
import { ButtonPrimarySmall, SpinLoader } from '../../components/atoms'
import {
    Dropdown,
    HeadingTwo,
    TableStats,
    CourbesIndicateurs,
    ButtonPrimary,
} from '../../components/atoms'

import * as services from '../../services'
import * as middlewares from '../../middlewares'

const Cuorbes = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)
    const indicators = useSelector((state) => state.indicators)
    const statistics = useSelector((state) => state.statistics)
    const calendar = useSelector((state) => state.calendar)
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
                const calendarWeeks =
                    response.data?.actualYear?.years?.[0]?.weeks
                dispatch(middlewares.changeCalendarData(calendarWeeks))
                dispatch(
                    middlewares.setDatasIndicators(calendarWeeks)
                ).then(setLoadingIndicators(false))
                dispatch(
                    middlewares.setWeeksStatistics(calendarWeeks)
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
            dispatch(middlewares.setUserProfil(response.data))
        })
    }, [])

    const [loadingIndicators, setLoadingIndicators] = useState(true)
    const [loadingStatistics, setLoadingStatistics] = useState(true)

    const updateView = () => {
        window.location.reload()
    }

    return (
        <div className="grid w-full">
            {loading && (
                <div className="fixed top-10 w-full z-50 h-full ">
                    <div className="absolute w-full h-full bg-primary-blue-500 opacity-40"></div>
                    <div className="mt-32">
                        <SpinLoader />
                    </div>
                </div>
            )}
            <div className="z-0">
                {!auth.structure ? (
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
                ) : (
                    parametres.coureur.courbes && (
                        <div className="ml-3 mb-5 mt-6">
                            <div className="flex sm:flex-row">
                                <HeadingTwo>Indicateurs</HeadingTwo>
                                <ButtonPrimarySmall
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
                                                    dispatch(
                                                        middlewares.logout()
                                                    )
                                                }
                                                updateView()
                                                setLoading(false)
                                            })
                                            .catch((err) => console.log(err))
                                    }}
                                    className="w-fit mx-4"
                                >
                                    Recalculer
                                </ButtonPrimarySmall>
                            </div>
                            <div className='mt-2'>
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
                                />
                            </div>
                            <div
                                className="mt-2 pr-2"
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
            </div>
        </div>
    )
}

export default Cuorbes
