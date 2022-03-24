import { HeadingFour, HeadingTwo } from '../../atoms'

const PanelIndic = (props) => {
    return (
        <div className="border-2 border-medium-contrast-500 grid h-fit lg:w-1/3 w-full cursor-pointer" {...props}>
            <div className="flex justify-between ml-8 mt-3 pb-1">
                <HeadingFour>Indicateurs</HeadingFour>
                <p className="font-['Open Sans'] text-md mr-8 text-medium-contrast-500">
                    {props.day}
                </p>
            </div>
            <div className="flex justify-around my-4">
                <div className="bg-primary-blue-500 rounded-md grid grid-cols-2 px-10 py-5 mx-1">
                    <HeadingTwo color="text-low-contrast-500">
                        {props.form}
                    </HeadingTwo>
                    <HeadingFour color="text-low-contrast-500 mt-1">
                        Forme
                    </HeadingFour>
                </div>
                <div className="bg-primary-blue-500 rounded-md grid grid-cols-2 px-10 py-5 mx-1">
                    <HeadingTwo color="text-high-contrast-500">
                        {props.tiredness}
                    </HeadingTwo>
                    <HeadingFour color="text-high-contrast-500 mt-1">
                        Fatigue
                    </HeadingFour>
                </div>
            </div>
        </div>
    )
}

export default PanelIndic
