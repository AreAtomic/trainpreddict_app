const Select = (props) => {
    return (
        <div className={`grid ${props.margin && props.margin}`}>
            <label className="font-['Nunito'] font-regular text-base text-medium-contrast-500">
                {props.label}
            </label>
            <select
                className="w-96
                peer
                invalid:ring
                invalid:ring-high-contrast-500
                invalid:border-0
                invalid:text-high-contrast-50
                py-3
                px-3
                text-low-contrast-500
                bg-component-one-500 
                border-2
                border-low-contrast-500
                rounded-md
                active:ring-1
                active:ring-medium-contrast-500
                focus:ring-1
                focus:ring-medium-contrast-500
                focus:outline-none
                hover:bg-component-one-400
                "
                {...props}
            >
                <option value="none" selected={props.value === -1} disabled>
                    {props.placeholder}
                </option>
                {props.options.map((item, index) => {
                    return (
                        <option
                            value={item}
                            selected={
                                props.values
                                    ? props.values[index] == props.value
                                        ? true
                                        : false
                                    : props.value == item && props.value !== -1
                            }
                        >
                            {item}
                        </option>
                    )
                })}
            </select>
            <p class="mt-2 hidden peer-invalid:inline-block text-high-contrast-50 text-sm">
                {props.helper}
            </p>
        </div>
    )
}

export default Select
