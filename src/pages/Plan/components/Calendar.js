import SimpleReactCalendar from 'simple-react-calendar'

const Calendar = (props) => {
    console.log(props.date)
    return (
        <SimpleReactCalendar
            activeMonth={props.date}
            today={props.date}
            onSelect={(e) => props.onChange(e)}
        />
    )
}

export default Calendar
