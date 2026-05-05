import dropdown from '../../../assets/ico-tab-dropdown.svg'

const Dropdown = (props) => {
    return (
        <div className={`grid ${props.margin && props.margin}`}>
            <div
                className="
                relative
                w-48
                peer
                invalid:ring
                invalid:ring-high-contrast-500
                invalid:border-0
                invalid:text-high-contrast-50
                py-1
                px-3
                text-medium-contrast-500
                bg-component-two-500 
                border-2
                border-medium-contrast-500
                rounded-lg
                active:ring-1
                active:ring-medium-contrast-500
                focus:ring-1
                focus:ring-medium-contrast-500
                focus:outline-none
                hover:bg-component-two-500
                "
            >
                <select
                    className="dropdown-select bg-component-two-500 focus:outline-none peer w-44"
                    {...props}
                >
                    {props.options.map((item, index) => {
                        return (
                            <option
                                value={
                                    props.values ? props.values[index] : item
                                }
                                selected={
                                    props.values
                                        ? props.values[index] === props.value
                                        : item === props.value
                                }
                            >
                                {item}
                            </option>
                        )
                    })}
                </select>
                <img
                    src={dropdown}
                    alt="dropdown icon, TrainPreddict application pour cycliste"
                    className="absolute right-1 top-2"
                />
            </div>
        </div>
    )
}

export default Dropdown
