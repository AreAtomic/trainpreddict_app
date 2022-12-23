import { useEffect } from 'react'
import { ListSeance } from '..'
import { Modal, Card, HeadingFour } from '../../atoms'
import { CardPlanned } from '../Card'
import { Droppable } from '../Dnd'
import { Comment } from '../../molecules'
import * as middlewares from '../../../middlewares'
import { useDispatch, useSelector } from 'react-redux'
import { CardListTraining } from '../Card'

const PlannedDay = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    const removePlanned = (indexToRemove) => {
        let newPlanned = props.planned
        if (indexToRemove !== props.planned.length - 1) {
            // Move planned seance to remove on last index
            newPlanned = props.planned.filter(
                (planned, index) => index !== indexToRemove
            )
            newPlanned.push(props.planned[indexToRemove])
        }
        props.setPlanned(
            newPlanned.filter(
                (planned, index) => index !== newPlanned.length - 1
            )
        )
        props.updateDayPlanned(props.day.date, newPlanned, false)
    }

    const updateDayPlannedWithRace = (indexToRemove, courseModel) => {
        let newPlanned = props.planned
        if (indexToRemove !== props.planned.length - 1) {
            // Move planned seance to remove on last index
            newPlanned = props.planned.filter(
                (planned, index) => index !== indexToRemove
            )
            newPlanned.push(props.planned[indexToRemove])
        }
        props.setPlanned(
            newPlanned.filter(
                (planned, index) => index !== newPlanned.length - 1
            )
        )
        props.updateDayPlannedWithRace(
            props.day.date,
            newPlanned,
            false,
            courseModel
        )
    }

    // Update day on end drag & drop
    useEffect(() => {
        if (props.parent === props.id) {
            props.setPlanned([...props.planned, props.newSeance])
            props.updateDayPlanned(
                props.day.date,
                [...props.planned, props.newSeance],
                true
            )
            props.setParent(null)
            props.resetNewSeance()
        }
    }, [props.dragEnd])

    return (
        <Modal
            visible={props.visible}
            onClose={() => {
                props.onClose()
            }}
        >
            <div className="flex">
                <HeadingFour>{props.date}</HeadingFour>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-y-2 gap-x-2 justify-between mt-2">
                {/* //TODO: Add condition for structure condition */}
                {!auth.structure && (
                    <Card
                        className="w-80 max-h-min overflow-y-hidden"
                        onMouseEnter={() => {
                            props.setParent(null)
                        }}
                    >
                        <HeadingFour>Liste de séances</HeadingFour>
                        <ListSeance
                            seances={props.seances}
                            viewSeanceItem={props.viewSeanceItem}
                            setViewSeanceItem={(value) =>
                                props.setViewSeanceItem(value)
                            }
                        />
                    </Card>
                )}
                <Droppable
                    id={props.id}
                    onMouseEnter={() => {
                        props.setParent(props.id)
                    }}
                    style={{ width: '80%' }}
                >
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-y-2 gap-x-2 justify-around w-full">
                        {props.planned ? (
                            props.planned.map((item, index) => {
                                return (
                                    <CardPlanned
                                        index={index}
                                        entrainement={item}
                                        removePlanned={() => {
                                            removePlanned(index)
                                        }}
                                        updateDayPlannedWithRace={(
                                            courseModel
                                        ) => {
                                            updateDayPlannedWithRace(
                                                index,
                                                courseModel
                                            )
                                        }}
                                    />
                                )
                            })
                        ) : (
                            <div>Rien de plannifié</div>
                        )}
                        {props.viewSeanceItem && (
                            <div className="fixed left-8 top-20 z-50">
                                <CardListTraining
                                    entrainement={props.viewSeanceItem}
                                    onClose={() => {
                                        props.setViewSeanceItem(null)
                                    }}
                                    handleChoose={() => {
                                        props.setPlanned([
                                            ...props.planned,
                                            props.viewSeanceItem,
                                        ])
                                        props.updateDayPlanned(
                                            props.day.date,
                                            [
                                                ...props.planned,
                                                props.viewSeanceItem,
                                            ],
                                            true
                                        )
                                        props.setViewSeanceItem(null)
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </Droppable>
            </div>
            <div className="grid">
                <Comment
                    comments={props.comments}
                    value={props.newComment}
                    setValue={(e) => {
                        props.setNewComment(e)
                    }}
                    saveComment={() => {
                        props.saveComment()
                    }}
                    onBlur={() => {
                        dispatch(middlewares.setNewComment(props.newComment))
                    }}
                />
            </div>
        </Modal>
    )
}

export default PlannedDay
