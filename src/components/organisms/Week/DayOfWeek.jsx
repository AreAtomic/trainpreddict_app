import dayjs from 'dayjs'
import { useState } from 'react'
import { useEffect } from 'react'
//#region API
import * as middlewares from '../../../middlewares'
import * as services from '../../../services'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { CardDashboard } from '../Card'
//#endregion

const Day = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const userId = auth.userId
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
        setLoading(false)
    }, [])
    const [loading, setLoading] = useState(true)
    const [planned, setPlanned] = useState([])
    const [done, setDone] = useState([])

    return (
        <div
            className={`w-full max-w-xs ${
                props.index !== 0 ? (props.index !== 6 ? 'ml-4' : 'mx-4') : ''
            }`}
        >
            {!loading ? (
                planned.length === 0 ? (
                    <>
                        <CardDashboard date={props.day.date} />
                    </>
                ) : (
                    planned.map((seance) => {
                        return (
                            <>
                                <CardDashboard
                                    somethingToShow={true}
                                    entrainement={seance}
                                    date={props.day.date}
                                />
                            </>
                        )
                    })
                )
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default Day
