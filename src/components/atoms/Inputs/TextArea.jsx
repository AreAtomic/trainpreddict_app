import { Tooltip } from '@material-tailwind/react'
import help from '../../../assets/help.svg'

const TextArea = (props) => {
    return (
        <div className={`grid ${props.margin && props.margin}`}>
            <label className="font-['Nunito'] font-regular text-base text-medium-contrast-500 flex">
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
            <textarea
                className={`${
                    props.className
                        ? props.className
                        : `w-96
                        sm:max-w-xs
                        ${props.maxWidth ? props.maxWidth : 'max-w-xs'}
                peer
                invalid:ring
                invalid:ring-high-contrast-500
                invalid:border-0
                invalid:text-high-contrast-50
                py-3
                px-3
                text-low-contrast-500
                bg-component-one-500 
                border-2
                border-low-contrast-500
                rounded-md
                active:ring-1
                active:ring-medium-contrast-500
                focus:ring-1
                focus:ring-medium-contrast-500
                focus:outline-none
                hover:bg-component-one-400`
                }`}
                style={{
                    height: `${props.height}px`,
                    width: `${props.width}px`,
                }}
                {...props}
            />
        </div>
    )
}

export default TextArea
