import dayjs from 'dayjs'
import { ShowCourse } from '../../atoms'

const Day = (props) => {
    return (
        <div
            className="bg-primary-blue-500 border border-high-contrast-500 relative w-calendar-small h-calendar-small p-2 overflow-y-auto no-scrollbar"
        >
            {props.passed && (
                <div className="absolute top-0 left-0 w-full h-full bg-low-contrast-500 opacity-10"></div>
            )}
            <div className="flex justify-between text-high-contrast-500">
                <div className="text-left">{props.month && props.month}</div>
                <div className="text-right">
                    {dayjs(props.day.date).format('DD')}
                </div>
            </div>
            {props.day.planned?.map((seance) => {
                return (
                    <ShowCourse>
                        <p>{seance.titre}</p>
                    </ShowCourse>
                )
            })}
        </div>
    )
}

export default Day
