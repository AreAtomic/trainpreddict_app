const HeadingThree = (props) => {
    return (
        <h3
            className={`font-['Open Sans'] text-2xl font-bold ${
                props.color ? props.color : 'text-medium-contrast-500'
            } ${props.className}`}
        >
            {props.children}
        </h3>
    )
}

export default HeadingThree
