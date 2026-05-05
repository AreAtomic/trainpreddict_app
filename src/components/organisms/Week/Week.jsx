import Day from './DayOfWeek'
import arrow from '../../../assets/dropdown-arrow.svg'

const Week = ({ days }) => {
    const handleScrollRight = () => {
        const content = document.getElementById('week')
        const content_scroll_width = content.scrollWidth
        let content_scoll_left = content.scrollLeft

        content_scoll_left += 319.5
        if (content_scoll_left >= content_scroll_width) {
            content_scoll_left = content_scroll_width
        }
        content.scrollLeft = content_scoll_left
    }

    const handleScrollLeft = () => {
        const content = document.getElementById('week')
        const content_scroll_width = content.scrollWidth
        let content_scoll_left = content.scrollLeft

        content_scoll_left -= 319.5
        if (content_scoll_left >= content_scroll_width) {
            content_scoll_left = content_scroll_width
        }
        content.scrollLeft = content_scoll_left
    }
    return (
        <div className="flex justify-between select-none">
            <img
                src={arrow}
                onClick={() => handleScrollLeft()}
                alt="arrow"
                className="rotate-90"
                width={30}
            />
            <div
                className="flex flex-row overflow-x-scroll w-full scrollbar"
                id="week"
            >
                {days.map((day, index) => {
                    return <Day day={day} index={index} />
                })}
            </div>
            <img
                src={arrow}
                onClick={() => handleScrollRight()}
                alt="arrow"
                className="rotate-270 cursor-pointer"
                width={30}
            />
        </div>
    )
}

export default Week
