import { HeadingFour, Modal } from '../../atoms'
import { ApercuAnalyse } from '..'
import { CardDoned } from '../Card'
import { Comment } from '../../molecules'
import * as middlewares from '../../../middlewares'
import { useDispatch } from 'react-redux'

const DonedDay = (props) => {
    const dispatch = useDispatch()
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
            <div className="flex justify-between mb-5 mt-2">
                {props.planned ? (
                    props.planned.map((item, index) => {
                        return <CardDoned index={index} entrainement={item} />
                    })
                ) : (
                    <div>Rien de plannifié</div>
                )}
            </div>
            {props.entrainement && (
                <div className="">
                    {props.entrainement.map((item) => {
                        return (
                            <ApercuAnalyse
                                entrainement={item}
                                comments={props.comment}
                                setNewComment={props.setNewComment}
                                saveComment={() => {
                                    props.saveComment()
                                }}
                                newComment={props.newComment}
                            />
                        )
                    })}
                </div>
            )}
            <div className="grid">
                <Comment
                    comments={props.comment}
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

export default DonedDay
