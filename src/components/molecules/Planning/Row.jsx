import { TooltipWithDelay } from '../../atoms'

const Row = (props) => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-end-1 ml-10 mr-3 bg-primary-blue-500 text-low-contrast-500 px-6 py-1 h-fit">
                {props.name}
            </div>
            <div className="flex col-end-11">
                {props.days.map((item, i) => {
                    return !item.course ? (
                        <button
                            id={`button_day_${i}`}
                            className={`w-planning-day h-planning-day ${
                                i % 2 === 0
                                    ? 'bg-primary-blue-500'
                                    : 'bg-component-two-500'
                            }`}
                        ></button>
                    ) : (
                        <TooltipWithDelay text={item.course}>
                            <button
                                id={`button_day_${i}`}
                                aria-describedby={`tooltip_day_${i}`}
                                className="w-planning-day h-planning-day bg-success-500"
                            ></button>
                        </TooltipWithDelay>
                    )
                })}
            </div>
            <div
                className={`col-end-12 mr-10 ml-3 bg-primary-blue-500 text-low-contrast-500 px-2 py-1 h-fit ${
                    props.daysOfCourse === 1 && 'mr-12'
                }`}
            >
                {props.daysOfCourse} jour{props.daysOfCourse > 1 && 's'} de
                courses
            </div>
        </div>
    )
}

export default Row
