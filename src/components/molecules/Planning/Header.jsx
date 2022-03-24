import arrow from '../../../assets/ico-carrot-right-small.svg'
import { TooltipWithDelay } from '../../atoms'
import dayjs from 'dayjs'

const Header = (props) => {
    return (
        <div className="flex text-medium-contrast-500 mx-auto">
            <img
                src={arrow}
                alt="Flèche header table TrainPreddict courses"
                className="rotate-180 mr-6 w-8"
                onClick={() => {
                    props.previousWeek()
                }}
            />
            <div className="grid gap-0">
                <div className="flex">
                    <div className="w-1/4 border-l-2 border-medium-contrast-500 pl-2">
                        {dayjs(props.day_one).format('DD/MM/YYYY')}
                    </div>
                    <div className="w-1/4 border-l-2 border-medium-contrast-500 pl-2">
                        {dayjs(props.day_one)
                            .add(7, 'day')
                            .format('DD/MM/YYYY')}
                    </div>
                    <div className="w-1/4 border-l-2 border-medium-contrast-500 pl-2">
                        {dayjs(props.day_one)
                            .add(14, 'day')
                            .format('DD/MM/YYYY')}
                    </div>
                    <div className="w-1/4 border-l-2 border-medium-contrast-500 pl-2">
                        {dayjs(props.day_one)
                            .add(21, 'day')
                            .format('DD/MM/YYYY')}
                    </div>
                </div>
                <div className="flex">
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
            </div>
            <img
                src={arrow}
                alt="Flèche header table TrainPreddict courses"
                className="ml-6 w-8"
                onClick={() => {
                    props.nextWeek()
                }}
            />
        </div>
    )
}

export default Header
