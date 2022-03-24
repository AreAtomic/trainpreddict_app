const ButtonPrimarySmall = (props) => {
    return (
        <button
            className={`bg-high-contrast-500 text-primary-blue-500 font-bold px-3 py-1 rounded-sm ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default ButtonPrimarySmall
