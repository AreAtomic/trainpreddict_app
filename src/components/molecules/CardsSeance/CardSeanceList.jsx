import Card from '../../atoms/Card/Card'

const CardSeanceList = (props) => {
    return (
        <Card bg="bg-component-one-500 px-3 select-none cursor-pointer mt-1" width="w-42">
            <p className="text-low-contrast-500 font-semibold text-low-contrast-500">{props.titre}</p>
            <div className="flex flex-between ">
                <p className="font-thin text-low-contrast-500 pr-3">
                    {props.type} {props.temps}
                </p>
                <p className='text-medium-contrast-500'>{props.sse} SSE</p>
            </div>
        </Card>
    )
}

export default CardSeanceList
