const TitleTwo = (props) => {
    return <h2 className={`has-text-centered title pt-1 is-2 ${props.color !== undefined ? props.color : ''}`}>{props.title}</h2>
}

export default TitleTwo