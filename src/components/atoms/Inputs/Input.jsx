const Input = (props) => {
    return (
        <div className={`grid ${props.margin && props.margin}`}>
            <label className="font-['Nunito'] font-regular text-base text-medium-contrast-500">
                {props.label}
            </label>
            <input
                className={`${props.width ? props.width : 'w-96'}
                max-w-xs
                peer
                invalid:ring
                invalid:ring-high-contrast-500
                invalid:border-0
                invalid:text-high-contrast-50
                py-1
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
                `}
                {...props}
            />
            <p class="mt-2 hidden peer-invalid:block text-high-contrast-50 text-sm">
                {props.helper}
            </p>
        </div>
    )
}

export default Input
