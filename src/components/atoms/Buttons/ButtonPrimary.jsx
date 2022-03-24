const ButtonPrimary = (props) => {
    return (
        <button
            className={`bg-high-contrast-500 text-primary-blue-500 font-bold px-6 py-2 rounded-sm ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default ButtonPrimary
