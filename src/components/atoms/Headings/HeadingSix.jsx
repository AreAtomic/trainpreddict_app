const HeadingSix = (props) => {
    return (
        <h4
            className={`font-['Open Sans'] text-m ${
                props.color ? props.color : 'text-medium-contrast-500'
            } ${props.className}`}
        >
            {props.children}
        </h4>
    )
}

export default HeadingSix
