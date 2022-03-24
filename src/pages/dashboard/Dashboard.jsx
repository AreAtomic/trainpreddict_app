import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
//#region Import components
import {
    HeadingTwo,
    TableCoureur,
    Dropdown,
    ButtonPrimary,
} from '../../components/atoms'
import {
    Planning,
    CalendarSmall,
    CoureurForm,
} from '../../components/organisms'
//#endregion
//#region Import API
import * as services from '../../services'
import * as middlewares from '../../middlewares'
//#endregion

const Dashboard = ({ toast }) => {
    //#region State declaration
    // API states
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state) => state.auth)
    const users = useSelector((state) => state.userList)
    const planning = useSelector((state) => state.planning)
    const calendar = useSelector((state) => state.calendar)

    // Page states
    const [date, setDate] = useState(dayjs())
    const [loadingUser, setLoadingUser] = useState(true)
    const [loadingPlanning, setLoadingPlanning] = useState(true)
    const [loadingCalendar, setLoadingCalendar] = useState(true)
    const firstWeekToDisplay = dayjs(date).week()

    //modal new coureur
    const [openNc, setOpenNc] = useState(false)

    useEffect(() => {
        services.getAllUsers(auth.token).then((response) => {
            dispatch(middlewares.setUserList(response.data)).then(
                setLoadingUser(false)
            )
        })
        services.getAllCourses(auth.token).then((response) => {
            dispatch(middlewares.addRacesToPlanning(response.data, date)).then(
                setLoadingCalendar(false)
            )
        })
    }, [])

    useEffect(() => {
        if (users) {
            users.forEach((user) => {
                services
                    .getAllCoursesUser(user._id, auth.token)
                    .then((response) => {
                        dispatch(
                            middlewares.addUserToPlanning(
                                user,
                                response.data,
                                date,
                                planning
                            )
                        )
                    })
            })
        }
        services.getAllCourses(auth.token).then((response) => {
            dispatch(middlewares.addRacesToCalendar(response.data, date)).then(
                setLoadingPlanning(false)
            )
        })
    }, [users, date])
    //#endregion
    console.log("Dashboard", toast)
    return (
        <div>
            <div className="flex mt-5 mb-2">
                <div className="w-2/5 ml-10">
                    <HeadingTwo className="mb-3">Liste des coureurs</HeadingTwo>
                    {!loadingUser ? (
                        <TableCoureur
                            className="animate-[fadeIn-1s-linear]"
                            coureur={users}
                        />
                    ) : (
                        <div class="max-w-sm w-full">
                            <div class="animate-pulse flex space-x-1">
                                <div class="flex-1 space-y-1 py-1">
                                    <div class="h-20 bg-component-two-200"></div>
                                    <div class="grid grid-cols-3 gap-1">
                                        <div class="h-8 bg-component-two-200"></div>
                                        <div class="h-8 bg-component-two-200"></div>
                                        <div class="h-8 bg-component-two-200"></div>
                                    </div>
                                    <div class="grid grid-cols-3 gap-1">
                                        <div class="h-8 bg-component-two-200"></div>
                                        <div class="h-8 bg-component-two-200"></div>
                                        <div class="h-8 bg-component-two-200"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <ButtonPrimary
                        className="mt-5"
                        onClick={() => {
                            setOpenNc(true)
                        }}
                    >
                        Ajouter un coureur
                    </ButtonPrimary>
                    <CoureurForm
                        value={openNc}
                        close={() => {
                            setOpenNc(false)
                        }}
                        toast={toast}
                    />
                </div>
                <div className="w-2/3">
                    <div className="flex mb-3">
                        <HeadingTwo className="mr-12">Calendrier</HeadingTwo>
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
                    </div>
                    <div className="w-max-1/2">
                        <CalendarSmall
                            className="w-max-1/3"
                            weeks={calendar.data.slice(
                                firstWeekToDisplay,
                                firstWeekToDisplay + calendar.weeksDisplayed
                            )}
                        />
                    </div>
                </div>
            </div>
            <div>
                <HeadingTwo className="mt-10 mb-5 ml-10">
                    Planning des coureurs
                </HeadingTwo>
                {loadingPlanning ? (
                    <div class="animate-pulse flex space-x-1 ml-10 w-11/12">
                        <div class="flex-1 space-y-1 py-1">
                            <div class="h-10 bg-component-two-200"></div>
                            <div class="grid grid-cols-12 gap-1">
                                <div class="h-8 bg-component-two-200 col-span-1"></div>
                                <div class="h-8 bg-component-two-200 col-span-10"></div>
                                <div class="h-8 bg-component-two-200 col-span-1"></div>
                            </div>
                            <div class="grid grid-cols-12 gap-1">
                                <div class="h-8 bg-component-two-200 col-span-1"></div>
                                <div class="h-8 bg-component-two-200 col-span-10"></div>
                                <div class="h-8 bg-component-two-200 col-span-1"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Planning
                        day_one={planning.dayOne}
                        setDayOne={(day) => {
                            dispatch(middlewares.changeDatePlanning(day))
                        }}
                        days={planning.races}
                        coureurs={planning.users}
                    />
                )}
            </div>
        </div>
    )
}

export default Dashboard
