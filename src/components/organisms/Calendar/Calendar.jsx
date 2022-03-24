import dayjs from 'dayjs'
import Day from './Day'
import { useSelector } from 'react-redux'
import * as services from '../../../services'

const Calendar = (props) => {
    //#region State declaration
    // API states
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.userSelected)

    const updateDayPlanned = (date, planned, adding) => {
        const plannedIds = []
        planned.forEach((seance, index) => {
            if (!adding) {
                if (index !== planned.length - 1) {
                    plannedIds.push(seance._id)
                }
            } else {
                plannedIds.push(seance._id)
            }
        })
        const statistiques = {
            // Données à ajouter ou supprimer
            time: planned[planned.length - 1].duree,
            distance: planned[planned.length - 1].estimation_distance,
            sse: planned[planned.length - 1].score_stress_entrainement,
            denivele: planned[planned.length - 1].estimation_deniv,
            // Permet d'ajouter ou de supprimer dans la bdd
            nombreSeance: adding ? planned.length : planned.length - 1,
        }
        console.log(statistiques, plannedIds)
        services.putDayCalendrierPlanned(
            user.id,
            date,
            auth.token,
            plannedIds,
            adding,
            statistiques
        )
    }
    //#endregion
    return (
        <div className="grid">
            {props.weeks.map((week, weekIndex) => {
                return (
                    <div className="flex">
                        {week.days.map((day, dayIndex) => {
                            return (
                                <Day
                                    passed={dayjs().isAfter(dayjs(day.date))}
                                    month={
                                        dayjs(day.date) === 1 || dayIndex === 0
                                            ? dayjs(day.date).format('MMM')
                                            : false
                                    }
                                    day={day}
                                    seances={props.seances}
                                    parent={props.parent}
                                    setParent={(id) => props.setParent(id)}
                                    newSeance={props.newSeance}
                                    resetNewSeance={props.resetNewSeance}
                                    id={`w${weekIndex}-d${dayIndex}`}
                                    dragEnd={props.dragEnd}
                                    updateDayPlanned={updateDayPlanned}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Calendar
