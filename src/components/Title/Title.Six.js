const TitleSix = (props) => {
    return <h6 className={`has-text-centered title is-6 ${props.color !== undefined ? props.color : ''}`}>{props.title}</h6>
}

export default TitleSix