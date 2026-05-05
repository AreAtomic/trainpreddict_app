const ShowCourse = (props) => {
    return (
        <div className="bg-component-one-500 w-show-sm px-1 py-1 overflow-hidden h-fit rounded-sm overflow-y-auto mb-1">
            <p className="font-['Open Sans'] text-show mt-1 font-semibold overflow-hidden text-low-contrast-500">
                {props.children}
            </p>
        </div>
    )
}

export default ShowCourse
