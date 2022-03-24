const HeadingFour = (props) => {
    return (
        <h4
            className={`font-['Open Sans'] text-xl font-bold ${
                props.color ? props.color : 'text-medium-contrast-500'
            } ${props.className}`}
        >
            {props.children}
        </h4>
    )
}

export default HeadingFour
