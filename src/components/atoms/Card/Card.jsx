const Card = (props) => {
    return (
        <div
            className={`px-3 py-4 max-h-96 overflow-x-auto ${props.width} ${
                props.height
            } ${
                props.bg ? props.bg : 'bg-component-two-500'
            } rounded overflow-auto ${props.className}`}
            onMouseEnter={props.onMouseEnter}
        >
            {props.children}
        </div>
    )
}

export default Card
