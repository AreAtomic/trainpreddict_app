const HeadingFive = (props) => {
    return (
        <h5
            className={`font-['Open Sans'] text-l font-bold ${
                props.color ? props.color : 'text-medium-contrast-500'
            } ${props.className}`}
        >
            {props.children}
        </h5>
    )
}

export default HeadingFive
