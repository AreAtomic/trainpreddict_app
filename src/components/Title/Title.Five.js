const TitleFive = (props) => {
    return (
        <h5
            className={`has-text-centered title is-5 ${
                props.color !== undefined ? props.color : ''
            }`}
            {...props}
        >
            {props.title}
        </h5>
    )
}

export default TitleFive
