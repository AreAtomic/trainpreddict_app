const ShowEntrainement = (props) => {
    return (
        <div className="bg-component-two-500 w-show-md px-1 py-1 overflow-hidden h-show rounded mb-1 border border-high-contrast-100">
            <div className="flex justify-between font-['Open Sans'] mt-1 text-show font-semibold overflow-hidden text-high-contrast-100">
                {props.children}
            </div>
        </div>
    )
}

export default ShowEntrainement
