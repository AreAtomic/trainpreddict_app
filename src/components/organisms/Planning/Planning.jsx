import dayjs from 'dayjs'
import { HeaderPlanning, RowPlanning } from '../../molecules'

const Planning = (props) => {
    //#region Calcul first day to display
    const firstDayOfYearIndex = dayjs(props.day_one).day()
    const indexFirstDay =
        dayjs(props.day_one).week() * 7 +
        dayjs(props.day_one).day() +
        1 -
        firstDayOfYearIndex
    //#endregion

    const nextWeek = () => {
        let day_one = dayjs(props.day_one).add('7', 'day')
        props.setDayOne(day_one)
    }
    const previousWeek = () => {
        let day_one = dayjs(props.day_one).add('-7', 'day')
        props.setDayOne(day_one)
    }
    return (
        <div className="grid justify-center">
            <HeaderPlanning
                day_one={props.day_one}
                days={props.days.slice(indexFirstDay, indexFirstDay + 28)}
                nextWeek={() => {
                    nextWeek()
                }}
                previousWeek={() => {
                    previousWeek()
                }}
            />
            <div className="mr-3 mt-3">
                {props.coureurs.map((item, index) => {
                    return (
                        <RowPlanning
                            name={item.name}
                            days={item.days.slice(
                                indexFirstDay,
                                indexFirstDay + 28
                            )}
                            daysOfCourse={item.daysOfCourse}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Planning
