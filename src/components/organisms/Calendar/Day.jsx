import dayjs from 'dayjs'
import { useState } from 'react'
import { useEffect } from 'react'
import {
    ShowEntrainement,
    ShowCourse,
    ShowMobile,
    ShowObjectif,
} from '../../atoms'
import DonedDay from './DonedDay'
import PlannedDay from './PlannedDay'
import { Droppable } from '../Dnd'
//#region API
import * as middlewares from '../../../middlewares'
import * as services from '../../../services'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
//#endregion

const Day = (props) => {
    //#region External state
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)
    const userId = auth.userId

    const [loading, setLoading] = useState(true)
    const [planned, setPlanned] = useState([])
    const [done, setDone] = useState([])
    const [objectif, setObjectif] = useState([])
    const [edit, setEdit] = useState(false)
    const [newComment, setNewComment] = useState(
        useSelector((state) => state.daySelected.newComment)
    )
    const [comments, setComments] = useState(props.day.comment)

    useEffect(() => {
        const tempPlanned = []
        props.day.planned.forEach((seance) => {
            services
                .getPlannedObject(userId, seance, auth.token)
                .then((response) => {
                    if (response.status === 401) {
                        dispatch(middlewares.logout())
                    }
                    if (response.data) {
                        console.log(response)
                        tempPlanned.push({
                            ...response.data,
                            course: response.data.course,
                        })
                        setPlanned([...planned, ...tempPlanned])
                    }
                })
        })
        const tempDone = []
        props.day.done.forEach((seance) => {
            services
                .getEntrainementAnalyse(seance, auth.token)
                .then((response) => {
                    if (response.status === 401) {
                        dispatch(middlewares.logout())
                    }
                    if (response.data) {
                        tempDone.push({
                            ...response.data,
                        })
                        setDone([...done, ...tempDone])
                    }
                })
        })
        const tempObjectif = []
        props.objectif?.forEach((objectifId) => {
            services
                .getInformationsObjectif(objectifId, auth.token)
                .then((response) => {
                    if (response.status === 401) {
                        dispatch(middlewares.logout())
                    }
                    if (response.objectif) {
                        tempObjectif.push({ ...response.objectif[0] })
                    }
                    setObjectif(tempObjectif)
                })
        })
        setLoading(false)
    }, [])
    //#endregion
    //#region Pages state
    
    const saveComment = (value) => {
        services
            .putDayCalendarComment(userId, props.day.date, auth.token, [
                ...comments,
                {
                    from: user.name,
                    value: newComment,
                },
            ])
            .then((res) => {
                setComments([
                    ...comments,
                    {
                        from: user.name,
                        value: newComment,
                    },
                ])
            })

        dispatch(middlewares.setNewComment(''))
    }
    //#endregion

    useEffect(() => {
        if (props.parent === props.id) {
            if (!props.newSeance?.course) {
                setPlanned([...planned, props.newSeance])
                props.updateDayPlanned(
                    props.day.date,
                    [...planned, props.newSeance],
                    true
                )
                props.setParent(null)
                props.resetNewSeance()
            } else {
                setPlanned([...planned, props.newSeance])
                props.updateDayPlannedWithRace(
                    props.day.date,
                    [...planned, props.newSeance],
                    true,
                    props.newSeance
                )
                props.setParent(null)
                props.resetNewSeance()
            }
        }
    }, [props.dragEnd])

    return (
        <Droppable id={props.id}>
            {planned && done && (
                <div className="absolute top-0 left-0">
                    {/** Modal more informations */}
                    {!props.passed ? (
                        <PlannedDay
                            visible={edit}
                            onClose={() => {
                                setEdit(false)
                            }}
                            date={dayjs(props.day.date).format('DD/MM/YYYY')}
                            seances={props.seances}
                            planned={planned}
                            entrainement={done}
                            // Adding planned day with drag and drop
                            id={`modal-${props.id}`}
                            parent={props.parent}
                            setParent={props.setParent}
                            dragEnd={props.dragEnd}
                            newSeance={props.newSeance}
                            resetNewSeance={props.resetNewSeance}
                            day={props.day}
                            updateDayPlanned={props.updateDayPlanned}
                            updateDayPlannedWithRace={
                                props.updateDayPlannedWithRace
                            }
                            setPlanned={(value) => setPlanned(value)}
                            newComment={newComment}
                            setNewComment={(e) => {
                                setNewComment(e)
                            }}
                            saveComment={() => saveComment()}
                            comments={comments}
                            viewSeanceItem={props.viewSeanceItem}
                            setViewSeanceItem={(value) =>
                                props.setViewSeanceItem(value)
                            }
                        />
                    ) : (
                        <DonedDay
                            visible={edit}
                            onClose={() => {
                                setEdit(false)
                            }}
                            date={dayjs(props.day.date).format('DD/MM/YYYY')}
                            entrainement={done}
                            planned={planned}
                            newComment={newComment}
                            setNewComment={(e) => {
                                setNewComment(e)
                            }}
                            saveComment={() => saveComment()}
                            comment={comments}
                        />
                    )}
                </div>
            )}
            <div
                className="bg-primary-blue-500 border border-high-contrast-500 relative p-1 overflow-y-auto no-scrollbar 2xl:w-calendar 2xl:h-calendar xl:w-calendar xl:h-calendar lg:w-calendar-small lg:h-calendar-small ml:h-calendar-small ml:w-calendar-small md:h-calendar-small md:w-calendar-small sm:h-calendar-mobile sm:w-calendar-mobile xs:h-calendar-mobile xs:w-calendar-mobile"
                onClick={() => {
                    setEdit(true)
                }}
                id={`cal-${props.id}`}
                onMouseEnter={() => {
                    props.setParent(props.id)
                }}
            >
                {comments?.length > 0 && (
                    <div className="absolute right-16 w-3 h-3 bg-high-contrast-500 rounded-full"></div>
                )}
                {props.passed && (
                    <div className="absolute top-0 left-0 w-full h-full bg-low-contrast-500 opacity-10"></div>
                )}
                <div className="flex justify-between text-high-contrast-500">
                    <div className="text-left 2xl:text-[13px] xl:text-[13px] lg:text-[13px] ml:text-[13px] md:text-[13px] md:text-[7px] sm:text-[5px] xs:text-[5px]">
                        {props.month && props.month}
                    </div>
                    <div className="text-right 2xl:text-[13px] xl:text-[13px] lg:text-[13px] ml:text-[13px] md:text-[13px] md:text-[10px] sm:text-[10px] xs:text-[10px]">
                        {dayjs(props.day.date).format('DD')}
                    </div>
                </div>
                {!loading &&
                    planned.map((seance) => {
                        return (
                            <>
                                <div className="2xl:flex xl:flex lg:flex ml:hidden md:hidden sm:hidden xs:hidden">
                                    <ShowEntrainement>
                                        <p className="text-[10px]">
                                            {seance?.titre}
                                        </p>
                                        {!seance.course && (
                                            <p className="text-medium-contrast-500 text-[10px]">
                                                {
                                                    seance?.score_stress_entrainement
                                                }{' '}
                                                SSE
                                            </p>
                                        )}
                                    </ShowEntrainement>
                                </div>
                                <div className="2xl:hidden xl:hidden lg:hidden ml:flex md:flex sm:hidden xs:hidden">
                                    <ShowCourse>
                                        <p className="text-[10px]">
                                            {seance?.titre}
                                        </p>
                                        {!seance?.course && (
                                            <p className="text-medium-contrast-500 text-[10px]">
                                                {
                                                    seance?.score_stress_entrainement
                                                }
                                            </p>
                                        )}
                                    </ShowCourse>
                                </div>
                                <div className="2xl:hidden xl:hidden lg:hidden ml:hidden md:hidden sm:flex xs:flex">
                                    <ShowMobile>
                                        <p className="text-[7px]">
                                            {seance?.titre}
                                        </p>
                                    </ShowMobile>
                                </div>
                            </>
                        )
                    })}
                {!loading &&
                    done.map((entrainement) => {
                        return (
                            <ShowEntrainement>
                                <p>
                                    {entrainement?.titre || entrainement?.type}
                                </p>
                                <p className="text-medium-contrast-500">
                                    {entrainement?.score_stress_entrainement}
                                    SSE
                                </p>
                            </ShowEntrainement>
                        )
                    })}
                {!loading &&
                    objectif.map((objectif) => (
                        <ShowObjectif>
                            <p>{objectif?.titre}</p>
                        </ShowObjectif>
                    ))}
            </div>
        </Droppable>
    )
}

export default Day
