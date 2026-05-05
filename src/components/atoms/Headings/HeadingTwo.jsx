const HeadingTwo = (props) => {
    return (
        <h2
            className={`font-['Open Sans'] text-3xl font-bold ${
                props.color ? props.color : 'text-medium-contrast-500'
            } ${props.className}`}
        >
            {props.children}
        </h2>
    )
}

export default HeadingTwo
