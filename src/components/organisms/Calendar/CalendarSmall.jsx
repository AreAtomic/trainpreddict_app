/*eslint no-lone-blocks: "off"*/
import dayjs from 'dayjs'
import DaySmall from './DaySmall'

const CalendarSmall = (props) => {
    return (
        <div className="grid">
            {props.weeks.map((week) => {
                return (
                    <div className="flex">
                        {week.days.map((day, dayIndex) => {
                            return (
                                <DaySmall
                                    passed={dayjs().isAfter(dayjs(day.date))}
                                    month={
                                        dayjs(day.date) === 1 || dayIndex === 0
                                            ? dayjs(day.date).format('MMM')
                                            : false
                                    }
                                    day={day}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarSmall
