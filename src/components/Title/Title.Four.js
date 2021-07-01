const TitleFour = (props) => {
    return <h4 className={`has-text-centered title is-4 ${props.color !== undefined ? props.color : ''}`}>{props.title}</h4>
}

export default TitleFour