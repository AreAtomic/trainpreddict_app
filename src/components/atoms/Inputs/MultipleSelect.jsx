import { useEffect, useState } from 'react'
import { onlyUnique } from '../../../utils'
import close from '../../../assets/ico-close.svg'
import dropdown from '../../../assets/dropdown.svg'
import { Tooltip } from '@material-tailwind/react'
import help from '../../../assets/help.svg'

const Select = (props) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(props.value)

    const addValue = (e) => {
        setValue(onlyUnique([...value, e]))
    }

    const removeValue = (index) => {
        const new_value = value
        new_value.splice(index, 1)
        setValue(new_value)
    }

    useEffect(() => {
        props.onChange(value)
    }, [value, props])

    return (
        <div className={`grid ${props.margin && props.margin}`}>
            <label className="font-['Nunito'] font-regular text-base text-medium-contrast-500 flex">
                {props.label}
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
                className={`w-96
                sm:max-w-xs
                ${props.maxWidth ? props.maxWidth : 'max-w-xs'}
                peer
                invalid:ring
                invalid:ring-high-contrast-500
                invalid:border-0
                invalid:text-high-contrast-50
                py-1
                px-1
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
                hover:bg-component-one-400
                flex
                flex-row
                font-['Nunito']
                font-bold
                text-md
                `}
                onClick={() => setOpen(!open)}
            >
                <div className="w-80 py-1 overflow-x-hidden flex flex-row hover:overflow-x-auto">
                    {value.map((item, i) => {
                        return (
                            <span
                                className={`bg-component-two-500 h-fit py-1 pl-3 grid grid-cols-2 w-fit mr-1 shrink-0 select-none rounded-md`}
                                key={i}
                            >
                                {item}
                                <img
                                    src={close}
                                    width="24"
                                    className="ml-2 cursor-pointer"
                                    onClick={() => {
                                        removeValue(i)
                                    }}
                                    alt="close icon, trainpreddict application pour cycliste"
                                />
                            </span>
                        )
                    })}
                </div>
                <span className=" right-0">
                    <img
                        src={dropdown}
                        width="36"
                        className="ml-2 cursor-pointer"
                        onClick={() => {
                            setOpen(!open)
                        }}
                        alt="dropdown icon, trainpreddict application pour cycliste"
                    />
                </span>
            </div>
            <div
                className={`bg-component-600 border-2 text-low-contrast-500 border-low-contrast-500 ${
                    open ? 'block' : 'hidden'
                }`}
            >
                {props.options.map((item) => {
                    return (
                        <div
                            className="py-2 px-3 hover:text-medium-contrast-500 hover:bg-component-two-500 cursor-pointer"
                            onClick={() => {
                                addValue(item)
                            }}
                            value={item}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
            <p class="mt-2 invisible peer-invalid:visible text-high-contrast-50 text-sm">
                {props.helper}
            </p>
        </div>
    )
}

export default Select
