const ButtonSecondary = (props) => {
    return (
        <button
            className={`bg-component-two-500 border-2 border-medium-contrast-500 text-medium-contrast-500 font-bold px-3 py-1 rounded-sm ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default ButtonSecondary
