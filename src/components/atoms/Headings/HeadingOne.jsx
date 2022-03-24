const HeadingOne = (props) => {
    return (
        <h1
            className={`font-['Open Sans'] text-5xl font-bold ${
                props.color ? props.color : 'text-medium-contrast-500'
            } ${props.className}`}
        >
            {props.children}
        </h1>
    )
}

export default HeadingOne
