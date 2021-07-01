const TitleOne = (props) => {
    return <h1 className={`has-text-centered title pt-2 is-1${props.color !== undefined ? props.color : ''}`}>{props.title}</h1>
}

export default TitleOne