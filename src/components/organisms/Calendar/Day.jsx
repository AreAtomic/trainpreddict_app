import dayjs from 'dayjs'
import { useState } from 'react'
import { useEffect } from 'react'
import { ShowEntrainement } from '../../atoms'
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
    const userId = useSelector((state) => state.userSelected.id)
    useEffect(() => {
        const tempPlanned = []
        props.day.planned.forEach((seance) => {
            services
                .getPlannedObject(user.id, seance, auth.token)
                .then((response) => {
                    if (response.data) {
                        tempPlanned.push({
                            ...response.data,
                            course: response.data._utilisateur ? true : false,
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
                    if (response.data) {
                        tempDone.push({
                            ...response.data,
                        })
                        setDone([...done, ...tempDone])
                    }
                })
        })
        setLoading(false)
    }, [])
    //#endregion
    //#region Pages state
    const [loading, setLoading] = useState(true)
    const [planned, setPlanned] = useState([])
    const [done, setDone] = useState([])
    const [edit, setEdit] = useState(false)
    const [newComment, setNewComment] = useState(
        useSelector((state) => state.daySelected.newComment)
    )
    const [comments, setComments] = useState(props.day.comment)
    const saveComment = (value) => {
        console.log(newComment)
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
            setPlanned([...planned, props.newSeance])
            props.updateDayPlanned(
                props.day.date,
                [...planned, props.newSeance],
                true
            )
            props.setParent(null)
            props.resetNewSeance()
        }
    }, [props.dragEnd])

    return (
        <Droppable id={props.id}>
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
                        setPlanned={(value) => setPlanned(value)}
                        newComment={newComment}
                        setNewComment={(e) => {
                            setNewComment(e)
                        }}
                        saveComment={() => saveComment()}
                        comments={comments}
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
            <div
                className="bg-primary-blue-500 border border-high-contrast-500 relative w-calendar h-calendar p-2 overflow-y-auto no-scrollbar"
                onClick={() => {
                    setEdit(true)
                }}
                id={`cal-${props.id}`}
                onMouseEnter={() => {
                    props.setParent(props.id)
                }}
            >
                {props.passed && (
                    <div className="absolute top-0 left-0 w-full h-full bg-low-contrast-500 opacity-10"></div>
                )}
                <div className="flex justify-between text-high-contrast-500">
                    <div className="text-left">
                        {props.month && props.month}
                    </div>
                    <div className="text-right">
                        {dayjs(props.day.date).format('ddd DD')}
                    </div>
                </div>
                {!loading &&
                    planned.map((seance) => {
                        return (
                            <ShowEntrainement>
                                <p>{seance.titre}</p>
                                {!seance.course && (
                                    <p className="text-medium-contrast-500">
                                        {seance.score_stress_entrainement} SSE
                                    </p>
                                )}
                            </ShowEntrainement>
                        )
                    })}
                {!loading &&
                    done.map((entrainement) => {
                        return (
                            <ShowEntrainement>
                                <p>{entrainement.titre}</p>
                                <p className="text-medium-contrast-500">
                                    {entrainement.score_stress_entrainement}
                                    SSE
                                </p>
                            </ShowEntrainement>
                        )
                    })}
            </div>
        </Droppable>
    )
}

export default Day
