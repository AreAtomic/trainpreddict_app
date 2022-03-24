const Cell = (props) => {
    return (
        <span className="border border-high-contrast-500 text-low-contrast-500 w-fit px-4 bg-primary-blue-500 h-8">
            {props.children}
        </span>
    )
}

export default Cell
