import { Tooltip } from '@material-tailwind/react'
import help from '../../../assets/help.svg'

const InputUnit = (props) => {
    return (
        <div className={`grid ${props.margin && props.margin}`}>
            <label className="font-['Nunito'] font-regular text-base text-medium-contrast-500 w-fit flex">
                {props.label}{' '}
                {props.tooltip && (
                    <Tooltip
                        className="flex bg-primary-blue-500 text-low-contrast-500"
                        content={props.tooltip}
                    >
                        <img
                            src={help}
                            alt="Aide pour cycliste débutant"
                            className="ml-4"
                            width="17px"
                        />
                    </Tooltip>
                )}
            </label>
            <div
                className={`flex w-96 py-3
                sm:max-w-xs
                ${props.maxWidth ? props.maxWidth : 'max-w-xs'}
                px-3
                text-low-contrast-500
                bg-component-one-500 
                border-2
                border-low-contrast-500
                rounded-md
                peer-invalid:ring
                peer-invalid:ring-high-contrast-500
                peer-invalid:border-0
                peer-invalid:text-high-contrast-50
                peer-active:ring-1
                peer-active:ring-medium-contrast-500
                peer-focus:ring-1
                peer-focus:ring-medium-contrast-500
                peer-focus:outline-none
                hover:bg-component-one-400`}
            >
                <input
                    className="
                peer
                w-80
                bg-transparent
                focus:outline-none
                "
                    {...props}
                />
                <span>{props.unit}</span>
            </div>
            <p class="mt-2 hidden peer-invalid:inline-block text-high-contrast-50 text-sm">
                {props.helper}
            </p>
        </div>
    )
}

export default InputUnit
