const TitleThree = (props) => {
    return (
        <h3
            className={`has-text-centered title is-3 ${
                props.color !== undefined ? props.color : ''
            }`}
            {...props}
        >
            {props.title}
        </h3>
    )
}

export default TitleThree
