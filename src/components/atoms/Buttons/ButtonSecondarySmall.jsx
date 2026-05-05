const ButtonSecondary = (props) => {
    return (
        <button
            className={`hover:bg-component-two-300 active:bg-component-two-700 bg-component-two-500 border-2 border-medium-contrast-500 text-medium-contrast-500 font-bold px-3 py-1 rounded-sm ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default ButtonSecondary
