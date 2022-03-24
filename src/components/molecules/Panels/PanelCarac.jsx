import { HeadingFive, HeadingFour } from '../../atoms'

const PanelCarac = (props) => {
    return (
        <div
            className="border-2 border-medium-contrast-500 grid h-fit lg:w-1/3 w-full cursor-pointer"
            onClick={() => {
                props.onClick()
            }}
        >
            <div className="flex justify-between ml-8 mt-3">
                <HeadingFour>Caractéristiques</HeadingFour>
            </div>
            <div className="flex justify-around my-4 mb-10 mt-6 text-center">
                <div className="grid">
                    <HeadingFive color="text-low-contrast-500">
                        {props.pfs} W
                    </HeadingFive>
                    <p className="text-low-contrast-500">FTP</p>
                </div>
                <div className="grid">
                    <HeadingFive color="text-low-contrast-500">
                        {props.fcfs} BPM
                    </HeadingFive>
                    <p className="text-low-contrast-500">FCFS</p>
                </div>
                <div className="grid">
                    <HeadingFive color="text-low-contrast-500">
                        {props.poids} kg
                    </HeadingFive>
                    <p className="text-low-contrast-500">Poids</p>
                </div>
            </div>
        </div>
    )
}

export default PanelCarac
